import { expect, test } from "vitest"
import { showModal } from "./modal"

/**
 * @vitest-environment jsdom
 */

describe("test modal function script", () => {
  beforeEach(() => {
    // instantiate a new modal element in DOM
    document.body.innerHTML = `
      <div id="modal" style="display: block;">
        <div id="modal-content">
          <div id="modal-body"></div>
        </div>
      </div>
    `
  })

  test('should display Modal component with given content', () => {
    // Test function
    showModal("Test title", "This is a test", "https://example.com/image.jpg", "https://example.com/resource")

    // Retrieve modal element from id attribute
    const modal = document.getElementById("modal")
    const modalBody = document.getElementById("modal-body")

    // Create assertion
    // Assert modal to be visible
    expect(modal).not.toBeNull()
    expect(modal?.style.display).toBe("block")
    // Assert content visible in modal
    expect(modalBody?.innerHTML).toContain("Test title")
    expect(modalBody?.innerHTML).toContain("This is a test")
    expect(modalBody?.innerHTML).toContain('<img src="https://example.com/image.jpg"')
    expect(modalBody?.innerHTML).toContain('<a href="https://example.com/resource"')
  })

  test('should close modal on escape key press', () => {
    // Test function
    showModal("Test", "Description",  "https://example.com/image.jpg", "https://example.com/resource")

    const event = new KeyboardEvent('keydown', { key: 'Escape' })

    // dispatch event to mock closeModal
    document.dispatchEvent(event)

    // Assertion
    expect(document.body.classList.contains('modal')).toBe(false)
  })
})