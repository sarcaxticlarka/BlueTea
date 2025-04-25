// import React from 'react';
// import WaveSVG from './WaveSVG';

// const About = () => {
//     return (
//         <div className='h-[110vh] bg-[#FFFFC9] relative'>
//             <div className='h-[80vh] relative'>
//                 <img
//                     className='img1 h-[100%]  left-0 w-full object-cover z-0'
//                     src="https://bluetea.co.in/cdn/shop/files/Nature_s_Goodness_HIB_WEB.jpg?v=1744781409&width=3000https://bluetea.co.in/cdn/shop/files/Nature_s_Goodness_HIB_WEB.jpg?v=1744781409&width=3000"
//                     alt="Background"
//                 />
//                 {/* <img
//                     className='absolute bottom-0 left-0 w-full z-10'
//                     src="data:image/svg+xml,%3csvg%20width='2096'%20height='268'%20viewBox='0%200%202096%20268'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M261.985%20129C260.916%2057.5729%20202.681%200%20131%200C59.3185%200%201.08396%2057.5729%200.0149573%20129H0V131V268H2096V131V129H2095.99C2094.92%2057.5729%202036.68%200%201965%200C1893.32%200%201835.08%2057.5729%201834.02%20129H1833.98C1832.92%2057.5729%201774.68%200%201703%200C1631.32%200%201573.08%2057.5729%201572.02%20129H1571.98C1570.92%2057.5729%201512.68%200%201441%200C1369.32%200%201311.08%2057.5729%201310.02%20129H1309.98C1308.92%2057.5729%201250.68%200%201179%200C1107.32%200%201049.08%2057.5729%201048.02%20129H1047.98C1046.92%2057.5729%20988.681%200%20917%200C845.319%200%20787.084%2057.5729%20786.015%20129H785.985C784.916%2057.5729%20726.681%200%20655%200C583.319%200%20525.084%2057.5729%20524.015%20129H523.985C522.916%2057.5729%20464.681%200%20393%200C321.319%200%20263.084%2057.5729%20262.015%20129H261.985Z'%20fill='%23FFFFC9'/%3e%3c/svg%3e"
//                     alt="Wave SVG"
//                 /> */}
//                 <div className="absolute flex gap-20 -bottom-10 left-0 w-full z-10">
//                 <WaveSVG color="#FFFFC9"  />
//                 <WaveSVG color="#FFFFC9"  />
//                 <WaveSVG color="#FFFFC9"  />
 
//                 </div>
//             </div>
//             <div className='h-[30vh] px-32 pb-12 flex items-center justify-center'>
//                 <h1 className='text-4xl font-semibold text-center text-text-[#2D0A22] '>Our vision is to provide authentic Indian Ayurvedic Herbal Tea across the world and while on this journey we commit to the advancement of the community along with us.</h1>
//             </div>

//             <img
//                 className='absolute top-0 left-0 w-full z-10'
//                 src="data:image/svg+xml,%3csvg%20width='2096'%20height='343'%20viewBox='0%200%202096%20343'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2096%20343L2096%20343L2096%200L2.9986e-05%20-0.000183238L1.34631e-05%20189L1.09303%20189C9.42751%20124.682%2064.4118%2074.9998%20131%2074.9998C197.588%2074.9999%20252.573%20124.682%20260.907%20189L263.093%20189C271.428%20124.682%20326.412%2074.9999%20393%2074.9999C459.588%2074.9999%20514.573%20124.682%20522.907%20189L525.093%20189C533.427%20124.682%20588.412%2074.9999%20655%2074.9999C721.588%2074.9999%20776.573%20124.682%20784.907%20189L787.093%20189C795.427%20124.682%20850.412%2075%20917%2075C983.588%2075%201038.57%20124.682%201046.91%20189L1049.09%20189C1057.43%20124.682%201112.41%2075%201179%2075C1245.59%2075%201300.57%20124.682%201308.91%20189L1311.09%20189C1319.43%20124.682%201374.41%2075.0001%201441%2075.0001C1507.59%2075.0001%201562.57%20124.682%201570.91%20189L1573.09%20189C1581.43%20124.682%201636.41%2075.0001%201703%2075.0001C1769.59%2075.0001%201824.57%20124.682%201832.91%20189L1835.09%20189C1843.43%20124.682%201898.41%2075.0001%201965%2075.0002C2031.59%2075.0002%202086.57%20124.682%202094.91%20189L2096%20189L2096%20206L2096%20343Z'%20fill='%235571f3'/%3e%3c/svg%3e"
//                 alt="Wave SVG"
//             />
//         </div>
//     );
// };

// export default About;


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WaveSVG from './WaveSVG';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                imgRef.current,
                { scale: 1 },
                {
                    scale: 1.1,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert(); // cleanup on unmount
    }, []);

    return (
        <div className='h-[110vh] bg-[#FFFFC9] relative' ref={sectionRef}>
            <div className='h-[80vh] relative'>
                <img
                    ref={imgRef}
                    className='img1 h-[100%] left-0 w-full object-cover z-0'
                    src="https://bluetea.co.in/cdn/shop/files/Nature_s_Goodness_HIB_WEB.jpg?v=1744781409&width=3000"
                    alt="Background"
                />
                <div className="absolute flex gap-20 -bottom-20 left-0 w-full z-10">
                    <WaveSVG color="#FFFFC9" />
                    <WaveSVG color="#FFFFC9" />
                    <WaveSVG color="#FFFFC9" />
                </div>
            </div>
            <div className='h-[30vh] px-32 pb-12 flex items-center justify-center'>
                <h1 className='text-4xl font-semibold text-center text-[#2D0A22] pt-12'>
                    Our vision is to provide authentic Indian Ayurvedic Herbal Tea across the world and while on this journey we commit to the advancement of the community along with us.
                </h1>
            </div>
            //             <img
                className='absolute -top-6 left-0 w-full z-10'
                src="data:image/svg+xml,%3csvg%20width='2096'%20height='343'%20viewBox='0%200%202096%20343'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2096%20343L2096%20343L2096%200L2.9986e-05%20-0.000183238L1.34631e-05%20189L1.09303%20189C9.42751%20124.682%2064.4118%2074.9998%20131%2074.9998C197.588%2074.9999%20252.573%20124.682%20260.907%20189L263.093%20189C271.428%20124.682%20326.412%2074.9999%20393%2074.9999C459.588%2074.9999%20514.573%20124.682%20522.907%20189L525.093%20189C533.427%20124.682%20588.412%2074.9999%20655%2074.9999C721.588%2074.9999%20776.573%20124.682%20784.907%20189L787.093%20189C795.427%20124.682%20850.412%2075%20917%2075C983.588%2075%201038.57%20124.682%201046.91%20189L1049.09%20189C1057.43%20124.682%201112.41%2075%201179%2075C1245.59%2075%201300.57%20124.682%201308.91%20189L1311.09%20189C1319.43%20124.682%201374.41%2075.0001%201441%2075.0001C1507.59%2075.0001%201562.57%20124.682%201570.91%20189L1573.09%20189C1581.43%20124.682%201636.41%2075.0001%201703%2075.0001C1769.59%2075.0001%201824.57%20124.682%201832.91%20189L1835.09%20189C1843.43%20124.682%201898.41%2075.0001%201965%2075.0002C2031.59%2075.0002%202086.57%20124.682%202094.91%20189L2096%20189L2096%20206L2096%20343Z'%20fill='%235571f3'/%3e%3c/svg%3e"
                alt="Wave SVG"
            />
        </div>
    );
};

export default About;

