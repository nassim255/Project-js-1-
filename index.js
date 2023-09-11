//get element
var inputEle = document.getElementById("inputText");
var buttonEle = document.getElementById("button");
var textEle = document.getElementById("textt")

// from input to new variabl


//move the text to p
    buttonEle.onclick = function(){
        var inputValue = inputEle.value
        if (inputEle.value != "") {
            textEle.innerHTML = inputValue;
            inputEle.value = ""
        }
    }

