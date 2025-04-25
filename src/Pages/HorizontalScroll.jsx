// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import product1 from '../assets/images/product1.png';
// import hibisscus from '../assets/images/hibisscus.png';
// import product3 from '../assets/images/product3.png';

// gsap.registerPlugin(ScrollTrigger);

// const HorizontalScrollSection = () => {
//     const sectionRef = useRef(null);
//     const containerRef = useRef(null);
//     const pagesRef = useRef([]);

 
//     const addToPagesRef = (el) => {
//         if (el && !pagesRef.current.includes(el)) {
//             pagesRef.current.push(el);
//         }
//     };

//     useEffect(() => { 
//         if (typeof window === 'undefined') return;

//         const container = containerRef.current;
//         const pages = pagesRef.current;
 
//         const totalWidth = pages.reduce((acc, page) => acc + page.offsetWidth, 0);
 
//         gsap.set(container, {
//             width: `${totalWidth}px`
//         });
 
//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: sectionRef.current,
//                 pin: true,
//                 scrub: 1,
//                 end: () => `+=${totalWidth}`,
//                 anticipatePin: 1,
//                 invalidateOnRefresh: true  
//             }
//         });

//         tl.to(container, {
//             x: () => -(totalWidth - window.innerWidth),
//             ease: "none"
//         });
 
//         return () => {
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);

//     return (
//         <section
//             ref={sectionRef}
//             style={{
//                 position: 'relative',
//                 width: '100vw',
//                 height: '100vh',
//                 overflow: 'hidden',
//                 backgroundColor: '#f0f8ff'  // Default color
//             }}
//         >
//             <div
//                 ref={containerRef}
//                 style={{
//                     display: 'flex',
//                     position: 'absolute',
//                     height: '100vh',
//                     willChange: 'transform'
//                 }}
//             >
               
//                 <div
//                     ref={addToPagesRef}
//                     style={{
//                         width: '100vw',
//                         height: '100vh',
//                         position: 'relative',
//                         display: 'flex',
//                         padding: "5vw",
//                         display: 'flex',
//                         justifyContent: 'center',       
//                         alignItems: 'center',
//                         flexShrink: 0,
//                         backgroundColor: '#6875FE'   
//                     }}
//                 >
//                     <h1 className='text-[22vw] text-white font-semibold tracking-tighter'>Kahwa</h1>
//                     <button className='absolute bottom-16 border px-4 py-1 text-2xl text-white'>Buy Now</button>
//                     <img
//                         src={product1}
//                         alt="City"
//                         style={{
//                             width: '35vw',
//                             height: "30vw",
//                             position: "absolute",
//                             top: "50%",
//                             left: "50%",
//                             transform: "translate(-50%, -50%)",
//                             objectFit: 'cover',
                          
                          
//                         }}

//                     />
//                 </div>
 
//                 <div
//                     ref={addToPagesRef}
//                     style={{
//                         width: '100vw',
//                         height: '100vh',
//                         position: 'relative',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         flexShrink: 0,
//                         paddingLeft: "16vw",
//                         backgroundColor: '#c5001a'   
//                     }}
//                 >
//                    <h1 className='text-[22vw] text-white font-semibold tracking-tighter text-center pr-32'>Hibiscus</h1>
//                     <button className='absolute bottom-16 border px-4 py-1 text-2xl text-white mr-46'>Buy Now</button>
//                     <img
//                         src={hibisscus}
//                         alt="City"
//                         style={{
//                             width: '35vw',
//                             height: "35vw",
//                             position: "absolute",
//                             top: "50%",
//                             left: "50%",
//                             transform: "translate(-50%, -50%)",
//                             objectFit: 'cover',
                          
                          
//                         }}

//                     />
//                 </div>

 
//                 <div
//                     ref={addToPagesRef}
//                     style={{
//                         width: '100vw',
//                         height: '100vh',
//                         position: 'relative',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         flexShrink: 0,
//                         backgroundColor: '#3c0549'  // Mint Cream background for Page 3
//                     }}
//                 >
                 
//                  <h1 className='text-[22vw] text-white font-semibold tracking-tighter'>Rose</h1>
//                     <button className='absolute bottom-32 border px-4 py-1 text-2xl text-white'>Buy Now</button>
//                     <img
//                         src={product3}
//                         alt="City"
//                         style={{
//                             width: '25vw',
//                             height: "20vw",
//                             position: "absolute",
//                             top: "50%",
//                             left: "50%",
//                             transform: "translate(-50%, -50%)",
//                             objectFit: 'cover',
                     
//                         }}

//                     />
                    

//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HorizontalScrollSection;

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import product1 from '../assets/images/product1.png';
import hibisscus from '../assets/images/hibisscus.png';
import product3 from '../assets/images/product3.png';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const pagesRef = useRef([]);

    const headingsRef = useRef([]);
    const imagesRef = useRef([]);
    const buttonsRef = useRef([]);

    const addToHeadingsRef = (el) => {
        if (el && !headingsRef.current.includes(el)) {
            headingsRef.current.push(el);
        }
    };

    const addToImagesRef = (el) => {
        if (el && !imagesRef.current.includes(el)) {
            imagesRef.current.push(el);
        }
    };

    const addToButtonsRef = (el) => {
        if (el && !buttonsRef.current.includes(el)) {
            buttonsRef.current.push(el);
        }
    };

    const addToPagesRef = (el) => {
        if (el && !pagesRef.current.includes(el)) {
            pagesRef.current.push(el);
        }
    };

    useEffect(() => { 
        if (typeof window === 'undefined') return;

        const container = containerRef.current;
        const pages = pagesRef.current;
        const headings = headingsRef.current;
        const images = imagesRef.current;
        const buttons = buttonsRef.current;

        const totalWidth = pages.reduce((acc, page) => acc + page.offsetWidth, 0);

        gsap.set(container, {
            width: `${totalWidth}px`
        });

        gsap.set(headings, {
            y: 150,
            opacity: 0.3,
        });

        gsap.set(images[0], { 
            x: -window.innerWidth/2,
            y: 0,
            opacity: 0,
            rotation: 20,
            scale: 0.7
        });

        gsap.set(images[1], { 
            x: 0,
            y: -window.innerHeight/2,
            opacity: 0,
            rotation: -15,
            scale: 0.7,
            scrub: true,
            
        });

        gsap.set(images[2], { 
            x: window.innerWidth/2,
            y: 80,
            opacity: 0,
            rotation: -30,
            scale: 0.7,
            scrub: true,
        });

        gsap.set(buttons, { 
            y: 50, 
            opacity: 0 
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                scrub: true,
                end: () => `+=${totalWidth}`,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        tl.to(container, {
            x: () => -(totalWidth - window.innerWidth),
            ease: "none"
        });

        pages.forEach((page, index) => {
            const heading = headings[index];
            const image = images[index];
            const button = buttons[index];

            ScrollTrigger.create({
                trigger: page,
                containerAnimation: tl,
                start: "left right",
                end: "right left",
                onEnter: () => {
                    gsap.to(heading, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out"
                    });

                    if (index === 0) {
                        gsap.to(image, {
                            x: 0,
                            opacity: 1,
                            rotation: 0,
                            scale: 1,
                            duration: 2,
                            ease: "power2.out"
                        });
                    } else if (index === 1) {
                        gsap.to(image, {
                            y: 0,
                            opacity: 1,
                            rotation: 0,
                            scale: 1,
                            duration: 2,
                            ease: "bounce.out"
                        });
                    } else {
                        gsap.to(image, {
                            x: 0,
                            opacity: 1,
                            rotation: 0,
                            scale: 1,
                            duration: 2,
                            ease: "back.out(1.7)"
                        });
                    }

                    gsap.to(button, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: 0.3,
                        ease: "power2.out"
                    });
                },
                onEnterBack: () => {
                    gsap.to(heading, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out"
                    });

                    if (index === 0) {
                        gsap.to(image, {
                            x: 0,
                            opacity: 1,
                            rotation: 0,
                            scale: 1,
                            duration: 1.5,
                            ease: "power2.out"
                        });
                    } else if (index === 1) {
                        gsap.to(image, {
                            y: 0,
                            opacity: 1,
                            rotation: 0,
                            scale: 1,
                            duration: 1.5,
                            ease: "bounce.out"
                        });
                    } else {
                        gsap.to(image, {
                            x: 0,
                            opacity: 1,
                            rotation: 0,
                            scale: 1,
                            duration: 1.5,
                            ease: "back.out(1.7)"
                        });
                    }

                    gsap.to(button, {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        delay: 0.3,
                        ease: "power2.out"
                    });
                },
                onLeave: () => {
                    gsap.to(heading, {
                        y: 150,
                        opacity: 0.3,
                        duration: 0.4
                    });
                },
                onLeaveBack: () => {
                    gsap.to(heading, {
                        y: 150,
                        opacity: 0.3,
                        duration: 0.4
                    });
                }
            });
        });

        // ADDITION TO RESET WHEN ENTERING SECTION
        ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top bottom",
            onEnter: () => {
                gsap.set(headings, { y: 150, opacity: 0.3 });

                gsap.set(images[0], { 
                    x: -window.innerWidth/2,
                    y: 0,
                    opacity: 0,
                    rotation: 20,
                    scale: 0.7
                });
                gsap.set(images[1], { 
                    x: 0,
                    y: -window.innerHeight/2,
                    opacity: 0,
                    rotation: -15,
                    scale: 0.7,
                    scrub: true,
                });
                gsap.set(images[2], { 
                    x: window.innerWidth/2,
                    y: 50,
                    opacity: 0,
                    rotation: -30,
                    scale: 0.7,
                    scrub: true,    
                });

                gsap.set(buttons, { y: 50, opacity: 0 });

                ScrollTrigger.refresh();
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                backgroundColor: '#f0f8ff'
            }}
        >
            <div
                ref={containerRef}
                style={{
                    display: 'flex',
                    position: 'absolute',
                    height: '100vh',
                    willChange: 'transform'
                }}
            >
                <div
                    ref={addToPagesRef}
                    style={{
                        width: '100vw',
                        height: '100vh',
                        position: 'relative',
                        display: 'flex',
                        padding: "5vw",
                        justifyContent: 'center',       
                        alignItems: 'center',
                        flexShrink: 0,
                        backgroundColor: '#6875FE',
                        overflow: 'hidden'
                    }}
                >
                    <h1 
                        ref={addToHeadingsRef}
                        className='text-[22vw] text-white font-semibold tracking-tighter'
                    >
                        Kahwa
                    </h1>
                    <button 
                        ref={addToButtonsRef}
                        className='absolute bottom-16 border px-4 py-1 text-2xl text-white'
                    >
                        Buy Now
                    </button>
                    <img
                        ref={addToImagesRef}
                        src={product1}
                        alt="Kahwa product"
                        style={{
                            width: '35vw',
                            height: "30vw",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            objectFit: 'cover'
                        }}
                    />
                </div>

                <div
                    ref={addToPagesRef}
                    style={{
                        width: '100vw',
                        height: '100vh',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0,
                        paddingLeft: "16vw",
                        backgroundColor: '#c5001a',
                        overflow: 'hidden'
                    }}
                >
                    <h1 
                        ref={addToHeadingsRef}
                        className='text-[22vw] text-white font-semibold tracking-tighter text-center pr-32'
                    >
                        Hibiscus
                    </h1>
                    <button 
                        ref={addToButtonsRef}
                        className='absolute bottom-16 border px-4 py-1 text-2xl text-white mr-46'
                    >
                        Buy Now
                    </button>
                    <img
                        ref={addToImagesRef}
                        src={hibisscus}
                        alt="Hibiscus product"
                        style={{
                            width: '35vw',
                            height: "35vw",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            objectFit: 'cover'
                        }}
                    />
                </div>

                <div
                    ref={addToPagesRef}
                    style={{
                        width: '100vw',
                        height: '100vh',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexShrink: 0,
                        backgroundColor: '#3c0549',
                        overflowX: 'hidden'
                    }}
                >
                    <h1 
                        ref={addToHeadingsRef}
                        className='text-[22vw] text-white font-semibold tracking-tighter'
                    >
                        Rose
                    </h1>
                    <button 
                        ref={addToButtonsRef}
                        className='absolute bottom-32 border px-4 py-1 text-2xl text-white'
                    >
                        Buy Now
                    </button>
                    <img
                        ref={addToImagesRef}
                        src={product3}
                        alt="Rose product"
                        style={{
                            width: '25vw',
                            height: "20vw",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            objectFit: 'cover'
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default HorizontalScrollSection;
