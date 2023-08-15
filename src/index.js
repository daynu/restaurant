import pageLoad from './page-load'
import menuLoad from './menu-load';
import navbarLoad from './navbar-load';
import contactLoad from './contact';

navbarLoad()
pageLoad()
let home = document.getElementById('home')
let menuButton = document.getElementById('menuButton')
let logo = document.getElementById('logo')
let contact = document.getElementById('contact')



home.addEventListener('click', ()=>
{
    pageLoad()

})

logo.addEventListener('click', ()=>
{
    pageLoad()

})

menuButton.addEventListener('click', ()=>
{
    menuLoad()
})

contact.addEventListener('click', () =>
{
    contactLoad()
})