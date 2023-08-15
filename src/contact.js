export default function contactLoad()
{
    let main = document.getElementById('main')
    main.innerHTML = '';

    let contactBody = document.createElement('div')
    contactBody.classList.add('contact-body')
    let contactTitle = document.createElement('h2')
    contactTitle.id = 'contact-title';
    contactTitle.innerText = "Contact us";

    let map = document.createElement('div')
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6945.951800119047!2d-95.30417082918548!3d29.780040285613488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bbf9f516340f%3A0x6480d7974c03202d!2s6904%20Brownsville%20St%2C%20Houston%2C%20TX%2077020%2C%20Statele%20Unite%20ale%20Americii!5e0!3m2!1sro!2s!4v1692102666516!5m2!1sro!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    map.id = 'map';
    let contactInfo = document.createElement('div')
    contactInfo.id = 'contact-info'
    let location = document.createElement('div')
    location.innerHTML = '<h2>Location</h2><p>6904 Brownsville St, Houston, TX 77020, United States of America</p>'
    let hours = document.createElement('div')
    hours.innerHTML = '<h2>Hours</h2><p>Mon-Sun: 8-22</p>'
    let contact = document.createElement('div')
    contact.innerHTML = '<h2>Contact</h2><p>+18143008651<br>piacentirest@gmail.com</p>'
    contactInfo.append(location, hours, contact)
    contactBody.append(contactTitle, map, contactInfo)

    main.append(contactBody)
    
}