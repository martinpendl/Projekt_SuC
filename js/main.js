var prozent13 = [26.8, 24.0, 20.5, 12.4, 5.0, 5.7];
var prozent17 = [26.9, 31.5, 26.0, 3.8, 5.3, 4.4];
var parteien13 = ["#spö13", "#övp13", "#fpö13", "#grüne13", "#neos13", "#stronach13"];
var parteien17 = ["#spö17", "#övp17", "#fpö17", "#grüne17", "#neos17", "#pilz17"];
var numberHeight13 = ["#170", "#171", "#172", "#173", "#174", "#175"];
var numberHeight17 = ["#130", "#131", "#132", "#133", "#134", "#135"];

//Tabelle
var table13 = ["<b>2013</b>", "26.8%", "24.0%", "20.5%", "12.4%", "5.0%",];
var table17 = ["<b>2017</b>", "26.9%", "31.5%", "26.0%", "3.8%", "5.3%",];
var tableTitle = ["Jahr", "SPÖ", "ÖVP", "FPÖ", "Grüne", "Neos"];

for(var i = 0; i < tableTitle.length; i++) {
      $("#row1").append("<th>" + tableTitle[i] + "</th>");      
      $("#row2").append("<td>" + table13[i] + "</td>");
      $("#row3").append("<td>" + table17[i] + "</td>");
    }


    for (var i = 0; i < prozent13.length; i++) {
        var svgHeight = (350/50)*prozent13[i];
        var yCoordinate = 370 - svgHeight;
        
        $(parteien13[i]).attr('height', svgHeight);
        $(parteien13[i]).attr('y', yCoordinate);
        $(numberHeight13[i]).attr('y', yCoordinate-10);
        
        var svgHeight2 = (350/50)*prozent17[i];
        var yCoordinate2 = 370 - svgHeight2;
        
        $(parteien17[i]).attr('height', svgHeight2);
        $(parteien17[i]).attr('y', yCoordinate2);
        $(numberHeight17[i]).attr('y', yCoordinate2-10);
    }   

           
function showSVG2() {
    var x = document.getElementById("svg2");
    var y = document.getElementById("svg1");
    var table13 = document.getElementById("wahlsieger13");
    var table17 = document.getElementById("wahlsieger17");
    var title13 = document.getElementById("title13");
    var title17 = document.getElementById("title17");
    y.style.display = "none";
    x.style.display = "block";
    table13.style.display = "table";
    table17.style.display = "none";
    title13.style.display = "block";
    title17.style.display = "none";
    }

function showSVG1() {
    var x = document.getElementById("svg2");
    var y = document.getElementById("svg1");
    var table13 = document.getElementById("wahlsieger13");
    var table17 = document.getElementById("wahlsieger17"); 
    var title13 = document.getElementById("title13");
    var title17 = document.getElementById("title17");
    y.style.display = "block";
    x.style.display = "none";
    table13.style.display = "none";
    table17.style.display = "table";
    title13.style.display = "none";
    title17.style.display = "block";
}