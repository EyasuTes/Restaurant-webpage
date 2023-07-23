import { body } from "./restaurant";
import {homepage} from './restaurant';
import { menupage } from "./menu";
import {contactpage} from "./contact"


function initalLoad(){
    homepage();
    body()
   
    const home= document.querySelector('.home')
    const content=document.querySelector('#content')
    home.addEventListener('click', function(){
        clear()
        home.style.backgroundColor='#9ca3af'
        menu.style.backgroundColor='#F5F5DC'
        contact.style.backgroundColor='#F5F5DC'
        
        
        body()
    })
    const menu= document.querySelector('.menu')
    menu.addEventListener('click', function(){
        clear()
        home.style.backgroundColor='#F5F5DC'
        menu.style.backgroundColor='#9ca3af'
        contact.style.backgroundColor='#F5F5DC'
        menupage()
    })
    const contact =document.querySelector('.contact')
    contact.addEventListener('click',function(){
        clear()
        home.style.backgroundColor='#F5F5DC'
        menu.style.backgroundColor='#F5F5DC'
        contact.style.backgroundColor='#9ca3af'
        contactpage()
    })

    
}
function clear(){
    const pageContent=document.querySelector('.pageContent')
    if(pageContent){
        content.removeChild(pageContent)
    }
}

export default initalLoad;