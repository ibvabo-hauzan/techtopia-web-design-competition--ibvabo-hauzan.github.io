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
    if(document.getElementById("darklight_symbol").className == "bi bi-sun-fill") {

        document.getElementById("darklight_symbol").className = "bi bi-moon-stars-fill"
        addClassListByClassName("body","light-body")
        addClassListByClassName("darklight","light-darklight")
        addClassListByClassName("brand","light-brand")
        addClassListByClassName("h1-2-3","light-h1-2-3-nav_a")
        addClassListByClassName("navbar","light-navbar")
        addClassListByClassName("nav_button","light-nav_button")
        addClassListByClassName("p-a-label","light-p-a-label")

    } else {

        document.getElementById("darklight_symbol").className = "bi bi-sun-fill"
        removeClassListByClassName("body","light-body")
        removeClassListByClassName("darklight","light-darklight")
        removeClassListByClassName("brand","light-brand")
        removeClassListByClassName("h1-2-3","light-h1-2-3-nav_a")
        removeClassListByClassName("navbar","light-navbar")
        removeClassListByClassName("nav_button","light-nav_button")
        removeClassListByClassName("p-a-label","light-p-a-label")
        
    }
}