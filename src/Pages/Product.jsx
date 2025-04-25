import { useState } from 'react';
import WaveSVG from './WaveSVG';


export default function Product() {
    const product = [
        {
            id: 1,
            title: "Butterfly Pea Flower ",
            description: "Experience the benefits of Butterfly Pea Tea, a caffeine-free",
            hoverImage: "https://bluetea.co.in/cdn/shop/files/Helps_you_get_in_shape.jpg?v=1744889206&width=1200"
        },
        {
            id: 2,
            title: "Flower Herbal Infusion",
            description: "Nourish your mind and soul with the tranquil balance of this combo housing butterfly pea flower.",
            defaultImage: "https://bluetea.co.in/cdn/shop/files/Packof2_1800x1800_58fad682-3812-47ac-8d5c-32f2edcd5286.jpg?v=1718784395&width=1000",
            hoverImage: "https://bluetea.co.in/cdn/shop/files/EH50_ICEHOT_1800x1800_14ae86c5-e11a-4680-af4c-edb55dad103b.jpg?v=1718784693&width=1000"
        },
        {
            id: 3,
            title: "Combo-Butterfly Pea",
            description: "Soothe Yourself with our 100% Herbal, combo of Butterfly Pea ",
            defaultImage: "https://bluetea.co.in/cdn/shop/files/Front_1800x1800_e887cee6-2981-46b1-ad94-4ed1ae4fe6e7.jpg?v=1718707254&width=1000",
            hoverImage: "https://bluetea.co.in/cdn/shop/files/Glowing_Skin_with_hibiscus_2_2.jpg?v=1734506902&width=1000"
        },
        {
            id: 4,
            title: "Skin Glow Herbal Infusion",
            description: "Skin Glow Infusion specially made for hydrating & soothing the skin.",
            defaultImage: "https://bluetea.co.in/cdn/shop/files/SkinGlowFront.jpg?v=1721110940&width=1000",
            hoverImage: "https://bluetea.co.in/cdn/shop/files/SkinGlow_Lifestyle.jpg?v=1721110939&width=1000"
        }
    ];

    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="flex justify-center flex-wrap gap-8 p-6 bg-[#FFFFC9] relative min-h-screen">
            {product.map((chocolate) => (
                <div
                    key={chocolate.id}
                    className="w-64 flex flex-col items-center"
                    onMouseEnter={() => setHoveredCard(chocolate.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    <div className="overflow-hidden transition-all duration-300 h-[50vh] w-full">
                        <img
                            src={hoveredCard === chocolate.id ? chocolate.hoverImage : chocolate.defaultImage}
                            alt={chocolate.title}
                            className={`object-cover w-full h-full transition-all duration-300 ${hoveredCard === chocolate.id ? 'scale-110 rounded-3xl' : 'scale-100 rounded-xl'
                                }`}
                        />
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-center">{chocolate.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 text-center">{chocolate.description}</p>
                </div>
            ))}
            {/* <img
                className="absolute bottom-0 left-0 w-full z-10"
                src="data:image/svg+xml,%3csvg%20width='2096'%20height='268'%20viewBox='0%200%202096%20268'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M261.985%20129C260.916%2057.5729%20202.681%200%20131%200C59.3185%200%201.08396%2057.5729%200.0149573%20129H0V131V268H2096V131V129H2095.99C2094.92%2057.5729%202036.68%200%201965%200C1893.32%200%201835.08%2057.5729%201834.02%20129H1833.98C1832.92%2057.5729%201774.68%200%201703%200C1631.32%200%201573.08%2057.5729%201572.02%20129H1571.98C1570.92%2057.5729%201512.68%200%201441%200C1369.32%200%201311.08%2057.5729%201310.02%20129H1309.98C1308.92%2057.5729%201250.68%200%201179%200C1107.32%200%201049.08%2057.5729%201048.02%20129H1047.98C1046.92%2057.5729%20988.681%200%20917%200C845.319%200%20787.084%2057.5729%20786.015%20129H785.985C784.916%2057.5729%20726.681%200%20655%200C583.319%200%20525.084%2057.5729%20524.015%20129H523.985C522.916%2057.5729%20464.681%200%20393%200C321.319%200%20263.084%2057.5729%20262.015%20129H261.985Z'%20fill='%233c0549'/%3e%3c/svg%3e"
                alt="Wave SVG"
            /> */}
             <div className="absolute flex gap-20 -bottom-10 left-0 w-full z-10">
                <WaveSVG color="#3c0549"  />
                <WaveSVG color="#3c0549"  />
                <WaveSVG color="#3c0549"  />
 
                </div>
            {/* <WaveSVG color="#3c0549" className="absolute -bottom-10 left-0 w-full z-10" /> */}


        </div>
    );
}