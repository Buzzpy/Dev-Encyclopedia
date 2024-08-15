/*
How to USE:
    1. open https://devpedia.pages.dev/
    2. open console from chrome devtools
    3. copy and paste the following code

    this will give the cards.json object, that can be copied and inserted into cards.json file. This will help to resolve any merge conflicts, or adding a new card that is still in the old format.

    This scraper removes the need for an external application. to convert cards

*/

let html_cards_arr = []; 

let html_cards_json = {};

//scrape the card data from HTML
document.querySelectorAll(".card").forEach((el) => {
  let title = el.querySelector(".card-title").innerHTML;
  let subtext = el.querySelector(".card-subtext").innerHTML;
  let slug = String(el.querySelector(".explain-button").onclick).split("'")[1]
  html_cards_json.title = title;
  html_cards_json.subtext = subtext;
  html_cards_json.slug = slug;
  html_cards_arr.push(JSON.parse(JSON.stringify(html_cards_json)));
});


let contents = {};

//scrape the content data from JS
for (key in descriptions) {
    let item = {};

  let htmlItem = document.createElement("div");
  htmlItem.innerHTML = descriptions[key];

  let heading = htmlItem.querySelector("#modal-heading")?.innerText
  let link = htmlItem.querySelector("a")?.href
  
  let paragraphs = [];
  htmlItem.querySelectorAll(".modal-paragraph").forEach(el=>{
  paragraphs.push(el?.innerText);
})

let images = [];

htmlItem.querySelectorAll("img")?.forEach(el=>{
    let imageObj = JSON.parse(JSON.stringify({
        link:el?.src,
        description:el?.alt
    }))

    images.push(imageObj)
})

  item.heading = heading;
  item.paragraphs = paragraphs;
  item.images = images;
  item.link = link;

  contents[key]=(JSON.parse(JSON.stringify(item)))

}

//add contents to the cards array
html_cards_arr.map(el=>{return el.content = contents[el.slug]})

let cards_json = {};

//convert the array to a object, with each element slug as the key.
html_cards_arr.forEach(el => {
    cards_json[el.slug] = el;
});


//remove the slug , as the key for each object can be used as slug.
for(key in cards_json){
    delete cards_json[key].slug
}


console.log('%c Copy and paste the following object to cards.json ','color:orange;font-weight:bold;font-size:2rem;')
console.log('%c |','color:orange;font-weight:bold;font-size:2rem;')
console.log('%c V','color:orange;font-weight:bold;font-size:2rem;')
console.log(cards_json)