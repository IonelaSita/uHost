var backdrop = document.querySelector('.backdrop');
var circle1 = document.querySelector('.circle-1');
var circle2 = document.querySelector('.circle-2');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal-action-negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var mobileNavCircle1 = document.querySelector('.mobile-nav-circle-1');
var mobileNavCircle2 = document.querySelector('.mobile-nav-circle-2');
var mobileNavCircle3 = document.querySelector('.mobile-nav-circle-3');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.transform = 'translateY(0)';
        backdrop.style.display = 'block';
        circle1.style.transform = 'translateY(0)';
        circle2.style.transform = 'translateY(0)';
    });
}

if (noButton) {
    noButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', closeMobileNav);

function closeMobileNav() {
    backdrop.style.display = 'none';
    mobileNav.style.transform = 'translateX(-100%)';
    mobileNavCircle1.style.transform = 'translateX(-1000%)';
    mobileNavCircle2.style.transform = 'translateX(-1000%)';
    mobileNavCircle3.style.transform = 'translateX(-1000%)';
}

backdrop.addEventListener('click', closeModal);

function closeModal() {
    modal.style.transform = 'translateY(-300%)';
    backdrop.style.display = 'none';
    circle1.style.transform = 'translateY(-1000%)';
    circle2.style.transform = 'translateY(-1000%)';
}


    toggleButton.addEventListener('click', function() {
        backdrop.style.display = 'block';
        mobileNav.style.transform = 'translateX(0)';
        mobileNavCircle1.style.transform = 'translateX(0)';
        mobileNavCircle2.style.transform = 'translateX(0)';
        mobileNavCircle3.style.transform = 'translateX(0)';
    });


