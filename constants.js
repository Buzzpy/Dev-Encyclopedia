const MODAL_CONTENT_TYPES = {
    p: "p",
    img: "img",
    strong: "strong",
    multipart: "multipart",
    link: "link",
    plainText: "plainText",
    htmlEl: "htmlEl"
}


class CustomElement {
    constructor(type) {
        this.type = type
    }

    getHTMLElement() { }
}

class Paragraph extends CustomElement {
    // {
    //     type: MODAL_CONTENT_TYPES.p,
    //     content: "Think of it like noticing a weird smell in your house. It doesn't mean there's definitely a fire, but it's worth checking out."
    //   },
    constructor() { }
}

class Image extends CustomElement {
    // {
    //     type: MODAL_CONTENT_TYPES.img,
    //     src: "https://miro.medium.com/v2/resize:fit:1400/1*ufqp4eDLabgkKTxqi168yA.png",
    //     alt: "Code Smell image"
    //   }
    constructor() { }
}

class RawHTMLElement extends CustomElement {
    // {
    //     type: MODAL_CONTENT_TYPES.htmlEl,
    //     content: 
    //   },
    constructor() { }
}

class PlainText extends CustomElement {
    // {
    //     type: MODAL_CONTENT_TYPES.plainText,
    //     content: "You can sponsor this project via my Ko-Fi profile: "
    //   },
    constructor() { }
}

class Link extends CustomElement {
    // {
    //     type: MODAL_CONTENT_TYPES.link,
    //     content: "ko-fi.com/buzzpy",
    //     ref: "https://ko-fi.com/buzzpy"
    //   }
    constructor() { }
}

class Multipart extends CustomElement {
    // {
    //     type: MODAL_CONTENT_TYPES.multipart,
    //     content: [

    constructor() { }
}

class StrongText extends CustomElement {

    // {
    //     type: MODAL_CONTENT_TYPES.strong,
    //     content: "web design skills",
    //   },

    constructor() { }
}

export { MODAL_CONTENT_TYPES }