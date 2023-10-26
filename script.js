//take a text in a input filed
const inputBox = document.getElementById("input-box");
//list
const listcontainer = document.getElementById("list-container");

function addTask(){
    //check input field is empty or not
    if(inputBox.value === ''){
        //if input field is empty 
        alert("You must write reminder!");
    }
    else{
        //input filed is not empty
        let li=document.createElement("li"); //create a li element
        li.innerHTML = inputBox.value; //inbox text asign as list element
        listcontainer.appendChild(li);  //display 

        //add cross icon
        let span = document.createElement("span"); //create a span element
        span.innerHTML="\u00d7"; //take cross mark
        li.appendChild(span); // display cross mark
    }

    inputBox.value=''; //empty a text box
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
});