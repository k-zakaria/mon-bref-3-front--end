//---------------------------------menu burgre-------------------------------------
const menuhome = document.querySelector('.header__menuhome');
 const nav = document.querySelector('nav');

 menuhome.addEventListener('click', function(){
    nav.classList.toggle('opne');

 });    

 //---------------------------------supprission--------------------------------------

let btnRemove = document.querySelectorAll(".cart_close");

btnRemove.forEach((btnRemove) => {
   btnRemove.addEventListener("click" , removeCart);
});

function removeCart(){
   this.parentElement.remove();
}
