import { experimental_AstroContainer as AstroContainer } from "astro/container"
import { expect, test } from "vitest"
import Modal from "./Modal.astro"

describe("test Modal component", () => {
  let container: AstroContainer

  beforeEach(async () => {
    // instantiate Astro container api
    container = await AstroContainer.create()
  })

  test("user click one of the terms card and the explanation modal is explained", async () => {
    // To-do: mock function for mocking modal.ts

  })
})