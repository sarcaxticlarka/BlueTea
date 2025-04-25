import React from 'react';
import WaveSVG from './WaveSVG';


export default function UspPage() {
    return (
        <div className="bg-[#80B5EE] text-white p-6 flex items-center justify-center h-screen relative z-0">
            <div className="absolute top-32 flex gap-72 left-0 w-full z-10">
                <WaveSVG color="#80B5EE" />
                <WaveSVG color="#80B5EE" />
                <WaveSVG color="#80B5EE" />
                <WaveSVG color="#80B5EE" />


            </div>
            <div className="w-full max-w-5xl mx-auto grid grid-cols-3 gap-4">
                {/* Left Side */}
                <div className="flex flex-col justify-between py-8">
                    {/* Top Left - Vegan Badge */}
                    <div className="flex flex-col items-center mb-16">
                        <svg width="120" height="70" viewBox="0 0 120 70">
                            <path d="M10,35 Q30,5 60,10 Q90,15 110,35 Q90,55 60,60 Q30,65 10,35 Z" fill="#9AE66E" />
                            <text x="60" y="30" textAnchor="middle" fontWeight="bold" fontSize="14">100%</text>
                            <text x="60" y="48" textAnchor="middle" fontWeight="bold" fontSize="14">Herbal</text>
                        </svg>
                        <p className="text-center text-sm mt-4 px-4 max-w-xs">
                        Purely plant-based ingredients, carefully sourced to keep your wellness at the core.</p>
                    </div>

                    {/* Bottom Left - Protein Badge */}
                    <div className="flex flex-col items-center mt-16">
                        <svg width="120" height="70" viewBox="0 0 120 70">
                            <path d="M10,35 Q30,5 60,10 Q90,15 110,35 Q90,55 60,60 Q30,65 10,35 Z" fill="#FEDE48" />
                            <text x="60" y="30" textAnchor="middle" fontWeight="bold" fontSize="12">Sun Drying</text>
                            <text x="60" y="48" textAnchor="middle" fontWeight="bold" fontSize="14">Protein</text>
                        </svg>
                        <p className="text-center text-sm mt-4 px-4 max-w-xs">
                        Naturally dried under the sun to lock in nutrients and preserve authentic taste.</p>
                    </div>
                </div>

                {/* Center Title */}
                <div className="flex flex-col items-center justify-center">
                    <h3 className='text-3xl font-bold'>UNLIFTING TO A</h3>
                    <h3 className='text-3xl font-bold'>BETTER LIFE</h3>
                </div>

                {/* Right Side */}
                <div className="flex flex-col justify-between py-8">
                    {/* Top Right - Vegan Badge */}
                    <div className="flex flex-col items-center mb-16">
                        <svg width="120" height="70" viewBox="0 0 120 70">
                            <path d="M10,35 Q30,5 60,10 Q90,15 110,35 Q90,55 60,60 Q30,65 10,35 Z" fill="#9AE66E" />
                            <text x="60" y="30" textAnchor="middle" fontWeight="bold" fontSize="14">100%</text>
                            <text x="60" y="48" textAnchor="middle" fontWeight="bold" fontSize="14">nutrition </text>
                        </svg>
                        <p className="text-center text-sm mt-4 px-4 max-w-xs">
                        Empowering healthier lifestyles through clean, conscious nutrition.</p>
                    </div>

                    {/* Bottom Right - Protein Badge */}
                    <div className="flex flex-col items-center mt-16">
                        <svg width="120" height="70" viewBox="0 0 120 70">
                            <path d="M10,35 Q30,5 60,10 Q90,15 110,35 Q90,55 60,60 Q30,65 10,35 Z" fill="#FEDE48" />
                            <text x="60" y="30" textAnchor="middle" fontWeight="bold" fontSize="12">Chemical </text>
                            <text x="60" y="48" textAnchor="middle" fontWeight="bold" fontSize="14">Free</text>
                        </svg>
                        <p className="text-center text-sm mt-4 px-4 max-w-xs">
                        Every ingredient packed with essential vitamins, minerals, and nourishment.</p>
                    </div>
                </div>
            </div>

            {/* <img
                className="absolute -bottom-20 left-0 w-full z-1"
                src="data:image/svg+xml,%3csvg%20width='2096'%20height='268'%20viewBox='0%200%202096%20268'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M261.985%20129C260.916%2057.5729%20202.681%200%20131%200C59.3185%200%201.08396%2057.5729%200.0149573%20129H0V131V268H2096V131V129H2095.99C2094.92%2057.5729%202036.68%200%201965%200C1893.32%200%201835.08%2057.5729%201834.02%20129H1833.98C1832.92%2057.5729%201774.68%200%201703%200C1631.32%200%201573.08%2057.5729%201572.02%20129H1571.98C1570.92%2057.5729%201512.68%200%201441%200C1369.32%200%201311.08%2057.5729%201310.02%20129H1309.98C1308.92%2057.5729%201250.68%200%201179%200C1107.32%200%201049.08%2057.5729%201048.02%20129H1047.98C1046.92%2057.5729%20988.681%200%20917%200C845.319%200%20787.084%2057.5729%20786.015%20129H785.985C784.916%2057.5729%20726.681%200%20655%200C583.319%200%20525.084%2057.5729%20524.015%20129H523.985C522.916%2057.5729%20464.681%200%20393%200C321.319%200%20263.084%2057.5729%20262.015%20129H261.985Z'%20fill='%23BA3661'/%3e%3c/svg%3e"
                alt="Wave SVG"
            /> */}

<div className="absolute -bottom-20 flex gap-20 left-0 w-full z-10">
                <WaveSVG color="#ba3661" />
                <WaveSVG color="#ba3661" />
                <WaveSVG color="#ba3661" />
                <WaveSVG color="#ba3661" />

 

            </div>

        </div>
    );
}