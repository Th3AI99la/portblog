/* Abre e fecha o menu lateral em modo mobile */
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ?menuMobile.classList.replace("bi-list", "bi-x")
    :menuMobile.classList.replace("bi-x", "bi-list")
    body.classList.toggle("menu-nav-active")
})

/* Fecha o menu quando cliclar em algum item e muda o icone para list */
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener('click', () =>{
        if (body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

// Animar todos os itens na tela que tiverem meu atributo data-anime 




const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.99;

    //Verifica item*item
    item.forEach(element => {
        if (windowTop > element.offsetTop){
            element.classList.add("animate");
        }else{
            element.classList.remove("animate");
        }
    });
};


window.addEventListener("scroll", () =>{
    animeScroll();
})




































/* 
class MobileNavBar{
    constructor(mobileMenu, navList, navItem){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navItem = document.querySelectorAll(navItem);
    
        this.activeClass = "active";
        this.animateLinks();
       
    }

    animateLinks(){ 
        console.log("foii")
        this.navItem.forEach((link, index) => {
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation= `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
   }

   handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
   }
   
   
   addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick);
    }
    Infinity(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }






}

const mobileNavBar = new MobileNavBar(
    ".nav-menu",
    ".nav flex-column",
    ".nav flex-column li",
);


mobileNavBar.Infinity();
*/