let nav = document.getElementById('navbarid');
let braga = document.getElementById('braga');

window.onscroll = function () { navScroll() };

function navScroll() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        braga.style.display = 'block';
        nav.style.position = "fixed";
        nav.style.top = '0';
    } else {
        nav.style.position = "relative";
        braga.style.display = 'none';
    }
}

const toggleNavBar = document.getElementById('toggle-nav-drop');
const links = document.getElementById('navlinks');

toggleNavBar.addEventListener('click', () => {
    links.classList.toggle('toggle-active');
})

$("input:checkbox").click(function () {
    if ($(this).is(":checked") === true) {
        var group = "input:checkbox[name='" + $(this).prop("name") + "']";
        $(group).prop("checked", false);
        $(this).prop("checked", true);
    } else {
        $(this).is(":checked", false);
    }
});
