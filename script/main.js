let myimg = document.querySelector('img');

myimg.onclick=function(){
   let mySrc = myimg.getAttribute('src');
    
   if(mySrc == "images/firefox-icon.png"){
       myimg.setAttribute('src',"images/firefox2.png")
   }else{
       myimg.setAttribute('src',"images/firefox-icon.png")
   }
   
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myname =prompt('请输入你名字');
    if(!myname || myname === null){
        alert('名字不能为空');
        setUserName();
    }else{
         localStorage.setItem('name',myname);
         myHeading.textContent="苦逼了，"+myname;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storeName = localStorage.getItem('name');
    myHeading.textContent='苦逼了，'+storeName;
}
myButton.onclick = function() {
    setUserName();
}