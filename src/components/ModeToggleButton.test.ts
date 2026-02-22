import { experimental_AstroContainer as AstroContainer } from "astro/container"
import { expect, test, describe, beforeEach } from "vitest"
import ModeToggleButton from "./ModeToggleButton.astro"

describe("Mode toggle button", () => {
  let container: AstroContainer

  beforeEach(async () => {
    // instantiate astro container api
    container = await AstroContainer.create()
  })

  test("component is rendered correctly", async () => {
    // render component
    const result = await container.renderToString(ModeToggleButton)

    // Insert test assertion
    expect(result).toContain('class="button toggle-button"')
    expect(result).toContain('class="fas fa-moon"')
  })
})