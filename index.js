
const nameEl = document.getElementById("nameData");
const imageEl = document.getElementById("planet")
const descriptionEl = document.getElementById("descriptionData")
const distanceEl = document.getElementById("distance")
const travelEl = document.getElementById("travel")
const buttonElMoon = document.getElementById("moon")
const buttonElMars = document.getElementById("mars")
const buttonElEuropa = document.getElementById("europa")
const buttonElTitan = document.getElementById("titan")


function renderTitles(titles) {
    nameEl.textContent = titles
}

function renderImages(images) {
    imageEl.src = images;
}

function renderDescritions(descriptions) {
    descriptionEl.textContent = descriptions;
}

function renderDistances(distances) {
    distanceEl.textContent = distances
}

function renderTravels(travels) {
    travelEl.textContent = travels
}    

async function getDataIndex0() {

    let titles = '';
    let images = '';
    let descriptions = '';
    let distances = '';
    let travels = '';

    try {
        const response = await fetch ("./data/data.json")
        const data = await response.json()
        console.log('object', data)

        titles = data.destinations.map(({name}) => name)[0] 
        console.log(titles)

        images = data.destinations.map(({images}) => images.png)[0]
        console.log(images) 

        descriptions = data.destinations.map(({description}) => description)[0]
        console.log(descriptions) 

        distances = data.destinations.map(({distance}) => distance)[0]
        console.log(distances) 

        travels = data.destinations.map(({travel}) => travel)[0]
        console.log(travels) 
     
    }catch(e) {
        console.log("error",e)
    }

    renderTitles(titles)
    renderTravels(travels)
    renderDistances(distances)
    renderDescritions(descriptions)
    renderImages(images)
      
}

buttonElMoon.addEventListener('click', getDataIndex0)

async function getDataIndex1() {

    let titles = '';
    let images = '';
    let descriptions = '';
    let distances = '';
    let travels = '';

    try {
        const response = await fetch ("./data/data.json")
        const data = await response.json()
        console.log('object', data)

        titles = data.destinations.map(({name}) => name)[1] 
        console.log(titles)

        images = data.destinations.map(({images}) => images.png)[1]
        console.log(images) 

        descriptions = data.destinations.map(({description}) => description)[1]
        console.log(descriptions) 

        distances = data.destinations.map(({distance}) => distance)[1]
        console.log(distances) 

        travels = data.destinations.map(({travel}) => travel)[1]
        console.log(travels) 
     
    }catch(e) {
        console.log("error",e)
    }

    renderTitles(titles)
    renderTravels(travels)
    renderDistances(distances)
    renderDescritions(descriptions)
    renderImages(images)
    
}

buttonElMars.addEventListener('click', getDataIndex1)

async function getDataIndex2() {

    let titles = '';
    let images = '';
    let descriptions = '';
    let distances = '';
    let travels = '';

    try {
        const response = await fetch ("./data/data.json")
        const data = await response.json()
        console.log('object', data)

        titles = data.destinations.map(({name}) => name)[2] 
        console.log(titles)

        images = data.destinations.map(({images}) => images.png)[2]
        console.log(images) 

        descriptions = data.destinations.map(({description}) => description)[2]
        console.log(descriptions) 

        distances = data.destinations.map(({distance}) => distance)[2]
        console.log(distances) 

        travels = data.destinations.map(({travel}) => travel)[2]
        console.log(travels) 
     
    }catch(e) {
        console.log("error",e)
    }

    renderTitles(titles)
    renderTravels(travels)
    renderDistances(distances)
    renderDescritions(descriptions)
    renderImages(images)
    
}

buttonElEuropa.addEventListener('click', getDataIndex2)

async function getDataIndex3() {

    let titles = '';
    let images = '';
    let descriptions = '';
    let distances = '';
    let travels = '';

    try {
        const response = await fetch ("./data/data.json")
        const data = await response.json()
        console.log('object', data)

        titles = data.destinations.map(({name}) => name)[3] 
        console.log(titles)

        images = data.destinations.map(({images}) => images.png)[3]
        console.log(images) 

        descriptions = data.destinations.map(({description}) => description)[3]
        console.log(descriptions) 

        distances = data.destinations.map(({distance}) => distance)[3]
        console.log(distances) 

        travels = data.destinations.map(({travel}) => travel)[3]
        console.log(travels) 
     
    }catch(e) {
        console.log("error",e)
    }

    renderTitles(titles)
    renderTravels(travels)
    renderDistances(distances)
    renderDescritions(descriptions)
    renderImages(images)
    
}

buttonElTitan.addEventListener('click', getDataIndex3)

















