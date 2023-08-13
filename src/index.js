import pageLoad from './page-load'
import menuLoad from './menu-load';
import navbarLoad from './navbar-load';

navbarLoad()
pageLoad()
let home = document.getElementById('home')
let menuButton = document.getElementById('menuButton')
let body = document.createElement('div')



home.addEventListener('click', ()=>
{
    pageLoad()

})

menuButton.addEventListener('click', ()=>
{
    menuLoad()
})