const start=document.querySelector('#start')
const stop=document.querySelector('#stop')

const randomColor=()=>{
    const id ="0123456789ABCDEF";
    let hex ='#';
    for (let i = 0; i < 6; i++) {
        hex+=id[Math.floor(Math.random()*16)]; 
    }
    return hex;
}

let changing;
const ChangeBGColor=()=>{
    let startChangingColor=()=>{
        document.body.style.backgroundColor=randomColor();
    }

    if(!changing){
        changing=setInterval(startChangingColor,1000);
    }  
}
const stopChangingBGColor=()=>{
    clearInterval(changing);
    changing=null;
    if(document.body.style.backgroundColor === 'rgb(0, 0, 0)' || document.body.style.backgroundColor === '#000000'){
        displayWinnerText();
    }
}
const displayWinnerText = () => {
    let winnerText = document.getElementById('winnerText');
    if (!winnerText) {
        winnerText = document.createElement('div');
        winnerText.id = 'winnerText';
        winnerText.textContent = 'Winner!';
        document.body.appendChild(winnerText);
    }
    winnerText.style.display = 'block';
}

start.addEventListener('click',ChangeBGColor)
stop.addEventListener('click',stopChangingBGColor)