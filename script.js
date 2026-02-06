// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const chopperImg = document.getElementById("letter-chopper");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "HUZZZZAAHHHHHHHH!";

    catImg.src = "cat_dance.gif";

    // Create a flex container for both images if it doesn't exist
    let imagesContainer = document.getElementById("images-container");
    if (!imagesContainer) {
        imagesContainer = document.createElement("div");
        imagesContainer.id = "images-container";
        imagesContainer.style.display = "flex";
        imagesContainer.style.justifyContent = "center";
        imagesContainer.style.alignItems = "center";
        imagesContainer.style.gap = "12px";
        catImg.parentElement.insertBefore(imagesContainer, catImg);
        imagesContainer.appendChild(catImg);
    }

    // Add (or update) a chopper GIF next to the cat GIF
    let chopper = document.getElementById("letter-chopper");
    if (!chopper) {
        chopper = document.createElement("img");
        chopper.id = "letter-chopper";
        chopper.alt = "Chopper";
        chopper.src = "chopper_dance.gif";
        chopper.style.width = "250px";
        chopper.style.height = "auto";
        imagesContainer.appendChild(chopper);
    } else {
        chopper.src = "chopper_dance.gif";
    }

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
