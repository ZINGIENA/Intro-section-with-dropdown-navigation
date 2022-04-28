const menuToggler = document.getElementById('menuToggler')
const navbarNav = document.getElementById('navbarNav')
const closeNv = document.getElementById('closeNv')
const features = document.getElementById('features')
const company = document.getElementById('company')
const mndrpDown = document.getElementById('mndrpDown')
const mndrpDown2 = document.getElementById('mndrpDown2')

function dropMenus() {
    menuToggler.onclick = () => navbarNav.classList.toggle('nav-active')

    closeNv.onclick = () => navbarNav.classList.remove('nav-active')
       
    features.onclick = () => {
        mndrpDown.classList.toggle('hidden')
        features.classList.toggle('arwup')
    }
    company.onclick = () => {
        mndrpDown2.classList.toggle('hidden')
        company.classList.toggle('arwup')
    }  
}
dropMenus()





