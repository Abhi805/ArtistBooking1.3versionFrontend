import React from 'react';
import './CorporateEventPlanner.css'
import image1 from '../../components/CorporateEventPlanner/imagesss/accenture.jpeg';
import image2 from '../../components/CorporateEventPlanner/imagesss/axsibank.jpeg';
import image3 from '../../components/CorporateEventPlanner/imagesss/bankmaharastra.jpeg';
import image4 from '../../components/CorporateEventPlanner/imagesss/cipla.jpeg';
import image5 from '../../components/CorporateEventPlanner/imagesss/dabar.jpeg';
import image6 from '../../components/CorporateEventPlanner/imagesss/coii.jpeg';
import image7 from '../../components/CorporateEventPlanner/imagesss/dna.jpeg';
import image8 from '../../components/CorporateEventPlanner/imagesss/eag.jpeg';
import image9 from '../../components/CorporateEventPlanner/imagesss/hdfclife.jpeg';
import image10 from '../../components/CorporateEventPlanner/imagesss/herballife.jpeg';
import image11 from '../../components/CorporateEventPlanner/imagesss/hettich.jpeg';
import image12 from '../../components/CorporateEventPlanner/imagesss/incridableindia.jpeg';
import image13 from '../../components/CorporateEventPlanner/imagesss/lenskart.jpeg';
import image14 from '../../components/CorporateEventPlanner/imagesss/sopa.jpeg';

const CorporateEventPlanner = () => {
  return (   
    <section className="FirstCategory divforbg">
      <div className="container cont10">
        <div className="row">
          <div className="col-md-12 OOSHeader06 no-padding no-margin">
            <p className="PatternServices">
              <span className='fs-1' style={{fontWeight:"bold"}} > <span className='text-black' > CORPORATE</span> <span style={{color:"red"}}>EVENT PLANNER</span><span className='text-black' > IN INDORE </span></span> 
            </p>
            <br />  
            <p className="OOSShortDesc06 text-capitalize text-black">
              Are you looking for a hassle-free way to plan your next corporate event,
              wedding, or conference? GNVIndia is <span>India's leading online event planning platform</span>,
              offering comprehensive solutions tailored to meet your diverse needs. With transparent pricing and
              options available across Pan India, we make event planning seamless and stress-free.
            </p>
            <p><strong className='text-black'>Trusted by Leading Companies</strong></p>
            <div className="BottomFooterLogoContainer">
              <img title="accenture logo" className="PopLogoImg" src={image1} alt="accenture" />
              <img title="axsibank" className="PopLogoImg" src={image2} alt="axsibank" />
              <img title="bankmaharastra" className="PopLogoImg" src={image3} alt="bankmaharastra" />
              <img title="cipla" className="PopLogoImg" src={image4} alt="cipla" />
              <img title="dabar" className="PopLogoImg" src={image5} alt="dabar" />
              <img title="coii" className="PopLogoImg" src={image6} alt="coii" />
              <img title="dna" className="PopLogoImg" src={image7} alt="dna" />
              <img title="eag" className="PopLogoImg" src={image8} alt="eag" />
              <img title="hdfclife" className="PopLogoImg" src={image9} alt="hdfclife" />
              <img title="herballife" className="PopLogoImg" src={image10} alt="herballife" />
              <img title="hettich" className="PopLogoImg" src={image11} alt="hettich" />
              <img title="incridableindia" className="PopLogoImg" src={image12} alt="incridableindia" />
              <img title="lenskart" className="PopLogoImg" src={image13} alt="lenskart" />
              <img title="sopa" className="PopLogoImg" src={image14} alt="sopa" />

            </div>
          </div>
        </div>
      </div>
    </section>  
  );
};

export default CorporateEventPlanner;
