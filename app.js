const pageOne = document.querySelector('.page-one');
const pagetwo = document.querySelector('.page-two');
const submit = document.querySelector('.submit-btn');
const rating = document.querySelector('.rating');
const btn = document.querySelectorAll('#button');
const rateBtn = document.querySelector('.rate-btn');

submit.addEventListener('click',() =>{
if (pageOne.style.display ="block") {
   pageOne.style.display = "none" 
   pagetwo.style.display ="block"
}
});
rateBtn.addEventListener('click',() =>{
    if (pagetwo.style.display ="block") {
       pagetwo.style.display = "none" 
       pageOne.style.display ="block"
    }
    });

btn.forEach((btn) =>{
    btn.addEventListener('click',()=>{
        rating.innerHTML = btn.innerHTML
    })
});