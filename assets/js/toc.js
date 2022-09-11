const a = document.querySelector("#banner")

class Toc {
    XPATH_EXPR = "/html/body/main/section/div/article/h1"

    constructor(toc) {
        this.toc = toc;
    }

    create() {
        const nodes = document.evaluate(this.XPATH_EXPR, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

        console.log(nodes)
    }
}
