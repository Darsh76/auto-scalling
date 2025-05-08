import React from 'react';
import '../styles/Home.css';
import bannerImage from '../logo/Home-banner.jpg';

const Home = () => {
    return (
        <div className="home">
            {/* Banner Section */}
            <div className="container">
                <div className="banner">
                    <img src={bannerImage} alt="Synnova Banner" className="banner-image" />
                </div>

                {/* Feature Cards Section */}
                <div className="features">
                    <div className="feature-card">
                        <h3>AUTO SCALLING</h3>
                        <p>From design to delivery - we provide unmatched value for our customers...</p>
                        <a href="#">Read more</a>
                    </div>
                    <div className="feature-card">
                        <h3>CUSTOMIZED TO REQUIREMENTS</h3>
                        <p>Rich experience, best technology, and skill sets enable us to tailor-make products and services...</p>
                        <a href="#">Read more</a>
                    </div>
                    <div className="feature-card">
                        <h3>COMMITTED TO QUALITY</h3>
                        <p>At Synnova, our people are quality conscious, and our processes are quality certified...</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
