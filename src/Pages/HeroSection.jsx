// import React from 'react';
// import TopBanner from '../components/TopBanner';
// import { ShoppingBag , AlignJustify} from 'lucide-react';

// export default function HeroSection() {
//     return (
//         <div className="relative  bg-[#5571f3] pb-6">
//             {/* Top banner */}
//             <TopBanner />

//             {/* Main hero section */}
//             <div className="pt-6">
//                 {/* Navigation */}
//                 <div className="px-12 flex justify-between items-center">
//                     {/* Logo Icon */}
//                     <div className=" ">
//                         <img className='w-16' src="https://bluetea.co.in/cdn/shop/files/Blue_tea_new_logo_150x150_303e39b1-2517-4a44-940d-b8fe915f4997.png?v=1717096775&width=210" alt="" />
//                     </div>

//                     {/* Icons */}
//                     <div className="flex gap-0 items-center">
//                         <div className="p-2 hover:scale-105 transition-transform duration-200">
//                             <ShoppingBag className="w-8 h-8 text-purple-900" />
//                         </div>
//                         <div  className='relative'>
//                             <svg className=" w-18 h-18 text-yellow-300" viewBox="0 0 24 24" fill="#FFFFC9">
//                                 <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//                             </svg>
//                             <AlignJustify className='absolute top-[54%] left-[50%] -translate-x-[50%] -translate-y-[50%]' />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Content */}
//                 <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center py-12">
//                     {/* Brand Name */}
//                     <div className="md:w-1/2 mb-8 md:mb-0">
//                         <div className="text-9xl font-black tracking-tighter text-[#2D0A22]" style={{ lineHeight: "0.85" }}>
//                             Blue<br />Tea.
//                         </div>
//                     </div>

//                     {/* Tagline */}
//                     <div className="md:w-1/2 relative">
//                         {/* Yellow star SVG (Top Left) */}
//                         {/* <svg className="absolute -top-10 -left-4 w-16 h-16 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
//                             <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//                         </svg> */}

//                         <h1 className="text-5xl font-black leading-tight text-[#2D0A22]">
//                             FARM-FRESH<br />
//                             QUALITY.
//                         </h1>

//                         {/* Yellow star SVG (Bottom Right) */}
//                         {/* <svg className="absolute bottom-0 right-24 w-16 h-16 text-yellow-300" viewBox="0 0 24 24" fill="currentColor">
//                             <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
//                         </svg> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }



import React from 'react';
import TopBanner from '../components/TopBanner';
import { ShoppingBag , AlignJustify} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <div className="relative bg-[#5571f3] pb-6">
            {/* Top banner */}
            <TopBanner />

            {/* Main hero section */}
            <div className="pt-6">
                {/* Navigation */}
                <div className="px-12 flex justify-between items-center">
                    <div>
                        <img className='w-16' src="https://bluetea.co.in/cdn/shop/files/Blue_tea_new_logo_150x150_303e39b1-2517-4a44-940d-b8fe915f4997.png?v=1717096775&width=210" alt="" />
                    </div>
                    <div className="flex gap-0 items-center">
                        <div className="p-2 hover:scale-105 transition-transform duration-200">
                            <ShoppingBag className="w-8 h-8 text-purple-900" />
                        </div>
                        <div className='relative'>
                            <svg className="w-18 h-18 text-yellow-300" viewBox="0 0 24 24" fill="#FFFFC9">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                            <AlignJustify className='absolute top-[54%] left-[50%] -translate-x-[50%] -translate-y-[50%]' />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center py-12">
                
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-9xl font-black tracking-tighter text-[#2D0A22]"
                            style={{ lineHeight: "0.85" }}
                        >
                            Blue<br />Tea.
                        </motion.div>
                    </div>

                    {/* Tagline */}
                    <div className="md:w-1/2 relative">
                        <motion.h1
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            className="text-5xl font-black leading-tight text-[#2D0A22]"
                        >
                            FARM-FRESH<br />
                            QUALITY.
                        </motion.h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
