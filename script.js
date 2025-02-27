function showPage(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block'; 
    }
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const pageId = link.getAttribute('href').substring(1); 
        showPage(pageId); 
    });
});

showPage('home');

document.getElementById('homeLink').addEventListener('click', () => {
    window.location.href = 'index.html'; 
});

const storyBoxes = document.querySelectorAll('.story, .square-box');

function checkScroll() {
    storyBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        if (boxTop < window.innerHeight && boxBottom > 0) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);

checkScroll();

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
});

function searchStories() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const stories = document.querySelectorAll('.story');

    stories.forEach(story => {
        const title = story.querySelector('h2').textContent.toLowerCase();
        const content = story.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            story.style.display = 'block';
        } else {
            story.style.display = 'none';
        }
    });
}
function checkScroll() {
    console.log('Scroll event triggered'); 
    storyBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const boxBottom = box.getBoundingClientRect().bottom;

        if (boxTop < window.innerHeight && boxBottom > 0) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
}
const contentLinks = document.querySelectorAll('.content-link');


contentLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 

        const modalId = link.getAttribute('data-modal');

        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
        }
    });
});

const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
    const closeBtn = modal.querySelector('.close');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

const modalRegular = document.getElementById('modal-regular');
const closeBtnRegular = modalRegular.querySelector('.close');

document.querySelector('.read-more-regular').addEventListener('click', (e) => {
    e.preventDefault(); 
    modalRegular.style.display = 'block'; 
});

closeBtnRegular.addEventListener('click', () => {
    modalRegular.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modalRegular) {
        modalRegular.style.display = 'none'; 
    }
});

const modalPuppeteer = document.getElementById('modal-puppeteer');
const closeBtnPuppeteer = modalPuppeteer.querySelector('.close');

document.querySelector('.read-more-puppeteer').addEventListener('click', (e) => {
    e.preventDefault(); 
    modalPuppeteer.style.display = 'block'; 
});

closeBtnPuppeteer.addEventListener('click', () => {
    modalPuppeteer.style.display = 'none'; 
});

window.addEventListener('click', (e) => {
    if (e.target === modalPuppeteer) {
        modalPuppeteer.style.display = 'none'; 
    }
});

const modalPorcelain = document.getElementById('modal-porcelain');
const closeBtnPorcelain = modalPorcelain.querySelector('.close');

document.querySelector('.read-more-porcelain').addEventListener('click', (e) => {
    e.preventDefault(); 
    modalPorcelain.style.display = 'block'; 
});

closeBtnPorcelain.addEventListener('click', () => {
    modalPorcelain.style.display = 'none'; 
});

window.addEventListener('click', (e) => {
    if (e.target === modalPorcelain) {
        modalPorcelain.style.display = 'none'; 
    }
});

const modalKnock = document.getElementById('modal-knock');
const closeBtnKnock = modalKnock.querySelector('.close');

document.querySelector('.read-more-knock').addEventListener('click', (e) => {
    e.preventDefault(); 
    modalKnock.style.display = 'block'; 
});

closeBtnKnock.addEventListener('click', () => {
    modalKnock.style.display = 'none'; 
});

window.addEventListener('click', (e) => {
    if (e.target === modalKnock) {
        modalKnock.style.display = 'none'; 
    }
});

const modalPigsty = document.getElementById('modal-pigsty');
const closeBtnPigsty = modalPigsty.querySelector('.close');

document.querySelector('.read-more-pigsty').addEventListener('click', (e) => {
    e.preventDefault(); 
    modalPigsty.style.display = 'block'; 
});

closeBtnPigsty.addEventListener('click', () => {
    modalPigsty.style.display = 'none'; 
});

window.addEventListener('click', (e) => {
    if (e.target === modalPigsty) {
        modalPigsty.style.display = 'none'; 
    }
});

const modalFrame = document.getElementById('modal-frame');
const closeBtnFrame = modalFrame.querySelector('.close');

document.querySelector('.read-more-frame').addEventListener('click', (e) => {
    e.preventDefault(); 
    modalFrame.style.display = 'block'; 
});

closeBtnFrame.addEventListener('click', () => {
    modalFrame.style.display = 'none'; 
});

window.addEventListener('click', (e) => {
    if (e.target === modalFrame) {
        modalFrame.style.display = 'none'; 
    }
});

const modalCrazy = document.getElementById('modal-crazy');
const closeBtnCrazy = modalCrazy.querySelector('.close');

document.querySelector('.read-more-crazy').addEventListener('click', (e) => {
    e.preventDefault(); 
    modalCrazy.style.display = 'block'; 
});

closeBtnCrazy.addEventListener('click', () => {
    modalCrazy.style.display = 'none'; 
});

window.addEventListener('click', (e) => {
    if (e.target === modalCrazy) {
        modalCrazy.style.display = 'none'; 
    }
});

const modalPress = document.getElementById('modal-press');
const closeBtnPress = modalPress.querySelector('.close');
const fullscreenImage = document.getElementById('fullscreen-image'); 

let timeoutId; 

function openModalPress() {
    modalPress.style.display = 'block'; 
    timeoutId = setTimeout(() => {
        fullscreenImage.style.display = 'block';
        document.body.style.overflow = 'hidden'; 
    }, 5000); 
}

function closeModalPress() {
    modalPress.style.display = 'none'; 
    clearTimeout(timeoutId); 
}

document.querySelector('.press').addEventListener('click', (e) => {
    e.preventDefault(); 
    openModalPress(); 
});

closeBtnPress.addEventListener('click', () => {
    closeModalPress(); 
});

window.addEventListener('click', (e) => {
    if (e.target === modalPress) {
        closeModalPress(); 
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const welcomeModal = document.getElementById('welcome-modal');
    const closeBtnwelcome = welcomeModal.querySelector('.close');

    welcomeModal.style.display = 'block';

    closeBtnwelcome.addEventListener('click', () => {
        welcomeModal.style.display = 'none'; 
    });
});