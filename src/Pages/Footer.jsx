import React, { useEffect, useRef } from 'react'

const Footer = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            // Create a duplicate of the SVG
            const originalSVG = container.querySelector('.img-svg');
            const cloneSVG = originalSVG.cloneNode(true);
            cloneSVG.classList.add('img-svg-clone');
            container.appendChild(cloneSVG);
        }
    }, []);

    return (
        <div className='bg-[#faadff] relative flex justify-between h-screen px-30 items-center'>
            <div className='text-3xl font-semibold leading-12'>
                <a href=""> <h3>Privacy & Policy</h3></a>
                <a href=""> <h3>TERMS & </h3></a>
                <a href=""><h3>SHIPPING</h3></a>
            </div>
            <div className="text-[15vw] font-black tracking-tighter text-[#2D0A22] " style={{ lineHeight: "0.85" }}>
                Blue<br />Tea.
            </div>
            <div className="text-3xl font-semibold leading-[3rem] space-y-0">
                <a href="#" className="group block relative w-fit">
                    <h3 className="relative z-10">Instagram</h3>
                    <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="group block relative w-fit">
                    <h3 className="relative z-10">FaceBook</h3>
                    <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#" className="group block relative w-fit">
                    <h3 className="relative z-10">YouTube</h3>
                    <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>

            <div ref={containerRef} className="wave-wrapper absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "268px" }}>
                <img
                    className="img-svg absolute bottom-0 left-0 w-full z-10"
                    src="data:image/svg+xml,%3csvg%20width='2096'%20height='268'%20viewBox='0%200%202096%20268'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M261.985%20129C260.916%2057.5729%20202.681%200%20131%200C59.3185%200%201.08396%2057.5729%200.0149573%20129H0V131V268H2096V131V129H2095.99C2094.92%2057.5729%202036.68%200%201965%200C1893.32%200%201835.08%2057.5729%201834.02%20129H1833.98C1832.92%2057.5729%201774.68%200%201703%200C1631.32%200%201573.08%2057.5729%201572.02%20129H1571.98C1570.92%2057.5729%201512.68%200%201441%200C1369.32%200%201311.08%2057.5729%201310.02%20129H1309.98C1308.92%2057.5729%201250.68%200%201179%200C1107.32%200%201049.08%2057.5729%201048.02%20129H1047.98C1046.92%2057.5729%20988.681%200%20917%200C845.319%200%20787.084%2057.5729%20786.015%20129H785.985C784.916%2057.5729%20726.681%200%20655%200C583.319%200%20525.084%2057.5729%20524.015%20129H523.985C522.916%2057.5729%20464.681%200%20393%200C321.319%200%20263.084%2057.5729%20262.015%20129H261.985Z'%20fill='%232D0A22'/%3e%3c/svg%3e"
                    alt="Wave SVG"
                />
            </div>

            <style jsx>{`
                @keyframes moveWave {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                
                .img-svg {
                    animation: moveWave 20s linear infinite;
                }
                
                .img-svg-clone {
                    animation: moveWave 20s linear infinite;
                    left: 100%;
                }
            `}</style>
        </div>
    )
}

export default Footer