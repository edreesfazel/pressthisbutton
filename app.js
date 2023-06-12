const players = [
    {name: "LeBron James", image: "lebron.jpg"  }, 
    {name: "Stephen Curry", image: "curry.jpg"  }, 
    {name: "Kevin Durant", image: "durant.jpg"  }, 
];


const playerButton = document.getElementById("playerButton");
const playerDisplay = document.getElementById("playerDisplay");

playerButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * players.length);
    const randomPlayer = players[randomIndex];


// Create an image element and set its source to the random player's image URL
const playerImage = document.createElement("img");
playerImage.src = randomPlayer.image;

// Clear any existing player image before displaying the new one
playerDisplay.innerHTML = "";

//Append the player image to the player display div
playerDisplay.appendChild(playerImage);

});
