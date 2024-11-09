import { experimental_AstroContainer as AstroContainer } from "astro/container"
import { expect, test } from "vitest"
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

