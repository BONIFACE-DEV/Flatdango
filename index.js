//base url
const baseUrl = "http://localhost:3000/films";
//fetching movies
function fetchMovies(){
    fetch(baseUrl)
        .then((response) => response.json())
        .then((data) =>{
            data.forEach((films) =>{
              //creating li element
    let li = document.createElement("li");
    li.textContent = films.title;
    li.addEventListener("click",
    (e)=>{
    let buttonContent = document.querySelector("button#buy-ticket")
    buttonContent.textContent = "Buy Tickets"
    let title =
    document.getElementById("movie-title");
    title.textContent =films.title;
    // loading poster image 
      let img =document.getElementById("movie-poster");
      img.src =films.poster;
      let showTime = document.getElementById("showtime");
    //show time and runtime
      showTime.textContent = films.showtime;
      let runTime = document.getElementById("runtime");
      runTime.textContent = `${films.runtime} Minutes`;
      let tickets = document.querySelector("div#ticket-counter");
      tickets.textContent = films["capacity"] - films["tickets_sold"]
     })
    //appending li of movies  
        document.querySelector("ul#films").appendChild(li)
            })
        })
    }fetchMovies()

  
function baseMovie(){ fetch(baseUrl)
    .then(response => response.json())
    .then(data => {

  //returning the specified element
    document.querySelector("h3#movie-title").textContent = data[0]["title"]
    document.querySelector("img#movie-poster").setAttribute("src",`${data[0]["poster"]}`)
    document.querySelector("div#showtime").textContent = data[0]["showtime"]
    document.querySelector("div#runtime").textContent = `${data[0]["runtime"]} Minutes`
    document.querySelector("ul#films").firstElementChild.remove()
    document.querySelector("div#ticket-counter").textContent = data[0]["capacity"] - data[0]["tickets_sold"]
})
}
baseMovie()

//buying tickets
function buyTicket(){
    let button = document.querySelector("button#buy-ticket")

//eventlistner on buy ticket
    button.addEventListener("click",function(){
    let currentLi = document.querySelector("div#ticket-counter")
    let number = parseInt(currentLi.textContent)
    if(number >=1){
        currentLi.textContent = currentLi.textContent -1}
        else {document.querySelector("button#buy-ticket").textContent = "Sold Out"
          alert("All tickets sold out!")}
      }
      )
      }
      buyTicket()