document.addEventListener('DOMContentLoaded', () => {
    // Příklad, jak přidat interaktivitu
    const projectLink = document.querySelector('.project-link');

    projectLink.addEventListener('click', (event) => {
        console.log('Kliknuto na odkaz projektu!');
        // Zde bys mohl přidat nějakou animaci nebo další logiku
    });
});