let imgs=document.querySelector("#img_blub");
let btm=document.querySelector("#btn").value;

btn.addEventListener('click',function(){
  alert(typeof(btm))  
    if(btm=='On Blub')
    {
        imgs.src="./images/on-blub.jpg";
        btm.value='Off Blub';
    }else{
        imgs.src="./images/off-blub.png";
        btm.value='On Blub';  
    }
});