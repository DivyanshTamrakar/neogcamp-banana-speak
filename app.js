var btntranslate = document.querySelector("#btn-translate");
var inputtxt = document.querySelector("#input-txt");
var outputtxt = document.querySelector("#output");
console.log(outputtxt);
btntranslate.addEventListener("click", click);


// var serviceurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serviceurl = "https://api.funtranslations.com/translate/minion.json";


function getTranslation(text) {
    var fullurl = serviceurl + "?" + "text=" + text;
    console.log(fullurl);
    return fullurl;
}

function errorHandler(error) {
    console.log("error: " + error);
    alert("Something went wrong with the server , please try again after some time");
}

function click() {



    outputtxt.innerText = "";
    fetch(getTranslation(inputtxt.value)).then(response => response.json()).then(json => {
        console.log(json);
        outputtxt.innerText = json.contents.translated;
    }).catch(errorHandler);



}

// live exericse no 4 lesson 4  
// "textarea"
// ".btn-primary"
// "input-btn"
// "input[nam = 'translator' ]"