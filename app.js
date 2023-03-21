const phoneInput = document.querySelector('#phoneInput')
const phoneCheck = document.querySelector('#phoneCheck')
const phoneResult = document.querySelector('.phoneResult')

const regExp = /^\201\d{11}$/

phoneCheck.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK!'
        phoneResult.style.color = 'green'
    }else{
        phoneResult.innerHTML = 'Not Ok!'
        phoneResult.style.color = 'red'
    }
};



window.onload = function() {
    var pos = 0; 

   var box = document.getElementById('box');
   var t = setInterval(move, 1);

 
   function move() {
       if (pos >= 150) {
           clearInterval(t);
       } else {
           pos += 1;
           box.style.left = pos + 'px';
       }
   }
};
