
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
    homeText.innerText = "The best Moldovan pies in US"
    homeText.id = "home-text";
    homeBody.append(greeting, homeText)
    main.append(homeBody)
}
