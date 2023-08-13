export default function navbarLoad()
{
    let navbar = document.querySelector('.navbar')
    let logo = document.createElement('h2')
    logo.id = "logo";
    logo.innerText = "Piacenti";
    let home = document.createElement('p')
    home.classList.add('navlink')
    home.id = "home";
    home.innerText = "Home";
    let menuButton = document.createElement('p')
    menuButton.classList.add('navlink')
    menuButton.id = "menuButton";
    menuButton.innerText = "Menu";
    let contact = document.createElement('p')
    contact.classList.add('navlink')
    contact.id = "contact";
    contact.innerText = "Contact";
    navbar.append(logo, home, menuButton, contact)
}