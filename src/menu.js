import './style.css';

import {homepage} from './restaurant'

export function menupage(){ 
    
    
    const content= document.getElementById('content')
    
    const welcome =document.createElement('h1')
    welcome.textContent='Welcome to the Menu section'
    welcome.classList.add('menuWelcom')
    const meal1= document.createElement('div')
    meal1.textContent='1, lasagna'
    const pageContent =document.createElement('div')
    pageContent.classList.add('pageContent')
    pageContent.appendChild(welcome)
    pageContent.appendChild(meal1)

    content.appendChild(pageContent)
    
}
