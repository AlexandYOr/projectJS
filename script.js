const DomElement = function (selector, height, width, backgroundColor, fontSize, position = 'static') {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bgс = backgroundColor;
    this.fontSize = fontSize;
    this.position = position;
    this.createElement = function () {
        const newElement = document.createElement('div');
        const firstSymbol = selector[0]
        newElement.style.cssText = `
            height:  ${height};
            width: ${width};
            background-color: ${backgroundColor};
            font-size: ${fontSize};
            position: ${position};
            `;
        if (firstSymbol === '.') {
            newElement.classList.add(selector.slice(1))
        } else if (firstSymbol === '#') {
            newElement.id = selector.slice(1)
        }
        document.body.append(newElement)
    }
    this.moveElement = function (e) {
        const findElement = document.body.querySelector(selector)
        const leftValue = parseInt(findElement.style.left || 0)
        const topValue = parseInt(findElement.style.top || 0)
        if (e.keyCode === 37) {
            findElement.style.left = leftValue - 10 + 'px'
        } else if (e.keyCode === 39) {
            findElement.style.left = leftValue + 10 + 'px'
        } else if (e.keyCode === 40) {
            findElement.style.top = topValue + 10 + 'px'
        } else if (e.keyCode === 38) {
            findElement.style.top = topValue - 10 + 'px'
        }
    }
}

// const newElementWithID = new DomElement('#block', '10px', '10px', 'violet', '3px')
const newElementWithClass = new DomElement('.block', '100px', '100px', 'pink', '3px', 'absolute')
// newElementWithID.createElement()
document.addEventListener("DOMContentLoaded", newElementWithClass.createElement)
document.addEventListener("keydown", newElementWithClass.findAndMoveElement)
