
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
    cabbage.innerHTML += "<p>Cabbage Pie</p>"+
                            "<p>320g</p>"+
                            "<p style = 'font-weight: bold'>18$</p>"+
                            "<button class = 'orderFood'>Add to cart</button>";

    let cheese = document.createElement('div')
    let cheeseImg = document.createElement('div')
    cheeseImg.classList.add("image")
    cheeseImg.style.backgroundImage = "url('./images/branza.jpg')"
    cheese.append(cheeseImg);
    cheese.innerHTML += "<p>Cheese Pie</p>"+
                        "<p>320g</p>"+
                        "<p style = 'font-weight: bold'>25$</p>"+
                        "<button class = 'orderFood'>Add to cart</button>";


    let sourCherry = document.createElement('div')
    let sourCherryImg = document.createElement('div')
    sourCherryImg.classList.add("image")
    sourCherryImg.style.backgroundImage = "url('./images/visina.png')"
    sourCherry.append(sourCherryImg);
    sourCherry.innerHTML += "<p>Sour Cherry Pie</p>"+
                        "<p>300g</p>"+
                        "<p style = 'font-weight: bold'>21$</p>"+
                        "<button class = 'orderFood'>Add to cart</button>";


    let apple = document.createElement('div')
    let appleImg = document.createElement('div')
    appleImg.classList.add("image")
    appleImg.style.backgroundImage = "url('./images/mere.jpg')"
    apple.append(appleImg);
    apple.innerHTML += "<p>Apple Pie</p>"+
                        "<p>320g</p>"+
                        "<p style = 'font-weight: bold'>20$</p>"+
                        "<button class = 'orderFood'>Add to cart</button>";                    


    
            
    
    menu.append(cabbage, cheese, sourCherry, apple)
    menuBody.append(title, menu)

    main.append(menuBody)

}