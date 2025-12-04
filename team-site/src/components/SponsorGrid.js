import React from "react";
import "./SponsorGrid.css";

const sponsors = [
  "sponsor1.png",
  "sponsor2.png",
  "sponsor3.png",
  "sponsor4.png",
  "sponsor5.png",
  "sponsor6.png",
  "sponsor7.png",
  "sponsor8.png",
];

export default function SponsorGrid() {
  return (
    <div className="sponsor-grid">
      {sponsors.map((src, index) => (
        <img key={index} src={`/images/sponsors/${src}`} alt={`Sponsor ${index + 1}`} />
      ))}
    </div>
  );
}