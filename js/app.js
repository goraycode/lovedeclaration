const hero = document.querySelector('.hero');
const form = document.querySelector('.form');
const title = document.querySelector('.form__title');
const label = document.querySelector('.label');
const opt = document.querySelector('#opt');


function effects() {
    const value = this.checked;

    if (value) {
        hero.classList.add('hero__active');
        form.className = 'form__active';
        this.classList.add('active');
        title.textContent = 'Te amo'
        label.classList.add('hidden');
    } else {
        hero.classList.remove('hero__active');
        form.className = 'form';
        this.classList.remove('active');
        title.textContent = '¿Quieres ser mi novia?'
        label.classList.remove('hidden');
    }
}



opt.addEventListener('click', effects);