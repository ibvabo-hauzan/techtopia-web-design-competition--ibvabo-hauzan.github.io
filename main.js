function addClassListByClassName(element,classlist){
    for(let i = 0;i<document.getElementsByClassName(element).length;i++){
        document.getElementsByClassName(element)[i].classList.add(classlist)
    }
}
function removeClassListByClassName(element,classlist){
    for(let i = 0;i<document.getElementsByClassName(element).length;i++){
        document.getElementsByClassName(element)[i].classList.remove(classlist)
    }
}
function darkLight(){
    if(document.getElementById("darklight").innerText == "Light Mode") {

        document.getElementById("darklight").innerText = "Dark Mode"
        addClassListByClassName("body","light-body")
        addClassListByClassName("darklight","light-darklight")
        addClassListByClassName("brand","light-brand")
        addClassListByClassName("h1","light-h1-2-3-nav_a")
        addClassListByClassName("nav_button","light-nav_button")
        addClassListByClassName("p","light-p-label")
        addClassListByClassName("label","light-p-label")

    } else {

        document.getElementById("darklight").innerText = "Light Mode"
        removeClassListByClassName("body","light-body")
        removeClassListByClassName("darklight","light-darklight")
        removeClassListByClassName("brand","light-brand")
        removeClassListByClassName("h1","light-h1-2-3-nav_a")
        removeClassListByClassName("nav_button","light-nav_button")
        removeClassListByClassName("p","light-p-label")
        removeClassListByClassName("label","light-p-label")
        
    }
}