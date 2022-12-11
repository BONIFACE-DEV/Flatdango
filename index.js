const url = "http://localhost:3000/films"

const films = document.getElementById('films')

const request = async () => {
    let req = await fetch("http://localhost:3000/films")
    let res = await req.json()
        res.forEach((film, i) => {
            const li = document.createElement('li')
            li.innerText = film.title
            films.append(li) 
        })
}

document.addEventListener("DOMContentLoaded", () => {    
  const fetchFirstFilm = () => {      
    fetch(url + id) 
    .then(response => response.json()) 
    .then(data => { renderFirstFilm(data) })    
    } 
     fetchFirstFilm();
 })

 
 const renderFirstFilm = (film) => {
    const poster = document.getElementById("poster")
poster.src = films.poster

const title = document.getElementById("title")
title.innerText = films.title

const runtime = document.getElementById("runtime")
runtime.innerText = `${films.runtime} MINUTES`


const showtime = document.getElementById("showtime")
showtime.innerText = films.showtime

const description = document.getElementById("film-info")
description.innerText = films.description

const ticketSpan = document.getElementById("ticket-num")
films.tickets_sold
const convertedCapacity = parseInt(films.capacity, 10)
ticketSpan.innerText = convertedCapacity -films.tickets_sold

const button = document.querySelector(".ui.orange.button")
button.addEventListener("click", (e) => {  if (ticketSpan.innerText <= 0){
     let buttonDiv = document.querySelector(".extra.content");    
     buttonDiv.innerHTML = <button>Sold Out</button>
  }
  else {
     const tickets_sold = films.tickets_sold + 1
     let obj = {tickets_sold} //this has to be key:value pair     updateTicketNum(obj)
  }} )}

  const updateTicketNum = (obj) => { 
    options = {
        method: "PATCH",
        headers: { 
           "content-type": "application/json",
           "accept": "application/json"
         },
         body: JSON.stringify(obj)
        }
        fetch((url + id), options)
        .then(response => response.json())
        .then(data => {renderFirstFilm(data)
        })
    }