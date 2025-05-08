import React from 'react';
import Slider from 'react-slick';
import '../styles/Products.css'; // Assuming you have a CSS file for styling

const Products = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
  };

  const sliderImages = [
    require('../logo/pro_banner1.jpg'), // Replace with actual image paths
    require('../logo/pro_banner2.jpg'),
    require('../logo/pro_banner4.jpg'),
  ];

  return (
    <div className="products-page">
      {/* Photo Slider */}
      <div className="products-slider">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="slider-image-container">
              <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Products Section */}
      <div className="products-container">
        <div className="products-content">
          <h2 className="products-title">PRODUCTS</h2>
          <p className="products-subtitle">
            Innovation and customization is at heart of our every product and service.
          </p>
          <p className="products-description">
            A rich repertoire of experience, best technology and skill sets enables us at Synnova to offer you 
            products and services as per your specific requirement without compromising on quality, 
            and at the same time, being kind to your budget.
          </p>
          <p className="products-footer">
            Be it any gear designs for any industry, we at Synnova deliver you the best.
          </p>
        </div>

        <div className="products-side-note">
          <p>
            We are geared to<br />
            provide products of the<br />
            highest quality which<br />
            are cost-effective and<br />
            time-efficient.
          </p>
        </div>
      </div>
      <div className="products-industries">
  <h3 className="industries-title">
  The gears and transmission products that we manufacture, are widely used in various industries
  </h3>
  <div className="industries-flex">
    <div className="industry-item">
      <img src={require('../logo/automotive_icon.jpg')} alt="Automotive" />
      <p>Automotive</p>
    </div>
    <div className="industry-item">
      <img src={require('../logo/agriculture_icon.jpg')} alt="Agriculture (Farm)" />
      <p>Agriculture (Farm)</p>
    </div>
    <div className="industry-item">
      <img src={require('../logo/heavy-ind_icon.jpg')} alt="Heavy Industries" />
      <p>Heavy Industries</p>
    </div>
    <div className="industry-item">
      <img src={require('../logo/earth-moving_icon.jpg')} alt="Earth Moving Equipment" />
      <p>Earth Moving Equipment</p>
    </div>
    <div className="industry-item">
      <img src={require('../logo/wind-energy_icon.jpg')} alt="Wind Energy" />
      <p>Wind Energy</p>
    </div>
    <div className="industry-item">
      <img src={require('../logo/construction_icon.jpg')} alt="Construction" />
      <p>Construction</p>
    </div>
    <div className="industry-item">
      <img src={require('../logo/plastic_icon.jpg')} alt="Plastic" />
      <p>Plastic</p>
    </div>
    <div className="industry-item">
      <img src={require('../logo/sugar_icon.jpg')} alt="Sugar etc." />
      <p>Sugar etc.</p>
    </div>
  </div>
</div>
<div className="infrastructure-section">
  <h2 className="infrastructure-title">INFRASTRUCTURE</h2>
  <h3 className="infrastructure-subtitle">Comprehensive Facilities. Advanced Technologies.</h3>
  <div className="infrastructure-content">
    <div className="infrastructure-left">
      <p>
        Experienced and dynamic management when complimented by a world-class infrastructure coupled results in high-quality products and services. 
        Keeping pace with fast-changing technology, Synnova has tied up with leading companies across the world to develop an infrastructure worthy of a leader.
      </p>
      <p>
        The Synnova facility comprises globally benchmarked divisions covering the entire spectrum from product development to dispatch. 
        This enables Synnova to provide accelerated development plus services such as reverse engineering to aid indigenisation programs.
      </p>
    </div>
   
  </div>
</div>
<div className="key-infrastructure">
  <h3 className="key-infrastructure-title">Key infrastructure at Synnova includes</h3>
  <div className="key-infrastructure-items">
    <div className="infrastructure-item">
      <span className="item-number">1</span>
      <p>GEAR CUTTING FACILITY &gt;&gt;</p>
    </div>
    <div className="infrastructure-item">
      <span className="item-number">2</span>
      <p>MEASUREMENT / LAB FACILITY &gt;&gt;</p>
    </div>
    <div className="infrastructure-item">
      <span className="item-number">3</span>
      <p>HEAT TREATMENT &gt;&gt;</p>
    </div>
  </div>
</div>
<div className="photo-slider">
  <Slider {...sliderSettings}>
    <div className="slider-item">
      <img src={require('../logo/infrastructure_img1.jpg')} alt="Photo 1" />
    </div>
    <div className="slider-item">
      <img src={require('../logo/infrastructure_img2.jpg')} alt="Photo 2" />
    </div>
    <div className="slider-item">
      <img src={require('../logo/infrastructure_img3.jpg')} alt="Photo 3" />
    </div>
    <div className="slider-item">
      <img src={require('../logo/infrastructure_img4.jpg')} alt="Photo 4" />
    </div>
  </Slider>
</div>
<div className="photo-slider2">
  <div className="photo-row">
    <div className="photo-item">
      <img src={require('../logo/Gear_Cutting_Facility_thumb.jpg')} alt="Gear Cutting Facility" />
      <p>Gear Cutting Facility</p>
    </div>
    <div className="photo-item">
      <img src={require('../logo/Measurement_Lab_Facility_thumb.jpg')} alt="Measurement & Lab Facility" />
      <p>Measurement & Lab Facility</p>
    </div>
    <div className="photo-item">
      <img src={require('../logo/Gear_Design_Development_thumb.jpg')} alt="Gear Design Development" />
      <p>Gear Design Development</p>
    </div>
    <div className="photo-item">
      <img src={require('../logo/Heat_Treatment_thumb.jpg')} alt="Heat Treatment" />
      <p>Heat Treatment</p>
    </div>
  </div>
  
</div>
    </div>
  );
};

export default Products;