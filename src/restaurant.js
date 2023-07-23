import './style.css';
import my from './rest.jpg';


export function homepage(){ 
    
    const content= document.getElementById('content')
    const header =document.createElement('div')
    header.classList.add('header')
    console.log(header.textContent)
    const home=document.createElement('button')
    home.textContent='Home'
    home.style.fontSize='25px'
    home.classList.add('home')
    const menu=document.createElement('button')
    menu.textContent='Menu'
    menu.style.fontSize='25px'
    menu.classList.add('menu')
    const contact=document.createElement('button')
    contact.textContent="Contact"
    contact.style.fontSize='25px'
    contact.classList.add('contact')
    
    content.appendChild(header)
    header.appendChild(home)
    header.appendChild(menu)
    header.appendChild(contact)
    
}
export function body(){
    const content= document.getElementById('content')
    const myImage= document.createElement('img')
    myImage.src = my; 
    const pageContent =document.createElement('div')
    pageContent.classList.add('pageContent')
    pageContent.classList.add('homebody')
    myImage.classList.add('image')
    const name =document.createElement('h1');
    name.textContent='Araya Restaurant'
    name.classList.add('araya')
    
    content.appendChild(pageContent)
    pageContent.appendChild(myImage);
    pageContent.appendChild(name)
}
    


