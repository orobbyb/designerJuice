function click(b) {
    var fruit = document.getElementById(b);
    var place = fruit.src;
    var newImg = document.createElement("IMG");
    newImg.setAttribute("src", place);
    newImg.setAttribute("height", fruit.height);
    newImg.setAttribute("width", fruit.width);
    document.bwrapper.appendChild(newImg);
}
