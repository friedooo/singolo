let navbar = document.getElementById('navId')

console.log(navbar);

navbar.addEventListener('click', (event) => 
{
    navbar.querySelectorAll('li a').forEach(elem => elem.classList.remove('active'));
    if (event.target.tagName == 'A')
    event.target.classList.add('active');
});

