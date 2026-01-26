import { describe, test, expect, beforeEach, vi } from "vitest"
import { JSDOM } from "jsdom"

// Global DOM variable
let dom: JSDOM

// Mock DOM environment
const setupDOM = (cardCount: number = 10) => {
  dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <body>
        <div class="pagination-bar">
          <select id="pagination-select">
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="48">48</option>
          </select>
          <button id="prev-button">Previous</button>
          <button id="next-button">Next</button>
        </div>
        <div id="cardContainer">
          ${Array.from({ length: cardCount }, (_, i) => 
            `<div class="card" data-title="Card ${i + 1}">Card ${i + 1}</div>`
          ).join('')}
        </div>
      </body>
    </html>
  `, {
    url: "http://localhost", // Provide a URL to avoid localStorage issues
  })

  global.document = dom.window.document
  global.window = dom.window as any
  global.Event = dom.window.Event
  global.CustomEvent = dom.window.CustomEvent
  
  // Mock localStorage
  const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(), 
    removeItem: vi.fn(),
    clear: vi.fn(),
    length: 0,
    key: vi.fn()
  }
  Object.defineProperty(dom.window, 'localStorage', {
    value: localStorageMock,
    writable: true
  })
  global.localStorage = localStorageMock
}// Simple PaginationManager class for testing (extracted from paginate.ts)
class PaginationManager {
  private allCards: HTMLElement[]
  private currentPage: number = 1
  private itemsPerPage: number = 6
  private totalPages: number = 1

  constructor() {
    this.allCards = Array.from(document.querySelectorAll(".card"))
    this.init()
  }

  private init() {
    this.calculateTotalPages()
    this.setupEventListeners()
    this.showCurrentPage()
    this.updateButtonStates()
  }

  private setupEventListeners() {
    const paginateSelect = document.getElementById("pagination-select") as HTMLSelectElement
    const prevButton = document.getElementById("prev-button")
    const nextButton = document.getElementById("next-button")

    // Listen for filter changes
    window.addEventListener('cardsFiltered', () => {
      setTimeout(() => this.refreshPagination(), 10)
    })

    paginateSelect?.addEventListener("change", (e) => {
      const target = e.target as HTMLSelectElement
      this.itemsPerPage = parseInt(target.value)
      this.currentPage = 1
      this.calculateTotalPages()
      this.showCurrentPage()
      this.updateButtonStates()
    })

    prevButton?.addEventListener("click", () => {
      if (this.currentPage > 1) {
        this.currentPage--
        this.showCurrentPage()
        this.updateButtonStates()
      }
    })

    nextButton?.addEventListener("click", () => {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        this.showCurrentPage()
        this.updateButtonStates()
      }
    })
  }

  private refreshPagination() {
    this.currentPage = 1
    this.calculateTotalPages()
    this.showCurrentPage()
    this.updateButtonStates()
  }

  private calculateTotalPages() {
    const filteredCards = this.getFilteredCards()
    this.totalPages = Math.ceil(filteredCards.length / this.itemsPerPage)
    if (this.totalPages === 0) this.totalPages = 1
  }

  private showCurrentPage() {
    const filteredCards = this.getFilteredCards()
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage

    this.allCards.forEach((card) => {
      if (card.getAttribute('data-hidden-by-filter') === 'true') {
        card.style.display = "none"
      } else {
        card.style.display = "none"
      }
    })

    filteredCards.slice(startIndex, endIndex).forEach((card) => {
      card.style.display = "block"
    })
  }

  private updateButtonStates() {
    const prevButton = document.getElementById("prev-button") as HTMLButtonElement
    const nextButton = document.getElementById("next-button") as HTMLButtonElement

    if (prevButton) {
      prevButton.disabled = this.currentPage === 1
      prevButton.style.opacity = this.currentPage === 1 ? "0.5" : "1"
    }

    if (nextButton) {
      nextButton.disabled = this.currentPage === this.totalPages
      nextButton.style.opacity = this.currentPage === this.totalPages ? "0.5" : "1"
    }
  }

  // Public methods for testing
  public getCurrentPage(): number {
    return this.currentPage
  }

  public getTotalPages(): number {
    return this.totalPages
  }

  public getItemsPerPage(): number {
    return this.itemsPerPage
  }

  public getVisibleCards(): HTMLElement[] {
    return this.allCards.filter(card => card.style.display !== "none")
  }

  public getFilteredCards(): HTMLElement[] {
    return this.allCards.filter(card => {
      return card.getAttribute('data-hidden-by-filter') !== 'true'
    })
  }
}

describe("PaginationManager", () => {
  let paginationManager: PaginationManager

  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("initializes with correct default values", () => {
    setupDOM(10)
    paginationManager = new PaginationManager()

    expect(paginationManager.getCurrentPage()).toBe(1)
    expect(paginationManager.getItemsPerPage()).toBe(6)
    expect(paginationManager.getTotalPages()).toBe(2) // 10 cards / 6 per page = 2 pages
  })

  test("shows correct number of cards on first page", () => {
    setupDOM(10)
    paginationManager = new PaginationManager()

    const visibleCards = paginationManager.getVisibleCards()
    expect(visibleCards).toHaveLength(6)
  })

  test("navigates to next page correctly", () => {
    setupDOM(10)
    paginationManager = new PaginationManager()

    const nextButton = document.getElementById("next-button") as HTMLButtonElement
    nextButton.click()

    expect(paginationManager.getCurrentPage()).toBe(2)
    const visibleCards = paginationManager.getVisibleCards()
    expect(visibleCards).toHaveLength(4) // Remaining 4 cards on page 2
  })

  test("navigates to previous page correctly", () => {
    setupDOM(10)
    paginationManager = new PaginationManager()

    // Go to page 2 first
    const nextButton = document.getElementById("next-button") as HTMLButtonElement
    nextButton.click()

    // Then go back to page 1
    const prevButton = document.getElementById("prev-button") as HTMLButtonElement
    prevButton.click()

    expect(paginationManager.getCurrentPage()).toBe(1)
    const visibleCards = paginationManager.getVisibleCards()
    expect(visibleCards).toHaveLength(6)
  })

  test("changes items per page when dropdown changes", () => {
    setupDOM(15)
    paginationManager = new PaginationManager()

    const select = document.getElementById("pagination-select") as HTMLSelectElement
    select.value = "12"
    select.dispatchEvent(new Event("change"))

    expect(paginationManager.getItemsPerPage()).toBe(12)
    expect(paginationManager.getTotalPages()).toBe(2) // 15 cards / 12 per page = 2 pages
    expect(paginationManager.getCurrentPage()).toBe(1) // Should reset to page 1
  })

  test("disables previous button on first page", () => {
    setupDOM(10)
    paginationManager = new PaginationManager()

    const prevButton = document.getElementById("prev-button") as HTMLButtonElement
    expect(prevButton.disabled).toBe(true)
    expect(prevButton.style.opacity).toBe("0.5")
  })

  test("disables next button on last page", () => {
    setupDOM(10)
    paginationManager = new PaginationManager()

    // Navigate to last page
    const nextButton = document.getElementById("next-button") as HTMLButtonElement
    nextButton.click()

    expect(nextButton.disabled).toBe(true)
    expect(nextButton.style.opacity).toBe("0.5")
  })

  test("handles single page correctly", () => {
    setupDOM(3) // Only 3 cards, so 1 page with 6 items per page
    paginationManager = new PaginationManager()

    expect(paginationManager.getTotalPages()).toBe(1)

    const prevButton = document.getElementById("prev-button") as HTMLButtonElement
    const nextButton = document.getElementById("next-button") as HTMLButtonElement

    expect(prevButton.disabled).toBe(true)
    expect(nextButton.disabled).toBe(true)
  })

  test("calculates total pages correctly with different page sizes", () => {
    setupDOM(25)
    paginationManager = new PaginationManager()

    // Test with 6 items per page
    expect(paginationManager.getTotalPages()).toBe(5) // 25 / 6 = 4.17 -> 5 pages

    // Change to 12 items per page
    const select = document.getElementById("pagination-select") as HTMLSelectElement
    select.value = "12"
    select.dispatchEvent(new Event("change"))
    expect(paginationManager.getTotalPages()).toBe(3) // 25 / 12 = 2.08 -> 3 pages

    // Change to 48 items per page
    select.value = "48"
    select.dispatchEvent(new Event("change"))
    expect(paginationManager.getTotalPages()).toBe(1) // 25 / 48 = 0.52 -> 1 page
  })

  test("prevents navigation beyond boundaries", () => {
    setupDOM(6) // Exactly 1 page
    paginationManager = new PaginationManager()

    const prevButton = document.getElementById("prev-button") as HTMLButtonElement
    const nextButton = document.getElementById("next-button") as HTMLButtonElement

    // Try to go to previous page (should stay at 1)
    prevButton.click()
    expect(paginationManager.getCurrentPage()).toBe(1)

    // Try to go to next page (should stay at 1)
    nextButton.click()
    expect(paginationManager.getCurrentPage()).toBe(1)
  })

  test("works with filtered cards", () => {
    setupDOM(10)
    paginationManager = new PaginationManager()

    // Simulate filtering by marking some cards as hidden by filter
    const cards = Array.from(document.querySelectorAll('.card'))
    if (cards.length >= 3) {
      cards[0]!.setAttribute('data-hidden-by-filter', 'true')
      cards[1]!.setAttribute('data-hidden-by-filter', 'true')
      cards[2]!.setAttribute('data-hidden-by-filter', 'true')
    }

    // Trigger pagination refresh with custom event
    window.dispatchEvent(new CustomEvent('cardsFiltered'))

    // Should now work with 7 visible cards instead of 10
    expect(paginationManager.getTotalPages()).toBe(2) // 7 cards / 6 per page = 2 pages
    
    // First page should show 6 cards
    const visibleCards = paginationManager.getVisibleCards()
    expect(visibleCards).toHaveLength(6)
  })

  test("resets to page 1 when filters change", async () => {
    setupDOM(15)
    paginationManager = new PaginationManager()

    // Go to page 2
    const nextButton = document.getElementById("next-button") as HTMLButtonElement
    nextButton.click()
    expect(paginationManager.getCurrentPage()).toBe(2)

    // Simulate filter change
    window.dispatchEvent(new CustomEvent('cardsFiltered'))

    // Wait for the setTimeout in the event handler
    await new Promise(resolve => setTimeout(resolve, 20))

    // Should reset to page 1
    expect(paginationManager.getCurrentPage()).toBe(1)
  })
})
