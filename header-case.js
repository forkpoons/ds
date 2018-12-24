$(document).on('scroll', function () {
    let position = jQuery(document).scrollTop();
    let span = document.getElementById('burger').getElementsByTagName('span');
    let path = document.getElementById('logo').getElementsByTagName('path');
    if(position > 500){
        document.getElementById('header').style.background = 'rgba(255,255,255,1)';
        document.getElementById('header').style.boxShadow = '0px 3px 4px rgba(0, 0, 0, 0.2)';
        if (document.body.clientWidth > 768)
            document.getElementById('header').style.paddingTop = '33px';
        else
            document.getElementById('header').style.paddingTop = '16px';
        document.getElementById('logo').style.color = 'rgb(85,85,85)';
        document.getElementById('tel').style.color = 'rgb(85,85,85)';
        span[0].style.backgroundColor = 'rgb(85,85,85)';
        span[1].style.backgroundColor = 'rgb(85,85,85)';
        span[2].style.backgroundColor = 'rgb(85,85,85)';
        path[0].style.fill = 'rgb(85,85,85)';
        path[1].style.fill = 'rgb(85,85,85)';
        path[2].style.fill = 'rgb(85,85,85)';
    }
    else {
        let color = 'rgb(' +(255-(position/500*170)) +',' +(255-(position/500*170)) +',' +(255-(position/500*170)) +')';
        document.getElementById('header').style.background = 'rgba(255,255,255,' + (position / 500) + ')';
        document.getElementById('header').style.boxShadow = '0px ' + (position/500*3) + 'px ' + (position/500*4) + 'px rgba(0, 0, 0, 0.2)';
        if (document.body.clientWidth > 768)
            document.getElementById('header').style.paddingTop = (50 - (position/500*17)) + 'px';
        else
            document.getElementById('header').style.paddingTop = '16px';
        document.getElementById('logo').style.color = color;
        document.getElementById('tel').style.color = color;
        span[0].style.backgroundColor = color;
        span[1].style.backgroundColor = color;
        span[2].style.backgroundColor = color;
        path[0].style.fill = color;
        path[1].style.fill = color;
        path[2].style.fill = color;

    }
});