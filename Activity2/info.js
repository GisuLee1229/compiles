const leftDiv = (title, para, para2, buttonOne, buttonTwo, buttonThree, buttonFour) => {
    let div = document.createElement("div")
    div.className = "classLeft"
    div.innerHTML = `<h1>${title}</h1>
                    <p>${para}</p>
                    <p>${para2}</p>
                    <button>${buttonOne}</button>
                    <button>${buttonTwo}</button>
                    <button>${buttonThree}</button>
                    <button>${buttonFour}</button>
    `

    return div
}

export { leftDiv }