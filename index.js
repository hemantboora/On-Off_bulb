let count=0;
const img=document.getElementById("img_blub");
const btn=document.getElementById("btn");
const mainDiv=document.getElementById("container");
const showText=document.getElementById("showText");
function toggle(){
    if(count%2==0)
    {
        img.src="./images/on-blub.jpg";
        btn.innerText='Off Blub';
        mainDiv.style.backgroundColor='rgb(240,245,220)';
        showText.innerText='Click the button to turn off the bulb (bhai ab off be kr de "Save Electricity")';
        count++;
    }else{
        img.src="./images/off-blub.png";
        btn.innerText='On Blub';  
        mainDiv.style.backgroundColor='rgb(87,35,35)';
        showText.innerText="Click the button to turn on the bulb";
        count++;
    }
    // count++;
}