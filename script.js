function handleKeybordButtonPress(e) {
    const playerPressed = e.key
    console.log("Player Pressed",playerPressed );

    const currentAlphabetElement=document.getElementById("current-alphabet")
    const currentAlphabet =currentAlphabetElement.innerText
    const expectedAlphabet= currentAlphabet.toLowerCase()
    

    if (playerPressed === expectedAlphabet) {
        console.log("You win");
        removeBgColorById(playerPressed)
        countinueGame()
        
    } else {
        console.log("You lost a life");
    }

}

document.addEventListener("keyup", handleKeybordButtonPress)



function countinueGame() {

    const alphabet=getARendomAlphabet()
    
    const currentAlphabetElement=document.getElementById("current-alphabet")
    currentAlphabetElement.innerText=alphabet
    setBgColorById(alphabet)
}

function play() {
    hiddenElementById("home-screen")

    showElementById("play-ground")
    countinueGame()
}



