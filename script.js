const myAnswer = document.querySelectorAll(".answer");
const myAccordion = document.querySelectorAll(".accordion");
const myPlusIcons = document.querySelectorAll(".plus");
const myMinusIcons = document.querySelectorAll(".minus");

function accordionGeneral(){
    myMinusIcons[0].style.display = "none"
    myMinusIcons[1].style.display = "none"
    myMinusIcons[2].style.display = "none"
    myMinusIcons[3].style.display = "none"

    myAccordion[0].addEventListener("click", function(){
        myAnswer[0].classList.toggle('active');

        if (myAnswer[0].classList.contains('active')){
            myMinusIcons[0].style.display = "flex"
            myPlusIcons[0].style.display = "none"
        }else{
            myMinusIcons[0].style.display = "none"
            myPlusIcons[0].style.display = "flex"
        }
    })

    myAccordion[1].addEventListener("click", function(){
        myAnswer[1].classList.toggle('active');

        if (myAnswer[1].classList.contains('active')){
            myMinusIcons[1].style.display = "flex"
            myPlusIcons[1].style.display = "none"
        }else{
            myMinusIcons[1].style.display = "none"
            myPlusIcons[1].style.display = "flex"
        }
    })

    myAccordion[2].addEventListener("click", function(){
        myAnswer[2].classList.toggle('active');

        if (myAnswer[2].classList.contains('active')){
            myMinusIcons[2].style.display = "flex"
            myPlusIcons[2].style.display = "none"
        }else{
            myMinusIcons[2].style.display = "none"
            myPlusIcons[2].style.display = "flex"
        }
    })

    myAccordion[3].addEventListener("click", function(){
        myAnswer[3].classList.toggle('active');

        if (myAnswer[3].classList.contains('active')){
            myMinusIcons[3].style.display = "flex"
            myPlusIcons[3].style.display = "none"
        }else{
            myMinusIcons[3].style.display = "none"
            myPlusIcons[3].style.display = "flex"
        }
    })
}

accordionGeneral();