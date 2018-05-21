
let gifArray=["Stephen Curry","Michael Jordan","Lebron James", "Wilt Chamberlain", "Nick Young", "James Harden", "Nikola Jokic"]


$(document).ready(function(){

function setWidth() {
var one = document.getElementById("mainContainer");
var two = document.getElementById("images");
style = window.getComputedStyle(one);
wdt = style.getPropertyValue('width');
two.style.width = wdt;
      }
   
function createDivs(){
gifArray.forEach(function(gif, index){
    $("#"+index).remove()
    let parentDiv=document.createElement("div")
    parentDiv.setAttribute("ID", index);
    let mainContainer=document.getElementById("mainContainer");
    mainContainer.appendChild(parentDiv);

   let button=document.createElement("button");

    button.setAttribute("Class", "tag-buttons btn btn-primary");
    button.textContent=gif;
    
    let parentDivWithId=document.getElementById(index);
    parentDivWithId.appendChild(button);
    parentDivWithId.setAttribute("class", "button-row");

})
}
createDivs();
setWidth();

let listenerDiv=document.querySelector("body")
listenerDiv.addEventListener('click', function(event)
{

let clickEvent=event.target;

if(clickEvent==="class", gifArray[clickEvent.parentNode.id])
{
    let userInput=gifArray[clickEvent.parentNode.id];
    userInput = userInput.replace(" ", "+");
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=8ph8vWbEFdnwOzhJDYkWaz7nI7ZzORp0' +'&limit=10';

    $.ajax({url: queryURL, method: 'GET'}).done(function(response){
        response.data.forEach(function(res, resindex){
            $("#images").append('<img class="gif" src="' + response.data[resindex].images.fixed_height_small_still.url + '">');

        })

    });


}
});




$('body').on('click', '.gif', function() {
  
    var src = $(this).attr("src");

  if($(this).hasClass('playing')){
  
    //if playing class exists, then stop
  
    $(this).attr('src', src.replace(/\.gif/, "_s.gif"))
     $(this).removeClass('playing');
  } else {
    //if playing class doesn't exist, then play
    $(this).addClass('playing');
    $(this).attr('src', src.replace(/\_s.gif/, ".gif"))
  }
});

$(".submitButton").on("click", function(){
event.preventDefault();
let newInput=document.getElementById("addToArrayInput");
gifArray.push(newInput.value);
createDivs();
newInput.value="";

});
});


