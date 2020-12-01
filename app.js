var btntranslate = document.querySelector("#btn-translate");
var inputtxt =  document.querySelector("#input-txt");
console.log(inputtxt)
btntranslate.addEventListener("click", click);

function click(){
    console.log("clicked");
    if(inputtxt.value === "")
    {
        alert("you have to write something");
    }
    else
    {
        console.log("input ",inputtxt.value);
    }
}
