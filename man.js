function MakeBold(){
    var text = document.getElementById("txt");
    text.style.fontWeight = "bold";
}
function MakeItalic(){
    var text = document.getElementById("txt");

    text.style.fontFamily="italic";
}
function MakeUnderline(){
    var text = document.getElementById("txt");

    text.style.textDecoration = "underline" ;
}
function sizeText(){
    var text = document.getElementById("txt");
    var option = document.getElementById("T").value;
    text.style.fontSize = option;
}
function StyleText(){
    var text = document.getElementById("txt");
    var option = document.getElementById("T2").value;

    text.style.fontFamily = option ;
}