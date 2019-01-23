let revapi32,
    tpj;
(function () {
    if (!/loaded|interactive|complete/.test(document.readyState))
        document.addEventListener("DOMContentLoaded", onLoad);
    else
        onLoad();

    function onLoad() {
        if (tpj === undefined) {
            tpj = jQuery;
            if ("on" === "on") tpj.noConflict();
        }
        if (tpj("#rev_slider_32_1").revolution === undefined) {
            revslider_showDoubleJqueryError("#rev_slider_32_1");
        } else {
            revapi32 = tpj("#rev_slider_32_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "//xn----ctbfebbvt1a7am7h.xn--p1ai/slider/revslider/public/assets/js/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 20000,
                particles: {
                    startSlide: "first", endSlide: "last", zIndex: "1",
                    particles: {
                        number: {value: 35}, color: {value: "#ffffff"},
                        shape: {
                            type: "polygon", stroke: {width: 0, color: "#ffffff", opacity: 1},
                            image: {src: ""}
                        },
                        opacity: {
                            value: 0.15,
                            random: false,
                            min: 0.25,
                            anim: {enable: false, speed: 3, opacity_min: 0, sync: false}
                        },
                        size: {
                            value: 2,
                            random: true,
                            min: 0.5,
                            anim: {enable: true, speed: 5, size_min: 1, sync: false}
                        },
                        line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: true,
                            min_speed: 1,
                            straight: false,
                            out_mode: "out"
                        }
                    },
                    interactivity: {
                        events: {onhover: {enable: true, mode: "grab"}, onclick: {enable: false, mode: "bubble"}},
                        modes: {
                            grab: {distance: 100, line_linked: {opacity: 0.5}},
                            bubble: {distance: 100, size: 50, opacity: 0.4},
                            repulse: {distance: 20}
                        }
                    }
                },
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "vertical",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "off",
                        touchOnDesktop: "off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "vertical",
                        drag_block_vertical: false
                    },
                    tabs: {
                        style: "metis",
                        enable: true,
                        width: 250,
                        height: 45,
                        min_width: 0,
                        wrapper_padding: 0,
                        wrapper_color: "rgba(255,255,255,0)",
                        tmp: '<div class="tp-tab-wrapper"><div class="tp-tab-number">{{param1}}</div><div class="tp-tab-divider"></div><div class="tp-tab-title-mask"><div class="tp-tab-title">{{title}}</div></div></div>',
                        visibleAmount: 5,
                        hide_onmobile: true,
                        hide_onleave: false,
                        hide_delay: 200,
                        direction: "vertical",
                        span: true,
                        position: "inner",
                        space: 0,
                        h_align: "right",
                        v_align: "center",
                        h_offset: 0,
                        v_offset: 0
                    }
                },
                responsiveLevels: [1240, 1290, 900, 768],
                visibilityLevels: [1240, 1000, 900, 480],
                gridwidth: [1920, 1920, 1280, 768],
                gridheight: [1000, 1000, 960, 900],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 400,
                    speedbg: 0,
                    speedls: 0,
                    levels: [5, 9, 15, 20, 25, 30, 35, 40, 45, 46, 1, 2, 3, 4, 7, 55],
                },
                shadow: 0,
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar: "on",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        } /* END OF revapi call */
        let ExplodingLayersAddOn;
        if (typeof ExplodingLayersAddOn !== "undefined") ExplodingLayersAddOn(tpj, revapi32);
        RsTypewriterAddOn(tpj, revapi32);
        RsParticlesAddOn(revapi32);
        let sl = 0;
        revapi32.bind("revolution.slide.onchange", function (e, data) {

            q = true;
        });
        revapi32.bind("revolution.slide.onbeforeswap", function (e, data) {
            if (sl === 1) {
                document.querySelector('.mouse').classList.add("change");
            }
            sl = 1;
            if (data.nextslide["0"].id === 'slide3') {
                animation_slide3(slide);
            } else if (data.nextslide["0"].id === 'slide4') {
                animation_slide4();
            } else if (data.nextslide["0"].id === 'slide2') {
                animation_slide2();
            }
        });
        revapi32.bind("revolution.slide.onloaded", function (e) {
            setTimeout(function () {
                document.getElementById('preload').classList.add('hide');
            }, 100);
            setTimeout(function () {
                document.getElementById('preload').classList.add('none');
            }, 1000);
            sl = 2;
        });
    }

    /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */

function animation_slide2() {
    document.getElementById("service-main").classList.add('anim');
    document.getElementById("service-main").classList.add('anim2');
    setTimeout(function () {
        document.getElementById("service-main").classList.remove('anim');
    }, 400);
    setTimeout(function () {
        document.getElementById("service-main").classList.remove('anim2');
    }, 1200);
}

function animation_slide3(slides) {
    work_slider(slides)
}

function animation_slide4() {
    let masks_l = document.querySelector('.request-left').querySelectorAll('.request-mask');
    let masks_r = document.querySelector('.request-right').querySelectorAll('.request-mask');
    const delay = 140;
    let time = delay + 350;
    for (let i = 0; i < 2; i++) {
        if (masks_l[i].classList.contains('active'))
            masks_l[i].classList.remove('active');
        setTimeout(function () {
            masks_l[i].classList.add('active');
        }, time);
        time += delay;
    }
    for (let i = 0; i < masks_r.length; i++) {
        if (masks_r[i].classList.contains('active'))
            masks_r[i].classList.remove('active');
        setTimeout(function () {
            masks_r[i].classList.add('active');
        }, time);
        time += delay;
    }
    for (let i = 2; i < 5; i++) {
        if (masks_l[i].classList.contains('active'))
            masks_l[i].classList.remove('active');
        setTimeout(function () {
            masks_l[i].classList.add('active');
        }, time);
        time += delay;
    }
}

let slide = 1;
let slide_length = document.querySelector('.case-slider').getElementsByTagName("span").length;

function slider(left) {
    if (left) {
        if (slide === 1) {
            work_slider(slide_length);
            slide = slide_length
        } else {
            work_slider(slide - 1);
            slide--
        }
    } else {
        if (slide === slide_length) {
            work_slider(1);
            slide = 1
        } else {
            work_slider(slide + 1);
            slide++
        }
    }
}

function work_slider(next_slide) {
    for (let i = 1; i < slide_length + 1; i++) {
        if (document.getElementById("home" + i).classList.contains("active")) {
            document.getElementById("home" + i).classList.toggle("active");
            document.getElementById("mocap" + i).classList.toggle("active");
            document.getElementById("link" + i).classList.toggle("active");
        }
    }
    document.getElementById("home" + next_slide).classList.add("active");
    document.getElementById("mocap" + next_slide).classList.add("active");
    document.getElementById("link" + next_slide).classList.add("active");
}