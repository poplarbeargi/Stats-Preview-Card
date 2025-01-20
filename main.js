document.addEventListener('DOMContentLoaded', function () {
    const changeImg = document.querySelector('.responsive-img');

    function load() {
        if (window.innerWidth >= 768) {
            changeImg.src = 'images/image-header-desktop.jpg';
        }

        else {
            changeImg.src = 'images/image-header-mobile.jpg';
        }
    }

    load();
});