const d = document,
    btn = d.querySelectorAll('.share__btn--container'),
    block = d.querySelector('.share'),
    credits = d.querySelector('.credits');

function toggleBar() {
    block.classList.toggle('active');
    credits.classList.toggle('active');
}

btn.forEach (btn => btn.addEventListener('click', toggleBar));