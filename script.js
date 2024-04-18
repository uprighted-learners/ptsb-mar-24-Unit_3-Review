/*
    THIS JAVASCRIPT FILE IS FOR THE INDEX HTML FILE
*/

// Creating global document variables.
let btn = document.getElementById("clickMeBtn");
let placeForImageDiv = document.getElementById("placeForImage");

// Adding a "click" event listener to our button.
btn.addEventListener("click", () => {
    getData(); // Whenever we click the button, run this function
})

async function getData() {
    try {
        // Fetching Data
        const request = await fetch("https://pokeapi.co/api/v2/pokemon/ditto"); // Fetch data from api
        const result = await request.json(); // Convert json object into regular object
        const sprite = result.sprites.front_default; //Grab specific data piece from the data object

        console.log(sprite); // sprite is a png link
        const newImage = document.createElement("img"); // Create an image tag
        newImage.src = sprite; // Set the src attribute of that image tag to the sprite png link we got from our data
        placeForImageDiv.appendChild(newImage); // Add the constructed image tag to our div

    } catch (err) {
        console.log("Something went wrong");
    }
}