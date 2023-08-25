// JavaScript Document
var person = {
    fname: '',
    lname:'',
    email:'',
    confirmemail:'',
    phone:'',
   }

var firstFirst = document.querySelector('#first-name')
console.log(firstFirst)
var lastLast = document.querySelector('#last-name')
console.log(lastLast)
var Emailemail = document.querySelector('#email')
var confirmconfirm = document.querySelector('#con-email')
var phonephone = document.querySelector('#phone')

const button = document.querySelector("#confirm");


 

button.addEventListener(`click`, function(e){
    let personfirst = /^[A-Za-z][A-Z\-a-z]{1,}$/
    let conemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let phonenumber = /^\d{10}$/;
    if(personfirst.test(firstFirst.value) === false)
    {
        firstFirst.nextElementSibling.innerHTML = "Invalid first Name!";
    }
    if(personfirst.test(lastLast.value) === false)
    {
        lastLast.nextElementSibling.innerHTML = "Invalid last Name!";
    }
    if(conemail.test(Emailemail.value) === false)
    {
        Emailemail.nextElementSibling.innerHTML = "Invalid Email Name!";
    }
    if(Emailemail.value != confirmconfirm.value)
    {
        confirmconfirm.nextElementSibling.innerHTML = "Emails not the same!";
        //console.log(confirmconfirm)
    }
    if(phonenumber .test(phonephone.value) === false)
    {
        phonephone.nextElementSibling.innerHTML = "Phone Number is incorect"; 
    }
    else
    {
        var x = document.querySelector("#form"); 
        var w = document.querySelector("#confirmation")
        x.style.display = "none";
        w.style.display = "block"

    }

   

   

  })