// const WaveSVG = ({ color = "#2D0A22", className = "" }) => {
//     const encodedSVG = encodeURIComponent(`
//       <svg width="2096" height="268" viewBox="0 0 2096 268" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path fill-rule="evenodd" clip-rule="evenodd" d="M261.985 129C260.916 57.5729 202.681 0 131 0C59.3185 0 1.08396 57.5729 0.0149573 129H0V131V268H2096V131V129H2095.99C2094.92 57.5729 2036.68 0 1965 0C1893.32 0 1835.08 57.5729 1834.02 129H1833.98C1832.92 57.5729 1774.68 0 1703 0C1631.32 0 1573.08 57.5729 1572.02 129H1571.98C1570.92 57.5729 1512.68 0 1441 0C1369.32 0 1311.08 57.5729 1310.02 129H1309.98C1308.92 57.5729 1250.68 0 1179 0C1107.32 0 1049.08 57.5729 1048.02 129H1047.98C1046.92 57.5729 988.681 0 917 0C845.319 0 787.084 57.5729 786.015 129H785.985C784.916 57.5729 726.681 0 655 0C583.319 0 525.084 57.5729 524.015 129H523.985C522.916 57.5729 464.681 0 393 0C321.319 0 263.084 57.5729 262.015 129H261.985Z" fill="currentColor"/>
//       </svg>
//     `);
  
//     return (
//       <img
//         className={className}
//         src={`data:image/svg+xml,${encodedSVG}`}
//         alt="Wave SVG"
//         style={{ color }}
//       />
//     );
//   };
  
//   export default WaveSVG;
  

// const WaveSVG = ({ color = "#2D0A22", className = "" }) => {
//     return (
//       <svg 
//         className={className}
//         width="2096" 
//         height="268" 
//         viewBox="0 0 2096 268" 
//         fill="none" 
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path 
//           fillRule="evenodd" 
//           clipRule="evenodd" 
//           d="M261.985 129C260.916 57.5729 202.681 0 131 0C59.3185 0 1.08396 57.5729 0.0149573 129H0V131V268H2096V131V129H2095.99C2094.92 57.5729 2036.68 0 1965 0C1893.32 0 1835.08 57.5729 1834.02 129H1833.98C1832.92 57.5729 1774.68 0 1703 0C1631.32 0 1573.08 57.5729 1572.02 129H1571.98C1570.92 57.5729 1512.68 0 1441 0C1369.32 0 1311.08 57.5729 1310.02 129H1309.98C1308.92 57.5729 1250.68 0 1179 0C1107.32 0 1049.08 57.5729 1048.02 129H1047.98C1046.92 57.5729 988.681 0 917 0C845.319 0 787.084 57.5729 786.015 129H785.985C784.916 57.5729 726.681 0 655 0C583.319 0 525.084 57.5729 524.015 129H523.985C522.916 57.5729 464.681 0 393 0C321.319 0 263.084 57.5729 262.015 129H261.985Z" 
//           fill={color}
//         />
//       </svg>
//     );
//   };
  
//   export default WaveSVG;

import React from "react";

const WaveSVG = ({ color = "#2D0A22", className = "" }) => {
  return (
    <>
      <div className={`wave-animation-wrapper`}>
        <Wave color={color} />
        <Wave color={color} />
      </div>

      <style jsx>{`
        .wave-animation-wrapper {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%; /* Two SVGs side by side */
          display: flex;
          animation: moveWave 30s linear infinite;
        }

        @keyframes moveWave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

// Split the SVG out for reuse
const Wave = ({ color = "#2D0A22" }) => (
  <svg
    width="2096"
    height="268"
    viewBox="0 0 2096 268"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M261.985 129C260.916 57.5729 202.681 0 131 0C59.3185 0 1.08396 57.5729 0.0149573 129H0V131V268H2096V131V129H2095.99C2094.92 57.5729 2036.68 0 1965 0C1893.32 0 1835.08 57.5729 1834.02 129H1833.98C1832.92 57.5729 1774.68 0 1703 0C1631.32 0 1573.08 57.5729 1572.02 129H1571.98C1570.92 57.5729 1512.68 0 1441 0C1369.32 0 1311.08 57.5729 1310.02 129H1309.98C1308.92 57.5729 1250.68 0 1179 0C1107.32 0 1049.08 57.5729 1048.02 129H1047.98C1046.92 57.5729 988.681 0 917 0C845.319 0 787.084 57.5729 786.015 129H785.985C784.916 57.5729 726.681 0 655 0C583.319 0 525.084 57.5729 524.015 129H523.985C522.916 57.5729 464.681 0 393 0C321.319 0 263.084 57.5729 262.015 129H261.985Z"
      fill={color}
    />
  </svg>
);

export default WaveSVG;
