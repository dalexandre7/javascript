// JavaScript Document
var person = {
    fname: '',
    lname:'',
    email:'',
    confirmemail:'',
    phone:'',
   }

var firstFirst = document.querySelector('#first-name')
var labelf = document.querySelector('#labelF')


var lastLast = document.querySelector('#last-name')
var labell = document.querySelector('#labelL')


var Emailemail = document.querySelector('#email')
var labele = document.querySelector('#labelE')

var confirmconfirm = document.querySelector('#con-email')
var labelc = document.querySelector('#labelC')

var phonephone = document.querySelector('#phone')
var labelp = document.querySelector('#labelP')

var x = document.querySelector("#form"); 
var w = document.querySelector("#confirmation"); 
var answer = document.querySelector(`#info`); 

const button = document.querySelector("#confirm");


 

button.addEventListener(`click`, function(e){
    let personfirst = /^[A-Za-z][A-Z\-a-z]{1,}$/
    let conemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let phonenumber = /^\d{10}$/;
    if(personfirst.test(firstFirst.value) === false)
    {
        firstFirst.nextElementSibling.innerHTML = "*";
        firstFirst.nextElementSibling.classList.toggle("red"); 
        labelf.classList.toggle("red"); 
    }
    if(personfirst.test(lastLast.value) === false)
    {
        lastLast.nextElementSibling.innerHTML = "*";
        lastLast.nextElementSibling.classList.toggle("red"); 
        labell.classList.toggle("red"); 
    }
    if(conemail.test(Emailemail.value) === false)
    {
        Emailemail.nextElementSibling.innerHTML = "*";
        Emailemail.nextElementSibling.classList.toggle("red"); 
        labele.classList.toggle("red"); 
    }
    if(Emailemail.value != confirmconfirm.value)
    {
        confirmconfirm.nextElementSibling.innerHTML = "*";
        confirmconfirm.nextElementSibling.classList.toggle("red"); 
        labelc.classList.toggle("red"); 
    }
    if(phonenumber .test(phonephone.value) === false)
    {
        phonephone.nextElementSibling.innerHTML = "*"; 
        phonephone.nextElementSibling.classList.toggle("red"); 
        labelp.classList.toggle("red"); 
    }
    else
    {
        
        x.style.display = "none";
        w.style.display = "block"; 
        let phoneString = phonephone.value.substring(0, 3) + "-" + phonephone.value.substring(3, 6) + "-" + phonephone.value.substring(6, 10) 
        answer.innerHTML = firstFirst.value + " " + lastLast.value + "</br>" + Emailemail.value + "</br>" + phoneString; 
    }


    

   

   

  })