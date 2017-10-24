    var xpos = 550;
    var ypos = 100;
    var change = 0;

function replace(b) {
    xpos = xpos + 50;
    change = change + 1;
    if(change % 4 == 0){
        ypos = ypos + 50;
        xpos = 100;
    }
    var name="newImg"+change;
    var x = xpos.toString();
    var y = ypos.toString();
    var fruit = document.getElementById(b);
    var place = fruit.src;
    name = document.createElement("img");
    name.setAttribute("src", place);
    name.setAttribute("height", fruit.height / 2);
    name.setAttribute("width", fruit.width / 2);
    name.style.position="relative"; 
    
    var wrapper = document.getElementById("bwrapper");
    wrapper.appendChild(name);
    name.style.marginLeft = x;
    name.style.marginRight = y;
//    wrapper.insertBefore(document.getElementById("blender"), newImg);
}
