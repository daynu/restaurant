
export default function menuLoad()
{
    let main = document.getElementById('main')
    main.innerHTML = '';

    let menuBody = document.createElement('div')
    menuBody.classList.add('menu-body');
    let title = document.createElement('h2')
    title.id = "menuTitle";
    title.innerText = "MENU"
    let menu = document.createElement('div')
    menu.id = "menu";


    let cabbage = document.createElement('div')
    let cabbageImg = document.createElement('div')
    cabbageImg.classList.add("image")
    cabbageImg.style.backgroundImage = "url('./images/varza.jpg')"
    cabbage.append(cabbageImg);
    cabbage.innerHTML += "<p>Cabbage Pie</p>";

    let cheese = document.createElement('div')
    let cheeseImg = document.createElement('div')
    cheeseImg.classList.add("image")
    cheeseImg.style.backgroundImage = "url('./images/branza.jpg')"
    cheese.append(cheeseImg);
    cheese.innerHTML += "<p>Cheese Pie</p>";


    menu.append(cabbage, cheese)
    menuBody.append(title, menu)

    main.append(menuBody)

}