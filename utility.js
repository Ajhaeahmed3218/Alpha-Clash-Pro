function hiddenElementById(elementId) {
    const element=document.getElementById(elementId)
    element.classList.add("hidden")
  
}
function showElementById(elementId) {
    const element=document.getElementById(elementId)
    element.classList.remove("hidden")
  
}

function getARendomAlphabet() {
    const alphabetString ="abcdefghijklmnopqrstuvwxyz"
    const alphabets =alphabetString.split("")
    

    const randomNummber= Math.random()*25
    const index =Math.round(randomNummber)

    const alphabet=alphabets[index]
    
    return alphabet
}

function setBgColorById(elementId) {
   const element= document.getElementById(elementId)
   element.style.background="#FFA500"
}