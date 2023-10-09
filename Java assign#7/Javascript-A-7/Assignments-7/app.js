// Q4
const scrollToTopLink = document.getElementById('scroll-to-top-link');

scrollToTopLink.addEventListener('click', () => {
  
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        
    });
});
// Q5
const playSoundLink = document.getElementById('play-sound-link');
var audio = document.getElementById('myAudio');

playSoundLink.addEventListener('click', () => {
    
    if (audio.paused || audio.ended) {
        audio.play(); 
        
    } else {
        audio.pause(); 
        
        audio.currentTime = 0; 
        
    }
});
//  Q7
var alertButton = document.getElementById('alert-button');

alertButton.addEventListener('click', () => {
    alert('Hello, this is an alert message!');
});
// Q8
const hoverButton = document.getElementById('hover-button');

hoverButton.addEventListener('mouseover', () => {
    hoverButton.style.backgroundColor = 'red';
});

hoverButton.addEventListener('mouseout', () => {
    hoverButton.style.backgroundColor = 'blue';
});
// Q9

var playSoundButton = document.getElementById('play-sound-button');
var audio = document.getElementById('myAudio');

playSoundButton.addEventListener('click', () => {
    if (audio.paused || audio.ended) {
        audio.play(); 
    } else {
        audio.pause(); 
        audio.currentTime = 0; 
        
    }
});
// Q10
var mouseOverElement = document.getElementById('mouse-over-element');

mouseOverElement.addEventListener('mouseover', () => {
    alert('Mouse is over the element!');
});
// Q11
const elementToHide = document.getElementById('element-to-hide');

elementToHide.addEventListener('mouseout', () => {
    elementToHide.style.display = 'none';
});
// Q12
document.getElementById('open-window-link').addEventListener('click', () => {
    
    const windowWidth = window.innerWidth / 2; 
    const windowHeight = window.innerHeight / 2;

    
    const newWindow = window.open('', '_blank', `width=${windowWidth},height=${windowHeight}`);

    
    newWindow.document.write(`
        
    `);

   
    newWindow.focus();
});

// Chapter No 49, 50 (Reading and Setting field values)
// Q1
document.getElementById('submit-button').addEventListener('click', () => {
    var userInput = document.getElementById('user-input').value;
    console.log('User Input:', userInput);
});
// Q2
document.getElementById('submit-button').addEventListener('click', () => {
    const checkbox = document.getElementById('checkbox-input');
    const isChecked = checkbox.checked;
    console.log('Checkbox is checked:', isChecked);
});
// Q3
document.getElementById('submit-button').addEventListener('click', () => {

    const selectBox = document.getElementById('select-box');

    const selectedValue = selectBox.value;
    console.log('Selected Value:', selectedValue);
});
// Q5
document.getElementById('submit-button').addEventListener('click', () => {
    const marriedYes = document.getElementById('married-yes').checked;
    const statusValue = document.getElementById('status-value');

    if (!marriedYes) {
        statusValue.textContent = 'available';
    } else {
        statusValue.textContent = 'not available';
    }
});
// Q6
document.getElementById('fill-button').addEventListener('click', () => {
    const inputElement = document.getElementById('my-input');
    const defaultValue = 'Default Text'; 

    if (inputElement.value.trim() === '') {
        inputElement.value = defaultValue;
    }
});
