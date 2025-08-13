// import React from 'react'
// import './trending.css'
// import trends from '../api/trend.json'
// export default function Trending() {
//     return (
//         <div className="trending-main-container">
//             <h1 id='trend'>Trending Now</h1>
//             <div className="trend-cards-container">
//                 {trends.map((trend,idx)=>{
//                     return( <div  key={idx} className="trend-cards">
//                     <img src={trend.img} alt="" />
//                     </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }

import React, { useState } from 'react';
import './trending.css';
import trends from '../api/trend.json';

export default function Trending() {
const [selectedTrend, setSelectedTrend] = useState(false);

  return (
    <div className="trending-main-container">
      <h1 id='trend'>Trending Now</h1>
      <div className="trend-cards-container">
        {trends.map((trend, idx) => (
          <div key={idx} className="trend-cards" onClick={() => {setSelectedTrend(trend)
            console.log(trend);
         }}>
            <img src={trend.img} alt={trend.title || ''} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTrend && (
        <div className="poster-modal-overlay" onClick={() => setSelectedTrend(false)}>
          <div className="poster-modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedTrend.img} alt={selectedTrend.title || ''} />
            <h2>{selectedTrend.title}</h2>
            <p>{selectedTrend.description}</p>
            <button onClick={() => setSelectedTrend(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
