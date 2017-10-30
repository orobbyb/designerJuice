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
    for(var i = 0; i < document.getElementsByClassName("fruit").length; i++){
        document.getElementsByClassName("fruit")[i].style.visibility = "hidden";      
    }
    
    var grapesRed = 100;
    var grapesGreen = 50;
    var grapesBlue = 115;
    
    var appleRed = 219;
    var appleGreen = 23;
    var appleBlue = 32;
    
    var strawberryRed = 230;
    var strawberryGreen = 29;
    var strawberryBlue = 33;
    
    var cherriesRed = 187;
    var cherriesGreen = 23;
    var cherriesBlue = 32;
    
    var orangeRed = 235;
    var orangeGreen = 110;
    var orangeBlue = 35;
    
    var bananaRed = 254;
    var bananaGreen = 213;
    var bananaBlue = 49;
    
    var carrotRed = 246;
    var carrotGreen = 152;
    var carrotBlue = 48;
    
    if(grapesCounter==0){
        grapesRed=0;
        grapesGreen=0;
        grapesBlue=0;
    }
    
    if(appleCounter==0){
        appleRed=0;
        appleGreen=0;
        appleBlue=0;
    }
    
    if(strawberryCounter==0){
        strawberryRed=0;
        strawberryGreen=0;
        strawberryBlue=0;
    }
    
    if(cherriesCounter==0){
        cherriesRed=0;
        cherriesGreen=0;
        cherriesBlue=0;
    }
    
    if(orangeCounter==0){
        orangeRed=0;
        orangeGreen=0;
        orangeBlue=0;
    }
    
    if(bananaCounter==0){
        bananaRed=0;
        bananaGreen=0;
        bananaBlue=0;
    }
    
    if(carrotCounter==0){
        carrotRed=0;
        carrotGreen=0;
        carrotBlue=0;
    }
    
    var blendedRed = (grapesRed * grapesCounter + appleRed * appleCounter + strawberryRed * strawberryCounter + cherriesRed * cherriesCounter + orangeRed * orangeCounter + bananaRed * bananaCounter + carrotRed * carrotCounter) / (grapesCounter + appleCounter + strawberryCounter + cherriesCounter + orangeCounter + bananaCounter + carrotCounter);
    
    var blendedGreen = (grapesGreen * grapesCounter + appleGreen * appleCounter + strawberryGreen * strawberryCounter + cherriesGreen * cherriesCounter + orangeGreen * orangeCounter + bananaGreen * bananaCounter + carrotGreen * carrotCounter) / (grapesCounter + appleCounter + strawberryCounter + cherriesCounter + orangeCounter + bananaCounter + carrotCounter);
    
    var blendedBlue = (grapesBlue * grapesCounter + appleBlue * appleCounter + strawberryBlue * strawberryCounter + cherriesBlue * cherriesCounter + orangeBlue * orangeCounter + bananaBlue * bananaCounter + carrotBlue * carrotCounter) / (grapesCounter + appleCounter + strawberryCounter + cherriesCounter + orangeCounter + bananaCounter + carrotCounter);
    
    var finalRed = Math.floor(blendedBlue);
    var finalGreen = Math.floor(blendedGreen);
    var finalBlue = Math.floor(blendedBlue);
    document.getElementById("bwrapper").style.backgroundColor = 'rgb(' + finalRed + ',' + finalGreen + ',' + finalBlue + ')';
}

//function rgb(r, g, b){
//  return "rgb("+r+","+g+","+b+")";
//}

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
