// ====================== Header 

let navbar = document.getElementById('navId')


navbar.addEventListener('click', (event) => 
{
    navbar.querySelectorAll('li a').forEach(elem => elem.classList.remove('active'));
    if (event.target.tagName == 'A')
    event.target.classList.add('active');
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



