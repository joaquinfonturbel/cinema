document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add('loaded');
});

const proyectos = document.querySelector('.proyectos');

        function isVisible(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        