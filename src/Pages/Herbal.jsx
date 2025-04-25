// import React from 'react'
// import WaveSVG from './WaveSVG';


// const Herbal = () => {
//     return (
//         <div className='bg-[#ba3661] w-full py-0 h-[130vh]'>
//             <div className='flex h-[20%] justify-between items-center max-w-6xl mx-auto px-4'>
//                 <h1 className='text-9xl font-bold text-[#690c2d] z-9'>HERBAL INFUSION</h1>
//             </div>

//             {/* Image outside the max-w container */}
//             <div className='h-[80%] relative '>
//                 <img
//                     className="herbal-img absolute top-0 left-0 w-full z-10 "
//                     src="data:image/svg+xml,%3csvg%20width='2096'%20height='343'%20viewBox='0%200%202096%20343'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2096%20343L2096%20343L2096%200L2.9986e-05%20-0.000183238L1.34631e-05%20189L1.09303%20189C9.42751%20124.682%2064.4118%2074.9998%20131%2074.9998C197.588%2074.9999%20252.573%20124.682%20260.907%20189L263.093%20189C271.428%20124.682%20326.412%2074.9999%20393%2074.9999C459.588%2074.9999%20514.573%20124.682%20522.907%20189L525.093%20189C533.427%20124.682%20588.412%2074.9999%20655%2074.9999C721.588%2074.9999%20776.573%20124.682%20784.907%20189L787.093%20189C795.427%20124.682%20850.412%2075%20917%2075C983.588%2075%201038.57%20124.682%201046.91%20189L1049.09%20189C1057.43%20124.682%201112.41%2075%201179%2075C1245.59%2075%201300.57%20124.682%201308.91%20189L1311.09%20189C1319.43%20124.682%201374.41%2075.0001%201441%2075.0001C1507.59%2075.0001%201562.57%20124.682%201570.91%20189L1573.09%20189C1581.43%20124.682%201636.41%2075.0001%201703%2075.0001C1769.59%2075.0001%201824.57%20124.682%201832.91%20189L1835.09%20189C1843.43%20124.682%201898.41%2075.0001%201965%2075.0002C2031.59%2075.0002%202086.57%20124.682%202094.91%20189L2096%20189L2096%20206L2096%20343Z'%20fill='%23BA3661'/%3e%3c/svg%3e"
//                     alt="Wave SVG"
//                 />

//                 <img
//                     className='h-full w-full object-cover'
//                     src="https://bluetea.co.in/cdn/shop/articles/Blog_22..04.24_3.jpg?v=1713859854&width=700"
//                     alt=""
//                 />
//                 {/* <img
//                     className='absolute bottom-0 left-0 w-full z-10'
//                     src="data:image/svg+xml,%3csvg%20width='2096'%20height='268'%20viewBox='0%200%202096%20268'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M261.985%20129C260.916%2057.5729%20202.681%200%20131%200C59.3185%200%201.08396%2057.5729%200.0149573%20129H0V131V268H2096V131V129H2095.99C2094.92%2057.5729%202036.68%200%201965%200C1893.32%200%201835.08%2057.5729%201834.02%20129H1833.98C1832.92%2057.5729%201774.68%200%201703%200C1631.32%200%201573.08%2057.5729%201572.02%20129H1571.98C1570.92%2057.5729%201512.68%200%201441%200C1369.32%200%201311.08%2057.5729%201310.02%20129H1309.98C1308.92%2057.5729%201250.68%200%201179%200C1107.32%200%201049.08%2057.5729%201048.02%20129H1047.98C1046.92%2057.5729%20988.681%200%20917%200C845.319%200%20787.084%2057.5729%20786.015%20129H785.985C784.916%2057.5729%20726.681%200%20655%200C583.319%200%20525.084%2057.5729%20524.015%20129H523.985C522.916%2057.5729%20464.681%200%20393%200C321.319%200%20263.084%2057.5729%20262.015%20129H261.985Z'%20fill='%23FFFFC9'/%3e%3c/svg%3e"
//                     alt="Wave SVG"
//                 /> */}
//                 <div className="absolute flex gap-20 -bottom-10 left-0 w-full z-10">
//                     <WaveSVG color="#FFFFC9" />
//                     <WaveSVG color="#FFFFC9" />
//                     <WaveSVG color="#FFFFC9" />

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Herbal


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WaveSVG from './WaveSVG';
import img4 from "../assets/images/img4.webp"


gsap.registerPlugin(ScrollTrigger);

const Herbal = () => {
  const herbalImgRef = useRef(null);

  useEffect(() => {
    gsap.to(herbalImgRef.current, {
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: herbalImgRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className='bg-[#ba3661] w-full py-0 h-[130vh]'>
      <div className='flex h-[20%] justify-between items-center max-w-6xl mx-auto px-4'>
        <h1 className='text-9xl font-bold text-[#690c2d] z-9'>HERBAL INFUSION</h1>
      </div>

      {/* Image outside the max-w container */}
      <div className='h-[80%] relative overflow-hidden'>
        <img
          className="herbal-img absolute top-0 left-0 w-full z-10"
          src="data:image/svg+xml,%3csvg%20width='2096'%20height='343'%20viewBox='0%200%202096%20343'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2096%20343L2096%20343L2096%200L2.9986e-05%20-0.000183238L1.34631e-05%20189L1.09303%20189C9.42751%20124.682%2064.4118%2074.9998%20131%2074.9998C197.588%2074.9999%20252.573%20124.682%20260.907%20189L263.093%20189C271.428%20124.682%20326.412%2074.9999%20393%2074.9999C459.588%2074.9999%20514.573%20124.682%20522.907%20189L525.093%20189C533.427%20124.682%20588.412%2074.9999%20655%2074.9999C721.588%2074.9999%20776.573%20124.682%20784.907%20189L787.093%20189C795.427%20124.682%20850.412%2075%20917%2075C983.588%2075%201038.57%20124.682%201046.91%20189L1049.09%20189C1057.43%20124.682%201112.41%2075%201179%2075C1245.59%2075%201300.57%20124.682%201308.91%20189L1311.09%20189C1319.43%20124.682%201374.41%2075.0001%201441%2075.0001C1507.59%2075.0001%201562.57%20124.682%201570.91%20189L1573.09%20189C1581.43%20124.682%201636.41%2075.0001%201703%2075.0001C1769.59%2075.0001%201824.57%20124.682%201832.91%20189L1835.09%20189C1843.43%20124.682%201898.41%2075.0001%201965%2075.0002C2031.59%2075.0002%202086.57%20124.682%202094.91%20189L2096%20189L2096%20206L2096%20343Z'%20fill='%23BA3661'/%3e%3c/svg%3e"
           alt="Wave SVG"
        />

        {/* This image will scale */}
        <img
          ref={herbalImgRef}
          className='h-full w-full object-cover will-change-transform'
          src={img4}
          alt=""
        />

        {/* Bottom Waves */}
        <div className="absolute flex gap-20 -bottom-10 left-0 w-full z-10">
          <WaveSVG color="#FFFFC9" />
          <WaveSVG color="#FFFFC9" />
          <WaveSVG color="#FFFFC9" />
        </div>
      </div>
    </div>
  );
};

export default Herbal;
