import { experimental_AstroContainer as AstroContainer } from "astro/container"
import { expect, test } from "vitest"
import Hero from "./Hero.astro"

test("Hero", async () => {
  const container = await AstroContainer.create()
  // mock terms data
  const mockTerms = [
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
    }
  ]

  // render test component
  const result = await container.renderToString(Hero, {
    props: { terms: mockTerms }
  })

  // To Do - improve assertion script
  expect(result).toContain("Contribute")
})