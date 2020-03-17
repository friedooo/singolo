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
})
