const noturno = document.querySelector('#modo-noturno');
const corpo = document.querySelector('body');

noturno.addEventListener('click', () => {

    const modo = noturno.checked ? 'dark' : 'light';
    corpo.setAttribute('data-bs-theme', modo)
})


