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



