// const form =[...document.querySelector('.form > .password-container').children];

// form.forEach((item, i)=>{
//     setTimeout(()=>{
//         item.style.opacity=1;
//     },i*100);
// })
var email;
function click(){

    // const value =document.getElementsByClassName('.password').value;

    var email=document.getElementById('id_email').value;
    document.getElementById("demo").innerHTML = email;
}