var sidebar = document.querySelector('.sidebar-mobile');
var cont = 0;
function mostraMenu() {
    cont += 1;

    if (cont == 1){
        sidebar.style.display = 'flex';
    }
    else if (cont == 2) {
        sidebar.style.display = 'none';
        document.body.style.opacity = '1';
        cont = 0;
    }
}

