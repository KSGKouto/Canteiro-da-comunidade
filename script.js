function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

const link1 = docuiment.getElementById("link1");
const link2 = docuiment.getElementById("link2");

link1.addEventListener('click', () =>{
    scrollToElement('.header');
})

link1.addEventListener('click', () =>{
    scrollToElement('.header', 1);
})

function login() {
    window.location.href = "index2.html";
}