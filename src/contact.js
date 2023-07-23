import './style.css';

import {homepage} from './restaurant'

export function contactpage(){ 
    
    const content= document.getElementById('content')
    
    const phone= document.createElement('div')
    phone.textContent='your phone'
    phone.style.fontSize='30PX'
    const email= document.createElement('div')
    email.textContent='your email'
    email.style.fontSize='30PX'
    const pageContent=document.createElement('div')
    pageContent.classList.add('pageContent')
    pageContent.appendChild(phone)
    pageContent.appendChild(email)
    content.appendChild(pageContent)
    
 }
