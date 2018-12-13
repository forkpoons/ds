let revapi32,
    tpj;
(function() {
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();

    function onLoad() {
        if (tpj===undefined) { tpj = jQuery; if("on" === "on") tpj.noConflict();}
        if(tpj("#rev_slider_32_1").revolution === undefined){
            revslider_showDoubleJqueryError("#rev_slider_32_1");
        }else{
            revapi32 = tpj("#rev_slider_32_1").show().revolution({
                sliderType:"standard",
                jsFileLocation:"//xn----ctbfebbvt1a7am7h.xn--p1ai/slider/revslider/public/assets/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:20000,
                particles: {startSlide: "first", endSlide: "last", zIndex: "1",
                    particles: {
                        number: {value: 35}, color: {value: "#ffffff"},
                        shape: {
                            type: "polygon", stroke: {width: 0, color: "#ffffff", opacity: 1},
                            image: {src: ""}
                        },
                        opacity: {value: 0.15, random: false, min: 0.25, anim: {enable: false, speed: 3, opacity_min: 0, sync: false}},
                        size: {value: 2, random: true, min: 0.5, anim: {enable: true, speed: 5, size_min: 1, sync: false}},
                        line_linked: {enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
                        move: {enable: true, speed: 1, direction: "none", random: true, min_speed: 1, straight: false, out_mode: "out"}},
                    interactivity: {
                        events: {onhover: {enable: true, mode: "grab"}, onclick: {enable: false, mode: "bubble"}},
                        modes: {grab: {distance: 100, line_linked: {opacity: 0.5}}, bubble: {distance: 100, size: 50, opacity: 0.4}, repulse: {distance: 20}}
                    }
                },
                navigation: {
                    keyboardNavigation:"on",
                    keyboard_direction: "vertical",
                    mouseScrollNavigation:"carousel",
                    mouseScrollReverse:"default",
                    onHoverStop:"on",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "vertical",
                        drag_block_vertical: false
                    }
                    ,
                    tabs: {
                        style:"metis",
                        enable:true,
                        width:250,
                        height:45,
                        min_width:0,
                        wrapper_padding:0,
                        wrapper_color:"rgba(255,255,255,0)",
                        tmp:'<div class="tp-tab-wrapper"><div class="tp-tab-number">{{param1}}</div><div class="tp-tab-divider"></div><div class="tp-tab-title-mask"><div class="tp-tab-title">{{title}}</div></div></div>',
                        visibleAmount: 5,
                        hide_onmobile: true,
                        hide_onleave:false,
                        hide_delay:200,
                        direction:"vertical",
                        span:true,
                        position:"inner",
                        space:0,
                        h_align:"right",
                        v_align:"center",
                        h_offset:0,
                        v_offset:0
                    }
                },
                responsiveLevels:[1240,1240,900,768],
                visibilityLevels:[1240,1000,900,480],
                gridwidth:[1920,1920,1280,768],
                gridheight:[1000,1000,960,900],
                lazyType:"none",
                parallax: {
                    type:"mouse",
                    origo:"slidercenter",
                    speed:400,
                    speedbg:0,
                    speedls:0,
                    levels:[5,9,15,20,25,30,35,40,45,46,1,2,3,4,7,55],
                },
                shadow:0,
                spinner:"spinner0",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        } /* END OF revapi call */
        let ExplodingLayersAddOn;
        if(typeof ExplodingLayersAddOn !== "undefined") ExplodingLayersAddOn(tpj, revapi32);
        RsTypewriterAddOn(tpj, revapi32);
        RsParticlesAddOn(revapi32);
        let sl = 0;
        revapi32.bind("revolution.slide.onbeforeswap", function (e, data) {
            if(sl === 1)
            document.querySelector('.mouse').classList.add("change");
            sl = 1;
        });
    }
    /* END OF ON LOAD FUNCTION */

}()); /* END OF WRAPPING FUNCTION */





let slide = 1;
let slide_length = document.querySelector('.case-slider').getElementsByTagName("span").length;

function slider(a) {
    document.getElementById("home" + slide).classList.toggle("active");
    document.getElementById("mocap" + slide).classList.toggle("active");
    document.getElementById("link" + slide).classList.toggle("active");
    if (a){
        if(slide === 1){
            document.getElementById("home" + slide_length).classList.toggle("active");
            document.getElementById("mocap" + slide_length).classList.toggle("active");
            document.getElementById("link" + slide_length).classList.toggle("active");
            slide = slide_length
        }
        else {
            document.getElementById("home"+(slide - 1)).classList.toggle("active");
            document.getElementById("mocap"+(slide - 1)).classList.toggle("active");
            document.getElementById("link" +(slide - 1)).classList.toggle("active");
            slide--
        }
    }
    else {
        if(slide === slide_length){
            document.getElementById("home1").classList.toggle("active");
            document.getElementById("mocap1").classList.toggle("active");
            document.getElementById("link1").classList.toggle("active");
            slide = 1
        }
        else {
            document.getElementById("home" + (slide + 1)).classList.toggle("active");
            document.getElementById("mocap" + (slide + 1)).classList.toggle("active");
            document.getElementById("link" + (slide + 1)).classList.toggle("active");
            slide++
        }
    }
}
