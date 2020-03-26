// ====================== Header 

let navbar = document.getElementById('navId')


navbar.addEventListener('click', (event) => 
{
    navbar.querySelectorAll('li a').forEach(elem => elem.classList.remove('active'));
    if (event.target.tagName == 'A')
    event.target.classList.add('active');
});


document.addEventListener('scroll', () => {
    const curPos = window.scrollY;
    const sections = document.querySelectorAll('.for-scroll');

    //console.log(window.scrollY);
    sections.forEach((elem) => {
        if (window.scrollY < 600)
                    {
                        navbar.querySelectorAll('li a')[0].classList.add('active');
                        //console.log(1);
                    }
        if (elem.offsetTop - 100<= curPos && (elem.offsetTop + elem.offsetHeight) > curPos)
        {
            navbar.querySelectorAll('li a').forEach(elem1 => {
                elem1.classList.remove('active');
                if (elem.getAttribute('id') === elem1.getAttribute('href').substring(1))
                {
                    elem1.classList.add('active');
                }
            });
        }
        
    });

});
// ====================== Get a quote


let send = document.getElementById('submit');
let message = document.getElementsByClassName('message')[0];
let messageBlock = document.getElementsByClassName('message-block')[0];

send.addEventListener('click', () => {

    event.preventDefault();

message.classList.remove('hidden');
messageBlock.classList.remove('hidden');

let info = {
}

let name = document.getElementById('name').value;
if (/^\s*$/.test(name))
info.name = '';
else
info.name = name;

let email = document.getElementById('email').value;
if (/^\s*$/.test(email))
info.email = '';
else
info.email = email;

let subject = document.getElementById('subject').value;
if (/^\s*$/.test(subject))
info.subject = 'Без темы';
else
info.subject = `Тема: ${subject}`;

let description = document.getElementById('description').value;
if (/^\s*$/.test(description))
info.description = 'Без описания';
else
info.description = `Описание: ${description}` ;

document.getElementById('info').innerHTML = `Письмо отправлено </br> ${info.subject} </br>  ${info.description}`;
});


let closeBtn = document.getElementById('close-Btn');

closeBtn.addEventListener('click', () => {
    message.classList.add('hidden');
    messageBlock.classList.add('hidden');
});




/* ==================================== Portfolio switch  tabs */


let sortbar = document.getElementsByClassName('sortbar')[0];
sortbar.addEventListener('click', (event) => 
{

    if (event.target.parentNode.className != 'sortbar__active' && event.target.className != 'sortbar__active')
    {
        // Переключение картинок на одну влево

    let images = document.getElementsByClassName('portfolio__images')[0].children;
[images[0].src, images[1].src, images[2].src, 
images[3].src, images[4].src, images[5].src, 
images[6].src, images[7].src, images[8].src,
 images[9].src, images[10].src, images[11].src] 
 = 
[images[1].src, images[2].src, images[3].src, 
images[4].src, images[5].src, images[6].src, 
images[7].src, images[8].src, images[9].src, 
images[10].src, images[11].src, images[0].src];
    }

    //делегирование передачи класса и удаление класса с остальных элементов

    sortbar.querySelectorAll('li span').forEach(elem => {
        elem.classList.remove('sortbar__active');
    });
    sortbar.querySelectorAll('li button').forEach(elem => {
        elem.classList.remove('sortbar__active');
    });
    
        if (event.target.parentNode.tagName == 'BUTTON')
    event.target.parentNode.classList.add('sortbar__active');
    else if (event.target.parentNode.tagName == 'LI')
    event.target.classList.add('sortbar__active');
});


// ================== images interactive

let images = document.getElementsByClassName('portfolio__images')[0];

images.addEventListener('click', (event) =>{

    if (event.target.tagName == 'IMG')
    {
    if (event.target.className != 'img-interact')
    {
images.querySelectorAll('img').forEach(elem =>{
    elem.classList.remove('img-interact')
});
event.target.classList.add('img-interact');
    }
else
event.target.classList.remove('img-interact');
    }
});



// =============== slider


let buttons = document.querySelectorAll('.button');
let i = 0;

buttons[0].addEventListener('click', moveLeft);

buttons[0].addEventListener('click', switchColor);
buttons[1].addEventListener('click', switchColor);

function switchColor()
{
    let background = document.getElementsByClassName('slider')[0];
    background.style.transition = 'all 1s';
    background.classList.toggle('slider-color');
}


function moveLeft()
{
    let arr = document.querySelector('.handys').children;

    document.getElementById('qwe').style.transition = 'all 1s'; 
    document.getElementById('qwe').style.left = 100;
    arr[0].classList.add('move-left');

    // for (let elem of arr[0].children)
    // {
    //     elem.classList.add('move-left');
    //     window.setTimeout(() => elem.classList.add('stay-right'), 1000);
    // }

    
    
}

console.log(document.getElementsByClassName('slide1')[0].children);




