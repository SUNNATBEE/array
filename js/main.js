// var ulList = document.querySelector(".list");
// var elForm = document.querySelector(".form");
// var elInput = document.querySelector(".form-control")
// var array = []

// var phones = ["Apple", "Nokia" , "Samsung", "Poco", "Redmi"]

// for(var i = 0; i < phones.length; i++ ){
//     var item = document.createElement("li");
//     var text = document.createElement("h2");
//     text.textContent = phones[i];
//     item.appendChild (text);
//     ulList.appendChild(item);
//     console.log(ulList);
// }

// elForm.addEventListener("submit" , function(evt){
//     evt.preventDefault()
//     array.push(elInput.value);
//     elForm.reset();
//     ulList.textContent = ""

//     var obj = {
//         name: elInput.value,
//     }

//     for(var i = 0; i < array.length; i++){
//         var item = document.createElement("li");
//         var text = document.createElement("h2");
//         text.textContent = array[i].name;
//         item.appendChild(text);
//         ulList.appendChild(item);

//     }
// })

var elForm = document.querySelector(".form");
var elInputName = document.querySelector(".form-name");
var elInputLastName = document.querySelector(".form-last-name");
var elInputPhoneNumber = document.querySelector(".form-phone");
var elInputEmail = document.querySelector(".form-email");
var elList = document.querySelector(".list")

var array = [];

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    var obj = {
        firstName:elInputName.value,
        lastName:elInputLastName.value,
        phoneNumber:elInputPhoneNumber.value,
    }
    array.push(obj)
    elForm.reset();
    elList.textContent = "" 
    
    for(var i = 0; i < array.length; i++){
        
        
        var item = document.createElement("li");
        var text = document.createElement("h1");
        text.textContent = array[i].firstName + " " + array[i].lastName;
        text.style.fontSize = "40px"
        text.style.fontWeight = "900";
        text.style.border = "2px solid yellow";
        text.style.boxShadow = "0 5px 5px 5px black"
        text.style.color = "yellow";
        text.style.textTransform = "capitalize";
        text.style.backgroundColor = "blue"
        text.style.marginBottom = "20px";
        text.style.textAlign = "center"
        item.appendChild(text);
        
        
        var userNumber = document.createElement("h4");
        userNumber.textContent = array[i].phoneNumber;
        userNumber.style.color = "red"
        userNumber.style.fontStyle = "italic";
        userNumber.style.fontSize = "20px";
        userNumber.style.border = "2px solid blue"
        userNumber.style.fontWeight = "600"
        userNumber.style.backgroundColor = "yellow"
        userNumber.style.textAlign = "center"
        
        item.appendChild(userNumber);
        elList.appendChild(item);
        
    }
})
