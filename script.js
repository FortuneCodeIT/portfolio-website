function showSidebar() {
    const sidebar = document.querySelector ('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector ('.sidebar');
    sidebar.style.display = 'none';

} 







const phrases = [
    "Frontend Developer",
    "back end developer"
  
];

const typingText = document.getElementById('typing-text');
const phraseIndicator = document.getElementById('phrase-indicator');

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let ispaused = false;
let typingSpeed = 100;
let deletingSpeed = 60;
let pauseBetweenPhrases = 1500;


/*-------visibility of the dot ----------*/
phrases.forEach((phrase, index) => {
    /*
    const dot = document.createElement('div');
    dot.className = 'phrase-dot';
    if (index === 0) {
        dot.classList.add('active');
    }
    phraseIndicator.appendChild(dot);
    */
});



function updateActiveDot() {
    const dots = document.querySelectorAll('.phrase-dot');
    dots.forEach((dot, index) => {
        if (index === currentPhraseIndex) {
            dot.classList.add('active');
       } else {
        dot.classList.remove('active');
       }

    });
}

function typeText() {
    if (ispaused) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting && currentCharIndex <= currentPhrase.length) {
        typingText.innerHTML = currentPhrase.substring(0, currentCharIndex) + '<span class="cursor"></span>';
        currentCharIndex++;
        setTimeout(typeText, typingSpeed);
    }
    else if (isDeleting && currentCharIndex >= 0) {
        typingText.innerHTML = currentPhrase.substring(0, currentCharIndex) + '<span class="cursor"></span>';
        currentCharIndex--;
        setTimeout(typeText, deletingSpeed);
    }
    else if (!isDeleting && currentCharIndex > currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeText, pauseBetweenPhrases);
    }
    else if (isDeleting && currentCharIndex < 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        updateActiveDot();
        setTimeout(typeText, 500);    
    }
}

setTimeout(typeText, 1000);


/*

function innerNav() {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAtrribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement) {
/*
            const navbarHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
*/
            /*
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start';
            });
        }
    });
});
}

*/



const phrases1 = [
    "Frontend Developer",
    "back end developer"
  
];

const typingText1 = document.getElementById('typing-text1');


let currentPhraseIndex1 = 0;
let currentCharIndex1 = 0;
let isDeleting1 = false;
let ispaused1 = false;
let typingSpeed1 = 100;
let deletingSpeed1 = 60;
let pauseBetweenPhrases1 = 1500;


/*-------visibility of the dot ----------*/
phrases1.forEach((phrase1, index) => {
    /*
    const dot = document.createElement('div');
    dot.className = 'phrase-dot';
    if (index === 0) {
        dot.classList.add('active');
    }
    phraseIndicator.appendChild(dot);
    */
});



function updateActiveDot1() {
    const dots1 = document.querySelectorAll('.phrase-dot1');
    dots1.forEach((dot1, index) => {
        if (index === currentPhraseIndex1) {
            dot1.classList.add('active');
       } else {
        dot1.classList.remove('active');
       }

    });
}

function typeText1() {
    if (ispaused) return;

    const currentPhrase1 = phrases[currentPhraseIndex1];

    if (!isDeleting1 && currentCharIndex1 <= currentPhrase1.length) {
        typingText1.innerHTML = currentPhrase1.substring(0, currentCharIndex1) + '<span class="cursor"></span>';
        currentCharIndex1++;
        setTimeout(typeText1, typingSpeed);
    }
    else if (isDeleting1 && currentCharIndex1 >= 0) {
        typingText1.innerHTML = currentPhrase1.substring(0, currentCharIndex1) + '<span class="cursor"></span>';
        currentCharIndex1--;
        setTimeout(typeText1, deletingSpeed1);
    }
    else if (!isDeleting1 && currentCharIndex1 > currentPhrase1.length) {
        isDeleting1 = true;
        setTimeout(typeText1, pauseBetweenPhrases1);
    }
    else if (isDeleting1 && currentCharIndex1 < 0) {
        isDeleting1 = false;
        currentPhraseIndex1 = (currentPhraseIndex1 + 1) % phrases1.length;
        updateActiveDot1();
        setTimeout(typeText1, 500);    
    }
}

setTimeout(typeText1, 1000);