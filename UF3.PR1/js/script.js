$(document).ready(function () {

    var all = document.getElementById("all");



    //FONT SIZE
    var size = document.getElementById("size");

    size.addEventListener("input",function(){
        var val=size.value

        all.style.fontSize=val+"px";

    });

    //INTERLINEAT

    var line = document.getElementById("line");


     line.addEventListener("input",function(){
        var val=line.value

        all.style.lineHeight=val+"px";
    });

    //DISPLAY NONE
    var activar = document.getElementById("activar");


        activar.addEventListener("click",function(event){
            event.preventDefault();
            var menuaccesible = document.getElementById("menuaccesible");
            var sortir = document.getElementById("sortir");

            menuaccesible.style.display="block";
            sortir.style.display="block";
        });


    //BACKGROUND COLORS





    });


//
//
//    $("#target" ).click(function() {
//  $(".titolprin")
//        .css("background-color", "black")
//        .css("color", "yellow")
//        .css("font-size", "2em")
//        .css("border", "2px solid yellow ");
//
//  $(".titolas")
//      .css("background-color", "black")
//        .css("color", "yellow")
//        .css("font-size", "2em")
//        .css("border", "2px solid yellow ");
//
//  $(".titoloffice")
//      .css("background-color", "black")
//        .css("color", "yellow")
//        .css("font-size", "2em")
//        .css("border", "2px solid yellow ");
//
//  $("header")
//        .css("background-color", "black")
//        .css("color", "yellow")
//        .css("font-size", "1em");
//
//   $("a")
//        .css("background-color", "black")
//        .css("color", "yellow")
//        .css("font-size", "2em")
//        .css("border", "2px solid yellow ");
//
//  $(".carta")
//        .css("background-color", "black")
//        .css("color", "yellow")
//        .css("font-size", "2em")
//        .css("position", "relative")
//        .css("overflow", "visible")
//        .css("border", "2px solid yellow ");
//
//    $("body")
//        .css("background-color", "black");
//
//    $("p")
//        .css("color", "yellow");
//
//    $("h3")
//
//        .css("color", "yellow");
//
//    $(".imatge")
//        .css("position", "relative")
//
//        .css("flex-direction", "column")
//        .css("height", "auto")
//        .css("width", "400px")
//        .css("display", "flex");
//
//    $(".caixa  img")
//        .css("height", "400px")
//        .css("width", "400px");
//
//    $(".caixa")
//        .css("min-width", "410px");
//
//
//    $(".foto")
//        .css("position", "relative");
//    $(".text h2")
//        .css("color", "yellow")
//        .css("line-height", "70px")
//
//        .css("font-size", "3em");
//    $(".text h3")
//        .css("color", "yellow")
//        .css("line-height", "60px")
//
//        .css("font-size", "2em");
//     $(".text")
//         .css("margin-left", "60px");
//    $(".text p")
//        .css("color", "yellow")
//        .css("line-height", "40px")
//
//        .css("font-size", "2em");
//
//
//
//    });


     $( "#acces" ).click(function() {
        //$( ".titolprin" ).toggleClass("titolprinacc");
         //$( ".titolas" ).toggleClass("titolasacc");
         //$( ".titoloffice" ).toggleClass("titolofficeacc");
         //$( "header" ).toggleClass("headeracc");
         //$( "a" ).toggleClass("aacc");
         $( ".carta" ).toggleClass("cartaacc");
         //$( "body" ).toggleClass("bodyacc");
         //$( "p" ).toggleClass("pacc");
         //$( "h3" ).toggleClass("h3acc");
         $( ".imatge" ).toggleClass("imatgeacc");
         $( ".foto_cotxe" ).toggleClass("classeimg");
         $( ".caixa" ).toggleClass("caixaacc");

         $( ".foto" ).toggleClass("fotoacc");
        // $( ".text h2" ).toggleClass("classeh2");
         //$( ".text h3" ).toggleClass("classeh3");
         //$( ".text" ).toggleClass("textacc");





       });





