
// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var ingredient = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renders() {
  renderPatty();
  renderCheese();

  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (ingredient.Patty) {
    patty.style.display = 
    "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let patty = document.querySelector("#cheese");

  if (ingredient.Patty) {
    patty.style.

    display = "inherit";
  } else {

    patty.style.display = "none";
  }
}
function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomatoes = document.querySelector("#tomato");
  if(ingredient.Tomatoes){

    tomatoes.style.display = "inherit"
  }else{

    tomatoes.style.display =
     "none"
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.querySelector("#onion");
  if(ingredient.Onions){
    onions.style.display = "inherit"
  }else{

    onions
    .style.display = "none"
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.querySelector("#lettuce");
  if(ingredient.Lettuce){
    lettuce.style.display = "inherit"

  }else{
    lettuce.style.display = "none"

  }
}

document.querySelector(".btn-patty").onclick = function () {
  ingredient.Patty = !ingredient.Patty;
  renders();
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function(){
  ingredient.Cheese = !ingredient.Cheese;
  renders();
}

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function(){
  ingredient.Tomatoes = !ingredient.
  Tomatoes;


  renders();
}


// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function(){
  ingredient.Onions = !ingredient.Onions;

  renders();

}


// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function(){
  ingredient.Lettuce = !ingredient.Lettuce;
  renders();
}


//Challenge 1 - Add/Remove the class active to the buttons based on ingredient
function renderButtons(){
  for(key in ingredient){

    if(
      ingredient[key]){


      
      console.log(ingredient[key]);
      document.querySelector(".btn-" + key.toLowerCase()).classList.add("active")
    }else{

      document.querySelector(".btn-" + key.toLowerCase()).classList.remove("active")
    }
  }
}



//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  let i = 0;
  let elements = document.querySelectorAll(".items");
  for(key in ingredient){
    if(ingredient[key]){
      elements[i++].style.display = "inherit";
    }else{
      elements[i++].style.display = "none";
    }
  }
}
//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
function renderPrice(){
  let totalPrice = 20;
  for(key in ingredient){
    if(ingredient[key]){
      totalPrice+= ingredients[key];
    }
  }
  document.
  querySelector("body > footer > div.Rectangle3 > div > p.price-details").innerHTML = "INR " + totalPrice;
}


