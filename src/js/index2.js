import {preloadFonts} from './utils';
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();
const fx16Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect16]')];
const fx17Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect17]')];
const fx18Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect18]')];
const fx19Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect19]')];
const fx20Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect20]')];
const fx21Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect21]')];
const fx22Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect22]')];
const fx23Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect23]')];
const fx24Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect24]')];
const fx25Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect25]')];
const fx26Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect26]')];
const fx27Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect27]')];
const fx28Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect28]')];
const fx29Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect29]')];

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
    
    fx16Titles.forEach(title => {
        
        gsap.fromTo(title, {
            transformOrigin: '0% 50%',
            rotate: 3
        }, {
            ease: 'none',
            rotate: 0,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'top top',
                scrub: true,
            }
        });

        gsap.fromTo(title.querySelectorAll('.word'), {
            'will-change': 'opacity',
            opacity: 0.1
        }, 
        {
            ease: 'none',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom-=20%',
                end: 'center top+=20%',
                scrub: true,
            }
        });

    });

    fx17Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
        
        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0,
            rotateX: () => gsap.utils.random(-120,120),
            z: () => gsap.utils.random(-200,200),
        }, 
        {
            ease: 'none',
            opacity: 1,
            rotateX: 0,
            z: 0,
            stagger: 0.02,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        });

    });

    fx18Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
        
        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0.2,
            z: -800
        }, 
        {
            ease: 'back.out(1.2)',
            opacity: 1,
            z: 0,
            stagger: 0.04,
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        });

    });

    fx19Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
        
        gsap.fromTo(chars, {
            'will-change': 'opacity, transform', 
            transformOrigin: '50% 0%',
            opacity: 0,
            rotationX: -90,
            z: -200
        }, 
        {
            ease: 'power1',
            opacity: 1,
            stagger: 0.05,
            rotationX: 0,
            z: 0,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom',
                end: 'bottom top+=20%',
                scrub: true,
            }
        });
        
    });

    fx20Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
        
        gsap.fromTo(chars, {
            'will-change': 'opacity, transform', 
            transformOrigin: '50% 100%',
            opacity: 0,
            rotationX: 90
        }, 
        {
            ease: 'power4',
            opacity: 1,
            stagger:  {
                each: 0.03,
                from: 'random'
            },
            rotationX: 0,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom',
                end: 'bottom top+=20%',
                scrub: true,
            }
        });
        
    });

    fx21Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const word of words) {
            
            const chars = word.querySelectorAll('.char');
        
            chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

            gsap.fromTo(chars, {
                'will-change': 'opacity, transform', 
                opacity: 0,
                y: (position,_,arr) => -40*Math.abs(position-arr.length/2),
                z: () => gsap.utils.random(-1500,-600),
                rotationX: () => gsap.utils.random(-500,-200)
            }, 
            {
                ease: 'power1.inOut',
                opacity: 1,
                y: 0,
                z: 0,
                rotationX: 0,
                stagger: {
                    each: 0.06,
                    from: 'center'
                },
                scrollTrigger: {
                    trigger: word,
                    start: 'top bottom',
                    end: 'top top+=15%',
                    scrub: true,
                }
            });

        }

    });

    fx22Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const word of words) {
            const chars = word.querySelectorAll('.char');
            const charsTotal = chars.length;

            chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
            
            gsap.fromTo(chars, {
                'will-change': 'transform', 
                x: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return (charsTotal%2 ? Math.abs(Math.ceil(charsTotal/2)-1-factor) : Math.abs(Math.ceil(charsTotal/2)-factor) )*200*(position < charsTotal/2 ? -1 : 1);
                },
                y: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return factor*60;
                },
                rotationY: -270,
                rotationZ: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return position < charsTotal/2 ? Math.abs(factor-charsTotal/2)*8 : -1*Math.abs(factor-charsTotal/2)*8;
                }
            }, 
            {
                ease: 'power2.inOut',
                x: 0,
                y: 0,
                rotationZ: 0,
                rotationY: 0,
                scale: 1,
                scrollTrigger: {
                    trigger: word,
                    start: 'top bottom+=40%',
                    end: 'top top+=15%',
                    scrub: true,
                }
            });

        }

    });

    fx23Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const [wordPosition, word] of words.entries()) {

            gsap.fromTo(word.querySelectorAll('.char'), {
                'will-change': 'transform', 
                scale: 0.01,
                x: (pos,_,arr) => {
                    return wordPosition%2 ? pos*50 : (arr.length-pos-1)*-50
                }
            }, 
            {
                ease: 'power4',
                scale: 1,
                x: 0,
                scrollTrigger: {
                    trigger: word,
                    start: 'center bottom',
                    end: 'bottom top-=40%',
                    scrub: true,
                }
            });
            
        }
        
    });

    fx24Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        const charsTotal = chars.length;
        
        gsap.fromTo(chars, {
            'will-change': 'transform', 
            y: position => {
                const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                return (charsTotal/2-factor+6)*130;
            }
        }, 
        {
            ease: 'elastic.out(.4)',
            y: 0,
            stagger: {
                amount: 0.1,
                from: 'center'
            },
            scrollTrigger: {
                trigger: title,
                start: 'top bottom',
                end: 'bottom top-=50%',
                scrub: true,
            }
        });

    });

    fx25Titles.forEach(title => {
        
        gsap.fromTo(title.querySelectorAll('.char'), {
            'will-change': 'transform',
            transformOrigin: '50% 100%',
            scaleY: 0
        }, 
        {
            ease: 'power3.in',
            opacity: 1,
            scaleY: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=500%',
                scrub: true,
                pin: title.parentNode,
            }
        });

    });

    fx26Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=100%',
                scrub: true,
                pin: title.parentNode,
            }
        });
        for (const [wordPosition, word] of words.entries()) {
            tl.fromTo(word.querySelectorAll('.char'), {
                'will-change': 'transform', 
                transformOrigin: () => !wordPosition%2 ? '50% 0%' : '50% 100%',
                scaleY: 0
            }, 
            {
                ease: 'power1.inOut',
                scaleY: 1,
                stagger: {
                    amount: 0.3,
                    from: 'center'
                }
            }, 0);
            
        }

    });

    fx27Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        words.forEach(word => gsap.set(word.parentNode, { perspective: 1000 })); 

        gsap.fromTo(words, {
            'will-change': 'opacity, transform', 
            z: () => gsap.utils.random(500,950),
            opacity: 0,
            xPercent: (pos) => gsap.utils.random(-100,100),
            yPercent: (pos) => gsap.utils.random(-10,10),
            rotationX: () => gsap.utils.random(-90,90)
        }, 
        {
            ease: 'expo',
            opacity: 1,
            rotationX: 0,
            rotationY: 0,
            xPercent: 0,
            yPercent: 0,
            z: 0,
            scrollTrigger: {
                trigger: title,
                start: 'center center',
                end: '+=300%',
                scrub: true,
                pin: title.parentNode,
            },
            stagger: {
                each: 0.006,
                from: 'random'
            }
        });

    });

    fx28Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const word of words) {

            const chars = word.querySelectorAll('.char');
            const charsTotal = chars.length;
            
            gsap.fromTo(chars, {
                'will-change': 'transform, filter', 
                transformOrigin: '50% 100%',
                scale: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return gsap.utils.mapRange(0, Math.ceil(charsTotal/2), 0.5, 2.1, factor);
                },
                y: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return gsap.utils.mapRange(0, Math.ceil(charsTotal/2), 0, 60, factor);
                },
                rotation: position => {
                    const factor = position < Math.ceil(charsTotal/2) ? position : Math.ceil(charsTotal/2) - Math.abs(Math.floor(charsTotal/2) - position) - 1;
                    return position < charsTotal/2 ? gsap.utils.mapRange(0, Math.ceil(charsTotal/2), -4, 0, factor) : gsap.utils.mapRange(0, Math.ceil(charsTotal/2), 0, 4, factor);
                },
                filter: 'blur(12px) opacity(0)',
            }, 
            {
                ease: 'power2.inOut',
                y: 0,
                rotation: 0,
                scale: 1,
                filter: 'blur(0px) opacity(1)',
                scrollTrigger: {
                    trigger: word,
                    start: 'top bottom+=40%',
                    end: 'top top+=15%',
                    scrub: true,
                },
                stagger: {
                    amount: 0.15,
                    from: 'center'
                }
            });

        }

    });

    fx29Titles.forEach(title => {
        
        const words = [...title.querySelectorAll('.word')];
        
        for (const [pos,word] of words.entries()) {
            
            const chars = word.querySelectorAll('.char');
            
            gsap.fromTo(chars, {
                'will-change': 'transform', 
                transformOrigin: `${pos%2 ? 0 : 100}% ${pos%2 ? 100 : 0}%`,
                scale: 0
            }, 
            {
                ease: 'power4',
                scale: 1,
                stagger:  {
                    each: 0.03,
                    from: pos%2 ? 'end' : 'start'
                },
                scrollTrigger: {
                    trigger: word,
                    start: 'top bottom-=10%',
                    end: 'top top',
                    scrub: true,
                }
            });
        }
        
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