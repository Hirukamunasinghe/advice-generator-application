const myText = document.querySelector('.text');
const adviceID = document.querySelector('.advice-id');
const button = document.querySelector('.generate-button');
const url = "https://api.adviceslip.com/advice"

const getAdvice = async() =>{
    const res = await fetch(url);
    const {slip: {id, advice}} = await res.json();
    adviceID.textContent = id;
    myText.textContent = advice;
}

button.addEventListener('click',()=>{
    getAdvice();
})