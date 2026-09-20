/* ============================================
   JS - Menu mobile (TJSP 2027)
   ============================================ */
document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');
    var toggle = document.querySelector('.menu-toggle');

    if (!nav || !toggle) {
        return;
    }

    function setIcon(aberto) {
        toggle.innerHTML = aberto ? '\u2715' : '\u2630';
        toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    }

    toggle.addEventListener('click', function (event) {
        event.stopPropagation();
        var aberto = nav.classList.toggle('menu-aberto');
        setIcon(aberto);
    });

    /* Fecha o menu ao tocar em um link */
    nav.querySelectorAll('.nav-item a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (nav.classList.contains('menu-aberto')) {
                nav.classList.remove('menu-aberto');
                setIcon(false);
            }
        });
    });

    /* Fecha ao tocar fora do menu */
    document.addEventListener('click', function (event) {
        if (nav.classList.contains('menu-aberto') && !nav.contains(event.target)) {
            nav.classList.remove('menu-aberto');
            setIcon(false);
        }
    });
});