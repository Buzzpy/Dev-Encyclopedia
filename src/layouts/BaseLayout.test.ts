import { experimental_AstroContainer as AstroContainer } from "astro/container"
import { expect, test } from "vitest"
import BaseLayout from "./BaseLayout.astro"

test("BaseLayout UI rendering", async() => {
  const container = await AstroContainer.create()

  const baseResult = await container.renderToString(BaseLayout)

  // Assertion
  expect(baseResult).toContain("Dev Encyclopedia")
})
