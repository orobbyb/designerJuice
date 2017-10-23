function replace(x) {
    var fruit = document.getElementById(x);
    var place = fruit.src;
    var newImg = document.createElement("img");
    newImg.setAttribute("src", place);
    newImg.setAttribute("height", fruit.height / 2);
    newImg.setAttribute("width", fruit.width / 2);
    newImg.style.position="absolute";
    var wrapper = document.getElementById("bwrapper");
    wrapper.appendChild(newImg);
    wrapper.insertBefore(document.getElementById("blender"), newImg);
}
