import menuLoad from "./menu-load";


export default function pageLoad()
{   

    let main = document.getElementById('main')
    main.innerHTML = '';
    let homeBody = document.createElement('div')
    homeBody.classList.add('home-body');
    let greeting = document.createElement('h1')
    greeting.innerText = "Welcome to Piacenti!";
    greeting.id = 'greeting';
    let homeText = document.createElement('p')
    homeText.innerText = "The best Moldovan pies in the US"
    homeText.id = "home-text";
    let orderButton = document.createElement('button');
    orderButton.innerText = "Order Now !";
    orderButton.id = 'orderButton';
    orderButton.addEventListener('click', () =>
    {
        menuLoad()
    })
    homeBody.append(greeting, homeText, orderButton)
    main.append(homeBody)
}
