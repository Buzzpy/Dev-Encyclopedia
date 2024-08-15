import { buildCard, buildModal, buildSponsor } from "./componentGen.js";
import { MODAL_CONTENT_TYPES } from "./cardData.js";
import { cards } from "./cardData.js";

const aboutButton = document.getElementById("about-button")
aboutButton.addEventListener("click", showAbout)

const buildersButton = document.getElementById("builders-button")

buildersButton.addEventListener("click", showBuilders)

const sponsorsButton = document.getElementById("sponsors-button")
sponsorsButton.addEventListener("click", showSponsors)

const inputEl = document.getElementById("searchInput")
inputEl.addEventListener("input", (e) => {
  filterCards(e.target.value)
})

function displayCards(cards) {
  const cardContainer = document.getElementById("cardContainer")
  cardContainer.innerHTML = ""

  for (const card of cards) {
    const cardEl = buildCard(card)

    cardEl.querySelector(".explain-button").addEventListener("click", () => {
      showModal(
        {
          title: card.title,
          content: card.modalContent,
          link: card.readMoreLink
        })
    })

    cardContainer.appendChild(cardEl)
  }
}

function filterCards(inputText) {
  if (inputText === "") {
    displayCards(cards)
    return
  }

  const dataToCompare = cards.map((x) => {
    return {
      slug: x.slug,
      title: x.title,
      keywords: x.keywords
    }
  })

  const inputTextLower = inputText.toLocaleLowerCase()

  let matches = []

  for (const concept of dataToCompare) {
    if (concept.title.toLocaleLowerCase().includes(inputTextLower)) {
      matches.push({
        slug: concept.slug,
        score: 2
      })
      continue
    }

    if (!concept.keywords) {
      continue
    }

    for (const keyword of concept.keywords) {
      if (keyword.toLocaleLowerCase().includes(inputTextLower)) {
        matches.push({
          slug: concept.slug,
          score: 1
        })
        break
      }
    }
  }

  matches = matches.sort((a, b) => a.score - b.score)

  const matchCardData = cards.filter((c) => {
    return matches.some((x) => x.slug === c.slug)
  })

  displayCards(matchCardData)
}

function showAbout() {
  showModal({
    title: "About",
    content: [
      {
        type: MODAL_CONTENT_TYPES.strong,
        content: "IMPORTANT: Bookmarking or Pinning this webpage would help you get a quick overview of anything related to tech in seconds!"
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: 'This "Dev Encyclopedia" is a simple project that simplifies things.'
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "This website has almost all the commonly used technical terms, concepts and even programming-language specific jargons explained and links provided for further reading."
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Most importantly, it is ad-free, so basically, the best encyclopedia everr! *excited. too much.*"
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: "Built with love, by Chenuli J."
      },
      {
        type: MODAL_CONTENT_TYPES.img,
        src: "image/Chenuli Signature.png",
        alt: "Chenuli Signature"
      }

    ],
  })
}

function showBuilders() {
  showModal({
    title: "A Note from the Builder",
    content: [
      {
        type: MODAL_CONTENT_TYPES.multipart,
        content: [
          {
            type: MODAL_CONTENT_TYPES.plainText,
            content: "If you find a flaw, love to sponsor or need help with learning something, my inbox is open: -> "
          },
          {
            type: MODAL_CONTENT_TYPES.link,
            content: "buzzpy123@gmail.com",
            ref: "mailto:buzzpy123@gmail.com"
          }
        ]
      },
      {
        type: MODAL_CONTENT_TYPES.multipart,
        content: [
          {
            type: MODAL_CONTENT_TYPES.plainText,
            content: "- I am a Python Developer especilizing in backend so my "
          },
          {
            type: MODAL_CONTENT_TYPES.strong,
            content: "web design skills",
          },
          {
            type: MODAL_CONTENT_TYPES.plainText,
            content: " are "
          },
          {
            type: MODAL_CONTENT_TYPES.strong,
            content: "terrible.",
          },
        ]
      },
      {
        type: MODAL_CONTENT_TYPES.multipart,
        content: [
          {
            type: MODAL_CONTENT_TYPES.plainText,
            content: "- This project was built in a month, unlike Rome which took years to build. Which means this is on early stages of development, so why not to "
          },
          {
            type: MODAL_CONTENT_TYPES.strong,
            content: "fork, star and contribute?",
          },
        ]
      },


    ],
  })
}


function showSponsors() {
  showModal({
    title: "Sponsors",
    content: [
      {
        type: MODAL_CONTENT_TYPES.multipart,
        content: [
          {
            type: MODAL_CONTENT_TYPES.plainText,
            content: "You can sponsor this project via my Ko-Fi profile: "
          },
          {
            type: MODAL_CONTENT_TYPES.link,
            content: "ko-fi.com/buzzpy",
            ref: "https://ko-fi.com/buzzpy"
          }
        ]
      },
      {
        type: MODAL_CONTENT_TYPES.p,
        content: 'Once you make any donation, I will get in touch with you and make sure you get a place on this "Sponsors" page!'
      },
      {
        type: MODAL_CONTENT_TYPES.htmlEl,
        content: buildSponsor({
          name: "Malith J. Don",
          link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flk.linkedin.com%2Fin%2Fmalith-jayasinghe-484509180&psig=AOvVaw3pVLfvt056d-wG57Gc361x&ust=1723739678386000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCOijn-v09IcDFQAAAAAdAAAAABAK",
          imgSrc: "https://media.licdn.com/dms/image/D5603AQHJyX4hVmqjpQ/profile-displayphoto-shrink_200_200/0/1715316807453?e=2147483647&v=beta&t=7_xJ7ANI71x0vnvp1_2vj86V0kVvNDQGGflUzLfQBBk",
          imgAlt: "Malith J. Don Profile Picture"
        })
      },


    ],
  })
}

function showModal(content) {
  document.querySelector("body").appendChild(buildModal(content)).showModal()
}


displayCards(cards)