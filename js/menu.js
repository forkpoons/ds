//открытие меню//

const menuFive = document.querySelector('.menuFive');

function addClassFunFive() {
    document.getElementById("burger").classList.toggle("clickMenuFive");
    document.getElementById("menu").classList.toggle("active");
    document.getElementById("header-right").classList.toggle("active");
    document.getElementById("support").classList.toggle("active");
    document.getElementById("logo").classList.toggle("active");
}
menuFive.addEventListener('click', addClassFunFive);
document.querySelector('.menu-mask').addEventListener('click', addClassFunFive);

$('#service-card1').hover(function () { hov(1) }, function () { hov(0) });
$('#service-card2').hover(function () { hov(2) }, function () { hov(0) });
$('#service-card3').hover(function () { hov(3) }, function () { hov(0) });
$('#service-card4').hover(function () { hov(4) }, function () { hov(0) });
$('#service-card5').hover(function () { hov(5) }, function () { hov(0) });
$('#service-card6').hover(function () { hov(6) }, function () { hov(0) });
$('#service-card7').hover(function () { hov(7) }, function () { hov(0) });
$('#service-card8').hover(function () { hov(8) }, function () { hov(0) });
$('#service-card9').hover(function () { hov(9) }, function () { hov(0) });

function hov(a) {
    if (a !== 0) {
        for (let i = 1; i < 7; i++) {
            document.querySelector('#service-card' + i).classList.add('active');
            document.querySelector('#service-img' + i).classList.add('active');
        }
        document.querySelector('#service-card' + a).classList.remove('active');
        document.querySelector('#service-img' + a).classList.remove('active');
    } else {
        for (let i = 1; i < 7; i++) {
            document.querySelector('#service-card' + i).classList.remove('active');
        }
    }
}

function service(object) {
    if (document.getElementById(object.id).classList.contains('visible')){
        document.getElementById(object.id).classList.remove('visible');
    }
    else {
        for(let i = 1; i < 10; i++){
            if(document.getElementById('service-card'+ i).classList.contains('visible')){

                document.getElementById('service-card' + i).classList.remove('visible');
            }
        }
        document.getElementById(object.id).classList.add('visible');
    }
}
function modal(open) {
    if (open) {
        document.getElementById('modal').classList.add('active');
        document.getElementById('modal').classList.add('visible');
    }
    else {
        document.getElementById('modal').classList.remove('visible');
        setTimeout(function () { document.getElementById('modal').classList.remove('active'); }, 500);
    }
}
