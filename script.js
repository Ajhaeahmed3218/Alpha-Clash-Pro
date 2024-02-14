function handleKeybordButtonPress(e) {
    const playerPressed = e.key
    // console.log("Player Pressed",playerPressed );

    const currentAlphabetElement=document.getElementById("current-alphabet")
    const currentAlphabet =currentAlphabetElement.innerText
    const expectedAlphabet= currentAlphabet.toLowerCase()
    

    if (playerPressed === expectedAlphabet) {
        console.log("You win");

        const currentScore =getElementValuebyId("current-score")
        const updatedScore = currentScore + 1 
        setTextElementValuebyId("current-score", updatedScore  )
        
        removeBgColorById(playerPressed)
        countinueGame()
        
    } else {
        console.log("You lost a life");
        const currentLife =getElementValuebyId("current-life")
        const removeLife = currentLife - 1
        setTextElementValuebyId("current-life", removeLife)

        
        // if (newLife <= 0) {
        //     hiddenElementById("play-ground")
        //     showElementById("score-section")
        //     const currentScoreElement=document.getElementById("current-score")
        //     const currentScoreText=currentScoreElement.innerText;
        //     const scoreDeshbord = document.getElementById("score-deshbord")
        //     scoreDeshbord.innerText=currentLifeText
        //     // console.log(currentLifeText);
        // }

        
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



