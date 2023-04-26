import { imgItem } from "./Box.js"
import { boxItem } from "./Box.js"
import { boxTextImg } from "./Box.js"

let iconMenu =document.querySelector('.icon-menu')
let icon = document.querySelector('.icon')
let menuMoblieBox = document.querySelector('.menu-mobile')
let menuMobileItems = document.querySelector('.mobile-items')

iconMenu.addEventListener('click' ,function(){
    if(icon.classList.contains('fa-bars')){
        icon.classList.remove("fa-bars") 
        icon.classList.add("fa-times") 
        menuMoblieBox.style.right = " 0"
        menuMobileItems.style.right = "1rem"
    }else{
        icon.classList.remove("fa-times") 
        icon.classList.add("fa-bars") 
        menuMoblieBox.style.right = " -90rem"
        menuMobileItems.style.right = "-90rem"
        
    }
})

let coll = document.getElementsByClassName('collapsibles')

let i

for(i = 0 ; i<coll.length;i++){
    coll[i].addEventListener('click' ,function(){
        this.classList.toggle('actives')
    let content = this.nextElementSibling;
    if(content.style.maxHeight){
        content.style.maxHeight = null;
    }else{
        content.style.maxHeight = content.scrollHeight + "px";
    }
    })
}




$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true  ,
    rtl:true,
   autoplay:true,
   autoplayTimeout:2000,
    responsive:{
        0:{
            items:1,
          
        },
        380:{
            items:1,
        },
        576:{
            items:2,
          
        },
        768:{
            items:2,
           
        },
        800:{
            items:2,
        },

        992:{
            items:2,
            loop:false,
        },
        1100:{
            items:3
        }
    }
})
