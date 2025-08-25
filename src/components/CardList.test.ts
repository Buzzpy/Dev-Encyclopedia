import { experimental_AstroContainer as AstroContainer } from "astro/container"
import { expect, test, describe, beforeEach, vi } from "vitest"
import CardList from "./CardList.astro"

describe("component UI display", () => {
  let container: AstroContainer

  beforeEach(async () => {
    // instantiate Astro container api
    container = await AstroContainer.create()
  })

  test("component displays two terms", async () => {
    // Create mock data
    const mockCards = [
      {
        data: {
          title: "ACID Transactions",
          subtext: "Ensure reliability in database operations",
          categories: ["Database"],
          author: "Buzzpy",
          description: {
            title: "ACID Transactions",
            texts: [
              "ACID (Atomicity, Consistency, Isolation, Durability) transactions ensure that database operations are processed reliably.",
              "Think of ACID transactions as a checklist that guarantees every financial transaction is processed completely and accurately."
            ],
            image: "https://miro.medium.com/v2/resize:fit:700/1*7VBEi3uuVgGlTDn5GmOxDA.png",
            references: [
              "https://www.databricks.com/glossary/acid-transactions#:~:text=ACID%20is%20an%20acronym%20that,operations%20are%20called%20transactional%20systems."
            ]
          }
        }
      },
      {
        data: {
          title: "Agile",
          subtext: "A methology in Software Development",
          categories: ["Database"],
          author: "Buzzpy",
          description: {
            title: "Agile",
            texts: [
              "Agile is a methodology for software development that emphasizes flexibility, collaboration, and customer feedback. It focuses on delivering small, incremental improvements to a project.",
              "Agile methodologies include frameworks such as Scrum and Kanban, which help teams adapt to changes and continuously improve their processes."
            ],
            image: "https://miro.medium.com/v2/resize:fit:718/0*7te6LdDJm2DqZIHB.png",
            references: [
              "https://www.spiceworks.com/tech/devops/articles/what-is-agile-software-development/"
            ]
          }
        }
      }
    ]

    // render component
    const result = await container.renderToString(CardList, {
      props: { terms: mockCards }
    })

    // Insert test assertion
    expect(result).toContain("ACID Transactions")
    expect(result).toContain("Agile")
  })

  test("no terms to be displayed", async () => {
    // Create empty mock data
    const emptyCards = []

    // render component
    const result = await container.renderToString(CardList, {
      props: { terms: emptyCards }
    })

    // Insert test assertion
    // component with class name = "card" should not be rendered
    expect(result).not.toContain("data-title")
  })
})

describe("pagination functionality", () => {
  let container: AstroContainer

  beforeEach(async () => {
    container = await AstroContainer.create()
  })

  test("renders pagination controls", async () => {
    const mockCards = Array.from({ length: 10 }, (_, i) => ({
      data: {
        title: `Term ${i + 1}`,
        subtext: `Subtext ${i + 1}`,
        categories: ["Test"],
        author: "Test Author",
        description: {
          title: `Term ${i + 1}`,
          texts: [`Description for term ${i + 1}`],
          image: "",
          references: ["https://example.com"]
        }
      }
    }))

    const result = await container.renderToString(CardList, {
      props: { terms: mockCards }
    })

    // Check pagination controls are rendered
    expect(result).toContain('id="pagination-select"')
    expect(result).toContain('id="prev-button"')
    expect(result).toContain('id="next-button"')
    expect(result).toContain('class="pagination-bar"')
  })

  test("renders pagination dropdown options", async () => {
    const mockCards = [{
      data: {
        title: "Test Term",
        subtext: "Test Subtext",
        categories: ["Test"],
        author: "Test Author",
        description: {
          title: "Test Term",
          texts: ["Test description"],
          image: "",
          references: ["https://example.com"]
        }
      }
    }]

    const result = await container.renderToString(CardList, {
      props: { terms: mockCards }
    })

    // Check all pagination options are present
    expect(result).toContain('value="6"')
    expect(result).toContain('value="12"')
    expect(result).toContain('value="24"')
    expect(result).toContain('value="48"')
    expect(result).toContain('id="paginate-6"')
    expect(result).toContain('id="paginate-12"')
    expect(result).toContain('id="paginate-24"')
    expect(result).toContain('id="paginate-48"')
  })

  test("renders all cards in container", async () => {
    const mockCards = Array.from({ length: 8 }, (_, i) => ({
      data: {
        title: `Card ${i + 1}`,
        subtext: `Subtext ${i + 1}`,
        categories: ["Test"],
        author: "Test Author",
        description: {
          title: `Card ${i + 1}`,
          texts: [`Description ${i + 1}`],
          image: "",
          references: ["https://example.com"]
        }
      }
    }))

    const result = await container.renderToString(CardList, {
      props: { terms: mockCards }
    })

    // Check that all cards are rendered (pagination logic happens in browser)
    for (let i = 1; i <= 8; i++) {
      expect(result).toContain(`Card ${i}`)
    }
    expect(result).toContain('id="cardContainer"')
  })

  test("renders navigation buttons with correct icons", async () => {
    const mockCards = [{
      data: {
        title: "Test Term",
        subtext: "Test Subtext",
        categories: ["Test"],
        author: "Test Author",
        description: {
          title: "Test Term",
          texts: ["Test description"],
          image: "",
          references: ["https://example.com"]
        }
      }
    }]

    const result = await container.renderToString(CardList, {
      props: { terms: mockCards }
    })

    // Check navigation buttons have correct Bootstrap icons
    expect(result).toContain('class="bi bi-arrow-left-circle"')
    expect(result).toContain('class="bi bi-arrow-right-circle"')
    expect(result).toContain('class="button navigation-button"')
  })
})

