import { experimental_AstroContainer as AstroContainer } from "astro/container"
import { expect, describe, beforeEach, test } from "vitest"
import Footer from "./Footer.astro"

describe("Footer", () => {
  let container: AstroContainer

  beforeEach(async () => {
    // instantiate Astro container api
    container = await AstroContainer.create()
  })

  test("component is displayed successfully", async () => {
    // render component
    const result = await container.renderToString(Footer)

    // Insert test assertion
    expect(result).toContain("Backed by")
    expect(result).toContain("Programming and Doodles")
    expect(result).toContain("All rights reserved")
  })

  test("component display the correct DOM component", async () => {
    // render component
    const result = await container.renderToString(Footer)

    // insert test assertion]
    expect(result).toContain('class="hero-section"')
    expect(result).toContain('class="hero-paragraph"')
  })
})