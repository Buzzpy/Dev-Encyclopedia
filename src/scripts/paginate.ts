  class PaginationManager {
    private allCards: HTMLElement[]
    private currentPage: number = 1
    private itemsPerPage: number = 6
    private totalPages: number = 1

    constructor() {
      this.allCards = Array.from(document.querySelectorAll(".card"))
      this.init()
      this.observeFilterChanges()
    }

    private init() {
      this.calculateTotalPages()
      this.setupEventListeners()
      this.showCurrentPage()
      this.updateButtonStates()
    }

    private observeFilterChanges() {
      // Listen for the custom event dispatched by hero-action.ts
      window.addEventListener('cardsFiltered', () => {
        setTimeout(() => this.refreshPagination(), 10)
      })
    }

    private getFilteredCards(): HTMLElement[] {
      // Get cards that are not hidden by filtering
      return this.allCards.filter(card => {
        return card.getAttribute('data-hidden-by-filter') !== 'true'
      })
    }

    private refreshPagination() {
      this.currentPage = 1 // Reset to first page when filters change
      this.calculateTotalPages()
      this.showCurrentPage()
      this.updateButtonStates()
    }

    private setupEventListeners() {
      const paginateSelect = document.getElementById(
        "pagination-select"
      ) as HTMLSelectElement
      const prevButton = document.getElementById("prev-button")
      const nextButton = document.getElementById("next-button")

      // Handle dropdown change
      paginateSelect?.addEventListener("change", (e) => {
        const target = e.target as HTMLSelectElement
        this.itemsPerPage = parseInt(target.value)
        this.currentPage = 1 // Reset to first page
        this.calculateTotalPages()
        this.showCurrentPage()
        this.updateButtonStates()
      })

      // Handle previous button click
      prevButton?.addEventListener("click", () => {
        if (this.currentPage > 1) {
          this.currentPage--
          this.showCurrentPage()
          this.updateButtonStates()
        }
      })

      // Handle next button click
      nextButton?.addEventListener("click", () => {
        if (this.currentPage < this.totalPages) {
          this.currentPage++
          this.showCurrentPage()
          this.updateButtonStates()
        }
      })
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

      // First, hide all cards
      this.allCards.forEach((card) => {
        // If card is hidden by filter, keep it hidden
        if (card.getAttribute('data-hidden-by-filter') === 'true') {
          card.style.display = "none"
        } else {
          // For filtered cards, hide by default (pagination will show the correct ones)
          card.style.display = "none"
        }
      })

      // Show only the cards for current page from filtered results
      filteredCards.slice(startIndex, endIndex).forEach((card) => {
        card.style.display = "block"
      })
    }

    private updateButtonStates() {
      const prevButton = document.getElementById(
        "prev-button"
      ) as HTMLButtonElement
      const nextButton = document.getElementById(
        "next-button"
      ) as HTMLButtonElement

      // Disable/enable previous button
      if (prevButton) {
        prevButton.disabled = this.currentPage === 1
        prevButton.style.opacity = this.currentPage === 1 ? "0.5" : "1"
      }

      // Disable/enable next button
      if (nextButton) {
        nextButton.disabled = this.currentPage === this.totalPages
        nextButton.style.opacity =
          this.currentPage === this.totalPages ? "0.5" : "1"
      }
    }
  }

  // Also initialize immediately if DOM is already loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new PaginationManager()
    })
  } else {
    // Initialize pagination when DOM is loaded
    new PaginationManager()
  }