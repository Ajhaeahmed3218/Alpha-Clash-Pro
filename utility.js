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
   element.classList.add("bg-[#FFA500]")
}
function removeBgColorById(elementId) {
    const element= document.getElementById(elementId)
    element.classList.remove("bg-[#FFA500]")
 }

//  get value use Id
function getElementValuebyId(elementId) {
    const element=document.getElementById(elementId)
        const elemenetValueText=element.innerText;
        const Value =parseInt(elemenetValueText)
        return Value
}


//  set text value use Id
function setTextElementValuebyId(elementId, value  ) {
    const element=document.getElementById(elementId)
    element.innerText=value
}