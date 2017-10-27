var grapesCounter = 0;
var appleCounter = 0;
var strawberryCounter = 0;
var cherriesCounter = 0;
var orangeCounter = 0;
var bananaCounter = 0;
var carrotCounter = 0;

function show(b){
    var fruit = document.getElementById(b);
    fruit.style.visibility = "visible";
    if(b == "grapes1"){
        grapesCounter = grapesCounter + 1;
        var aString = "Grapes: "+grapesCounter;
        document.getElementById("grapeOrder").innerHTML = aString;
    }
    if(b == "apple1"){
        appleCounter = appleCounter + 1;
        var aString = "Apple: "+appleCounter;
        document.getElementById("appleOrder").innerHTML = aString;
    }
    if(b == "strawberry1"){
        strawberryCounter = strawberryCounter + 1;
        var aString = "Strawberry: "+strawberryCounter;
        document.getElementById("strawberryOrder").innerHTML = aString;
    }
    if(b == "cherries1"){
        cherriesCounter = cherriesCounter + 1;
        var aString = "Cherries: "+cherriesCounter;
        document.getElementById("cherriesOrder").innerHTML = aString;
    }
    if(b == "orange1"){
        orangeCounter = orangeCounter + 1;
        var aString = "Orange: "+orangeCounter;
        document.getElementById("orangeOrder").innerHTML = aString;
    }
    if(b == "banana1"){
        bananaCounter = bananaCounter + 1;
        var aString = "Banana: "+bananaCounter;
        document.getElementById("bananaOrder").innerHTML = aString;
    }
    if(b == "carrot1"){
        carrotCounter = carrotCounter + 1;
        var aString = "Carrot: "+carrotCounter;
        document.getElementById("carrotOrder").innerHTML = aString;
    }
}

function blend(){
    document.getElementsByClassName("fruit").style.visibility = "hidden";
    var grapesColor = rgb(100, 50, 115);
    var appleColor = rgb(219, 23, 35);
    var strawberryColor = rgb(230, 29, 33);
    var cherriesColor = rgb(187, 23, 32);
    var orangeColor = rgb(235, 110, 35);
    var bananaColor = rgb(254, 213, 49);
    var carrotColor = rgb(246, 152, 48);
    var blendedColor = (grapesColor * grapesCounter + appleColor * appleCounter + strawberryColor * strawberryCounter + cherriesColor * cherriesCounter + orangeColor * orangeCounter + bananaColor * bananaCounter + carrotColor * carrotCounter) / (grapesCounter + appleCounter + strawberryCounter + cherriesCounter + orangeCounter + bananaCounter + carrotCounter);
    document.getElementByTagName(body).style.background-color = blenderColor;
}

//    var xpos = 550;
//    var ypos = 100;
//    var change = 0;
//
//function replace(b) {
//    xpos = xpos + 20;
//    change = change + 1;
//    if(change % 4 == 0){
//        ypos = ypos + 50;
//        xpos = 100;
//    }
//    if(change > 9){
//       return;
//    }
//    var name="newImg"+change;
//    var x = xpos.toString();
//    var y = ypos.toString();
//    var fruit = document.getElementById(b);
//    var place = fruit.src;
//    name = document.createElement("img");
//    name.setAttribute("src", place);
//    name.setAttribute("height", fruit.height / 2);
//    name.setAttribute("width", fruit.width / 2);
//    name.style.position="relative"; 
//    
//    var wrapper = document.getElementById("bwrapper");
//    wrapper.appendChild(name);
//    name.style.marginLeft = x;
//    name.style.marginRight = y;
////    wrapper.insertBefore(document.getElementById("blender"), newImg);
//}
