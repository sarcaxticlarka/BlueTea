import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

export default function FAQAccordion() {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState("location");

  // FAQ data
  const faqs = [
    {
      id: "brand-story",
      question: "What makes Blue Tea different from other tea brands?",
      answer: "Blue Tea blends ancient Ayurvedic wisdom with nature’s purest ingredients to offer 100% organic, flower-based herbal teas sourced directly from farms."
    },
    {
      id: "health-benefits",
      question: "What are the health benefits of flower-based herbal infusions?",
      answer: "Our teas are rich in antioxidants, vitamins, and natural healing properties that support digestion, boost immunity, manage weight, reduce stress, and promote glowing skin."
    },
    {
      id: "product-range",
      question: "What types of products does Blue Tea offer?",
      answer: "We offer Butterfly Pea, Hibiscus, Chamomile, Rose, Jasmine, and more—available in teabags, loose-leaf tins, sampler packs, combo offers, and even tea accessories."
    },
    {
      id: "weight-management",
      question: "Which teas are best for weight management?",
      answer: "Our Slim Herbal Infusion, Belly Fat Herbal Infusion, and Butterfly Pea Flower Infusions are specially formulated to support weight loss and metabolism."
    },
    {
      id: "samplers",
      question: "Do you offer sample packs for new customers?",
      answer: "Yes, we have a variety of sampler packs like Butterfly Pea, Hibiscus, and Chamomile—each with 6 exciting flavors to explore before committing to larger packs."
    },
    {
      id: "accessories",
      question: "Do you sell tea accessories too?",
      answer: "Absolutely! Our accessories include tea infusers, insulated tumblers, and crystal glass tea cups to elevate your tea experience."
    }
  ];
  

  // Toggle FAQ open/close
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className=" mx-auto p-8 bg-[#8EC5FF] px-42 ">
      <div className="mb-6">
        <h1 className="text-6xl font-bold mb-2 ">FAQS</h1>
        <p className="text-2xl ">Have questions?</p>
        <p className="text-2xl ">We have answers!</p>
      </div>
      
      <div className="space-y-4 mb-20">
        {faqs.map((faq) => (
          <div 
            key={faq.id}
            className="bg-[#FEFCE9]  rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span className="text-3xl py-3 font-medium">{faq.question}</span>
              {openFAQ === faq.id ? (
                faq.id === "location" ? <X size={20} /> : <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            
            {openFAQ === faq.id && (
              <div className="p-4 pt-0 border-t border-gray-200">
                <p className="text-2xl py-2">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}