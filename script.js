let navbar = document.getElementById('navId')

console.log(navbar);

navbar.addEventListener('click', (event) => 
{
    navbar.querySelectorAll('li').forEach(elem => elem.classList.remove('active'));
    navbar.querySelectorAll('li a').forEach(elem => elem.classList.remove('active'));
    event.target.classList.add('active');
});

