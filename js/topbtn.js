const btt=document.querySelector('#back_to_top');
let scrollAmount;

window.addEventListener('scroll',function(){
    scrollAmount=this.scrollY;
    console.log(scrollAmount)
    if(scrollAmount>scrollAmount/4){
        btt.classList.add('visible');
    }else{
        btt.classList.remove('visible')  
    }
})
btt.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(btt.getAttribute('href')).
    scrollIntoView({behavior:'smooth'})
})