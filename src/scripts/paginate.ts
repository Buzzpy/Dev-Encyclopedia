  class PaginationManager {
    private cards: HTMLElement[]
    private currentPage: number = 1
    private itemsPerPage: number = 6
    private totalPages: number = 1

    constructor() {
      this.cards = Array.from(document.querySelectorAll(".card"))
      this.init()
    }

    private init() {
      this.calculateTotalPages()
      this.setupEventListeners()
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
      this.totalPages = Math.ceil(this.cards.length / this.itemsPerPage)
    }

    private showCurrentPage() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage

      // Hide all cards
      this.cards.forEach((card) => {
        card.style.display = "none"
      })

      // Show cards for current page
      this.cards.slice(startIndex, endIndex).forEach((card) => {
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

  // Initialize pagination when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    new PaginationManager()
  })

  // Also initialize immediately if DOM is already loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      new PaginationManager()
    })
  } else {
    new PaginationManager()
  }