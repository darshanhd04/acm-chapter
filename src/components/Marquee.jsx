import React from 'react';
import '../styles/marquee.css';

const Marquee = () => {
    const companies = [
        "Microsoft", "Siemens", "Skysecure", "Scorpio Group", "EY", "CoinDCX", "Dell",
        "SpikedAI", "IISC", "Groww", "Deutsche Bank", "Samsung PRISM", "LinkedIn"
    ];

    return (
        <div className="marquee-section">
            <h2 className="marquee-title">Our Achievements</h2>
            <div className="marquee-container">
                <div className="marquee-content">
                    {companies.map((company, index) => (
                        <span key={index} className="marquee-item">{company}</span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {companies.map((company, index) => (
                        <span key={`dup-${index}`} className="marquee-item">{company}</span>
                    ))}
                    {companies.map((company, index) => (
                        <span key={`dup2-${index}`} className="marquee-item">{company}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
