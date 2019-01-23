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
qwe = true;
let q = true;
elem = document.getElementById('rev_slider_32_1');
if (elem.addEventListener) {
    if ('onwheel' in document) {
        // IE9+, FF17+, Ch31+
        elem.addEventListener("wheel", onWheel);
    } else if ('onmousewheel' in document) {
        // устаревший вариант события
        elem.addEventListener("mousewheel", onWheel);
    } else {
        // Firefox < 17
        elem.addEventListener("MozMousePixelScroll", onWheel);
    }
} else { // IE8-
    elem.attachEvent("onmousewheel", onWheel);
}

function onWheel(e) {
    e = e || window.event;

    // wheelDelta не дает возможность узнать количество пикселей
    var delta = e.deltaY || e.detail || e.wheelDelta;
    console.log(e.deltaY + "//" + e.detail + "//" + e.wheelDelta);
    if (delta > 0)
        scrolls(true);
    else
        scrolls(false);
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
}

var initialPoint;
var finalPoint;
document.addEventListener('touchstart', function (event) {
    event.stopPropagation();
    initialPoint = event.changedTouches[0];
}, false);
document.addEventListener('touchend', function (event) {
    event.stopPropagation();
    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
    if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX) {
                console.log("СВАЙП ВЛЕВО"); /*СВАЙП ВЛЕВО*/
            } else {
                console.log("СВАЙП ВПРАВО"); /*СВАЙП ВПРАВО*/
            }
        } else {
            if (finalPoint.pageY < initialPoint.pageY) {
                console.log("СВАЙП Вверх");
                if(qwe)
                scrolls(true)
            } else {
                console.log("СВАЙП Вниз");
                if(qwe)
                scrolls(false);
            }
        }
    }
}, false);

function scrolls(napr) {
    console.log(revapi32.revcurrentslide());
    if (q) {
        if (napr) {
            if (revapi32.revcurrentslide() === 3) {
                if (slide + 1 !== slide_length) {
                    slide++;
                    work_slider(slide);
                    q = false;
                    setTimeout(function () {
                        q = true
                    }, 700);
                } else if (window.innerWidth <= 768) {
                    modal2(true);
                } else {
                    revapi32.revnext();
                    q = false;
                }
            } else {
                if (revapi32.revcurrentslide() !== 4) {
                    revapi32.revnext();
                    q = false
                }
            }
        } else {
            if (revapi32.revcurrentslide() === 3 && slide !== 0) {
                slide--;
                work_slider(slide);
                q = false;
                setTimeout(function () {
                    q = true
                }, 700);
            } else {
                if (revapi32.revcurrentslide() !== 1) {
                    revapi32.revprev();
                    q = false
                }
            }
        }
    }
}

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
    if (document.getElementById(object.id).classList.contains('visible')) {
        document.getElementById(object.id).classList.remove('visible');
    } else {
        for (let i = 1; i < 7; i++) {
            if (document.getElementById('service-card' + i).classList.contains('visible')) {
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
        q = false;
        qwe = false;
    } else {
        document.getElementById('modal').classList.remove('visible');
        setTimeout(function () {
            document.getElementById('modal').classList.remove('active');
        }, 500);
        q = true;
        qwe = true;
    }
}

function modal2(open) {
    if (open) {
        document.getElementById('modal2').classList.add('active');
        document.getElementById('modal2').classList.add('visible');
        q = false;
        qwe = false;
    } else {
        document.getElementById('modal2').classList.remove('visible');
        setTimeout(function () {
            document.getElementById('modal2').classList.remove('active');
        }, 500);
        q = true;
        qwe = true;
    }
}
