const hamburger = ()=>{

    const ham = document.querySelector(".hamburger")
    const responsive = document.querySelector(".hidden-nav")

    ham.addEventListener("click", () => {
       
        responsive.classList.toggle("responsive-active")
        ham.classList.toggle("icon-toggle")

    })
    

}

hamburger()