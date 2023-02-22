import {preloadFonts} from './utils';
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

const wrapElements = (elems, wrapType, wrapClass) => {
    elems.forEach(char => {
        const wrapEl = document.createElement(wrapType);
        wrapEl.classList = wrapClass;
        char.parentNode.appendChild(wrapEl);
        wrapEl.appendChild(char);
    });
}

Splitting();

const fx1Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect1]')];
const fx2Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect2]')];
const fx3Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect3]')];
const fx4Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect4]')];
const fx5Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect5]')];
const fx6Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect6]')];
const fx7Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect7]')];
const fx8Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect8]')];
const fx9Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect9]')];
const fx10Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect10]')];
const fx11Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect11]')];
const fx12Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect12]')];
const fx13Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect13]')];
const fx14Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect14]')];
const fx15Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect15]')];

// Lenis smooth scrolling
let lenis;

// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {
	
    lenis = new Lenis({
		lerp: 0.2,
		smooth: true
	});

    lenis.on('scroll', () => ScrollTrigger.update());

	const scrollFn = (time) => {
		lenis.raf(time);
		requestAnimationFrame(scrollFn);
	};
	
    requestAnimationFrame(scrollFn);

};

// GSAP Scroll Triggers
const scroll = () => {
    
    fx1Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            scale: 0.6,
            rotationZ: () => gsap.utils.random(-20,20)
        },
        {
            ease: 'power4',
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: 0.4,
            scrollTrigger: {
                trigger: title,
                start: 'center+=20% bottom',
                end: '+=50%',
                scrub: true
            },
        });

    });
    
    fx2Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            yPercent: 120, 
            scaleY: 2.3, 
            scaleX: 0.7, 
            transformOrigin: '50% 0%' 
        }, 
        {
            duration: 1,
            ease: 'back.inOut(2)',
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: 0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom+=50%',
                end: 'bottom top+=40%',
                scrub: true
            }
        });

    });

    fx3Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars,  { 
            'will-change': 'transform', 
            transformOrigin: '50% 0%', 
            scaleY: 0
        },
        {
            ease: 'back',
            opacity: 1,
            scaleY: 1,
            yPercent: 0,
            stagger: 0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom-=5%',
                end: 'top top-=20%',
                scrub: true
            }
        });

    });

    fx4Titles.forEach(title => {
        
        const words = title.querySelectorAll('.word');
        
        for (const word of words) {
            
            const chars = word.querySelectorAll('.char');

            gsap.fromTo(chars,  { 
                'will-change': 'opacity, transform', 
                x: (position,_,arr) => 150*(position-arr.length/2) 
            },
            {
                ease: 'power1.inOut',
                x: 0,
                stagger: {
                    grid: 'auto',
                    from: 'center'
                },
                scrollTrigger: {
                    trigger: word,
                    start: 'center bottom+=30%',
                    end: 'top top+=15%',
                    scrub: true,
                }
            });

        };

    });

    fx5Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            xPercent: () => gsap.utils.random(-200,200), 
            yPercent: () => gsap.utils.random(-150,150) 
        },
        {
            ease: 'power1.inOut',
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            stagger: { each: 0.05, grid: 'auto', from: 'random'},
            scrollTrigger: {
                trigger: title,
                start: 'center bottom+=10%',
                end: 'bottom center',
                scrub: 0.9
            }
        });

    });

    fx6Titles.forEach(title => {
        
        const words = title.querySelectorAll('.word');
        
        for (const word of words) {

            const chars = word.querySelectorAll('.char');

            chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

            gsap.fromTo(chars, { 
                'will-change': 'opacity, transform', 
                opacity: 0, 
                rotationX: -90,
                yPercent: 50
            },
            {
                ease: 'power1.inOut',
                opacity: 1,
                rotationX: 0,
                yPercent: 0,
                stagger: {
                    each: 0.03,
                    from: 0
                },
                scrollTrigger: {
                    trigger: word,
                    start: 'center bottom+=40%',
                    end: 'bottom center-=30%',
                    scrub: 0.9
                }
            });

        }

    });

    fx7Titles.forEach(title => {
        
        const words = title.querySelectorAll('.word');

        for (const word of words) {

            const chars = word.querySelectorAll('.char');

            chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

            gsap.fromTo(chars, { 
                'will-change': 'opacity, transform', 
                transformOrigin: '100% 50%',
                opacity: 0, 
                rotationY: -90,
                z: -300
            },
            {
                ease: 'expo',
                opacity: 1,
                rotationY: 0,
                z: 0,
                stagger: { each: 0.06, from: 'end'},
                scrollTrigger: {
                    trigger: word,
                    start: 'bottom bottom+=20%',
                    end: 'bottom top',
                    scrub: 1
                }
            });

        }

    });

    const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];
    fx8Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        chars.forEach((char, position) => {
            let initialHTML = char.innerHTML;
            
            gsap.fromTo(char, {
                opacity: 0
            },
            {
                duration: 0.03,
                innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
                repeat: 1,
                repeatRefresh: true,
                opacity: 1,
                repeatDelay: 0.03,
                delay: (position+1)*0.18,
                onComplete: () => gsap.set(char, {innerHTML: initialHTML, delay: 0.03}),
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom center',
                    toggleActions: "play resume resume reset",
                    onEnter: () => gsap.set(char, {opacity: 0})
                }
            });

        });
        
    });

    fx9Titles.forEach(title => {

        const words = title.querySelectorAll('.word');

        for (const word of words) {

            const chars = word.querySelectorAll('.char');

            gsap.fromTo(chars,  { 
                'will-change': 'transform', 
                scaleX: 0,
                x: (_, target) => window.innerWidth/2 - target.offsetLeft - target.offsetWidth/2
            },
            {
                ease: 'power1.inOut',
                scaleX: 1,
                x: 0,
                scrollTrigger: {
                    trigger: word,
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true
                }
            });

        }

    });

    fx10Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity', 
            opacity: 0,
            filter: 'blur(20px)'
        },
        {
            duration: 0.25,
            ease: 'power1.inOut',
            opacity: 1,
            filter: 'blur(0px)',
            stagger: { each: 0.05, from: 'random'},
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'center center',
                toggleActions: "play resume resume reset"
            }
        });

    });

    fx11Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        wrapElements(chars, 'span', 'char-wrap');

        gsap.fromTo(chars, { 
            'will-change': 'transform', 
            transformOrigin: '0% 50%',
            xPercent: 105,
        }, 
        {
            duration: 1,
            ease: 'expo',
            xPercent: 0,
            stagger: 0.042,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'top top+=10%',
                toggleActions: "play resume resume reset",
            }
        });

    });

    fx12Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        wrapElements(chars, 'span', 'char-wrap');
    
        gsap.fromTo(chars, { 
            'will-change': 'transform', 
            xPercent: -250,
            rotationZ: 45,
            scaleX: 6,
            transformOrigin: '100% 50%'
        },
        {
            duration: 1,
            ease: 'power2',
            xPercent: 0,
            rotationZ: 0,
            scaleX: 1,
            stagger: -0.06,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom+=10%',
                end: 'bottom top+=10%',
                scrub: true
            }
        });
    
    });

    fx13Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            rotationY: 180,
            xPercent: -40,
            yPercent: 100
        },
        {
            ease: 'power4.inOut()',
            opacity: 1,
            rotationY: 0,
            xPercent: 0,
            yPercent: 0,
            stagger: {
                each: -0.03,
                from: 0
            },
            scrollTrigger: {
                trigger: title,
                start: 'center bottom',
                end: 'bottom center-=30%',
                scrub: 0.9
            }
        });

    });

    fx14Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        gsap.timeline()
        .fromTo(title, {
            'will-change': 'transform', 
            xPercent: 100
        }, {
            ease: 'none',
            xPercent: 0,
            scrollTrigger: {
                trigger: title,
                scrub: true,
                start: 'center center',
                end: '+=100%',
                pin: title.parentNode,
            }
        })
        .fromTo(chars, { 
            'will-change': 'transform', 
            scale: 3,
            yPercent: -900
        },
        {
            ease: 'back(2)',
            scale: 1,
            yPercent: 0,
            stagger: 0.05,
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=100%',
                scrub: 1.9,
            }
        }, 0);
        
    });

    fx15Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 
        
        gsap.timeline()
        .fromTo(title, {
            'will-change': 'transform', 
            xPercent: -80
        }, {
            ease: 'none',
            xPercent: 0,
            scrollTrigger: {
                trigger: title,
                scrub: true,
                start: 'center center',
                end: '+=100%',
                pin: title.parentNode,
            }
        })
        .fromTo(chars, { 
            'will-change': 'opacity, transform', 
            transformOrigin: '50% 50% -200px',
            rotationX: 380,
            opacity: 0,
        },
        {
            ease: 'expo.inOut',
            rotationX: 0,
            z: 0,
            opacity: 1,
            stagger: -0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=140%',
                scrub: 1.2,
            }
        }, 0);

    });

};

// Preload images and fonts
preloadFonts('cvn8slu').then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');
    // Lenis (smooth scrolling)
    initSmoothScrolling();
    // GSAP Scroll Triggers
    scroll();
});