import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Parallax } from "swiper/modules";

import image1 from "../../assets/heroartist.png";
import image2 from "../../assets/herovenue.png";
import image3 from "../../assets/herorental.png";
import image4 from "../../assets/Web.png";
import image5 from "../../assets/herovolunteer.png";

import "./HeroSection.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="main-container">
      <Swiper
        className="mySwiper "
        loop={true}
        speed={4500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        parallax={true}
        modules={[Autoplay, Pagination, Parallax]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          992: { slidesPerView: 1 },
        }}
      >
        <div slot="container-start" data-swiper-parallax="-300"></div>
        <div>
          <SwiperSlide>
            <div className=" karlop" data-swiper-parallax="-100">
              <div className="container">
                <div className="row">
                  <div className="col-5 left-sec-hero">
                    <div className="content" data-swiper-parallax="-100">
                      <h5 className=" cold text-capitalize ">
                        Find your favorite artist in just one click.
                      </h5>
                      <p className="" style={{ fontWeight: "bolder" }}>
                        <span className="details-txt highlight text-capitalize herofont">
                          Planning an event? Book the perfect artist now - from
                          singers and dancers to DJs and performers, all in one
                          place.
                        </span>
                      </p>
                      <p className="cold">
                        Your event deserves star talent. From soulful singers to
                        high-energy performers, find and hire the best with GNV.
                      </p>
                      
                      <div className="contact-btn">
                        <Link
                          to="/ArtistBooking"
                          className="custom-btn primary-btn"
                        >
                          Explore Now <span>&rarr;</span>
                        </Link>
                        <Link
                          to="/ContactUs"
                          className="custom-btn outline-btn"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div data-swiper-parallax="-100">
                      <img src={image1} alt="Slide" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="karlop" data-swiper-parallax="-100">
              <div className="container">
                <div style={{ marginTop: "50px" }} className="row">
                  <div className="col-5 left-sec-hero">
                    <div data-swiper-parallax="-100">
                      <h5 className="cold text-capitalize">
                        Book Stunning Venues in Minutes — Only on GNV. es{" "}
                      </h5>
                      <p
                        className="  fs-2"
                        style={{ fontWeight: "bolder", fontSize: "30px" }}
                      >
                        <span className="details-txt text-black text-capitalize ">
                          Find & book your ideal hotel — fast, easy, and
                          trusted. Only on GNV.
                        </span>
                      </p>
                      <p className="cold text-capitalize">
                        Find your perfect hotel — from budget stays to premium
                        comfort. View photos, read reviews & book instantly,
                        hassle-free. Travel, business, or family — book now,
                        only on GNV.
                      </p>
                      <div className="contact-btn ">
                        <Link
                          to="/VenueBooking"
                          className="custom-btn primary-btn"
                        >
                          Explore Now <span>&rarr;</span>
                        </Link>
                        <Link
                          to="/ContactUs"
                          className="custom-btn outline-btn"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div data-swiper-parallax="-100">
                      <img src={image2} alt="Slide" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="karlop" data-swiper-parallax="-100">
              <div className="container">
                <div style={{ marginTop: "50px" }} className="row">
                  <div className="col-5 left-sec-hero">
                    <div data-swiper-parallax="-100">
                      <h5 className="cold text-capitalize">
                        The right equipment for every event — find and book
                        instantly.{" "}
                      </h5>
                      <p
                        className=" details-txt fs-2 text-capitalize"
                        style={{ fontWeight: "bolder", fontSize: "30px" }}
                      >
                        From weddings to concerts — rent sound, lights, decor &
                        more in one place, just a click away.
                      </p>
                      <p className="text-capitalize herofont">
                        Need sound, lights, or event gear? Explore trusted
                        suppliers with photos and reviews. Book quickly and
                        easily — only on GNV.
                      </p>
                      <div className=" contact-btn ">
                        <Link
                          to="/EventEquipmentRental"
                          className="custom-btn primary-btn"
                        >
                          Explore Now <span>&rarr;</span>
                        </Link>
                        <Link
                          to="/ContactUs"
                          className="custom-btn outline-btn"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div data-swiper-parallax="-100">
                      <img src={image3} alt="Slide" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="karlop" data-swiper-parallax="-100">
              <div className="container">
                <div style={{ marginTop: "50px" }} className="row">
                  <div className="col-5 left-sec-hero">
                    <div data-swiper-parallax="-100">
                      <h5 className="cold text-capitalize">
                        Your Event, Our Planning – Perfection Guaranteed!
                      </h5>
                      <p
                        className="fs-2"
                        style={{ fontWeight: "bolder", fontSize: "30px" }}
                      >
                        <span className="details-txt highlight text-capitalize herofont">
                          Your moments matter. We create lasting memories. Every
                          celebration deserves the best.
                        </span>
                        <span className="text-black herofont"></span>
                      </p>
                      <p className="text-capitalize">
                        Whether it’s a wedding, corporate event, birthday party,
                        or live concert — we plan it all according to your needs
                        and budget, so you stay stress-free and enjoy every
                        moment.
                      </p>

                      <div className=" contact-btn ">
                        <Link
                          to="/EventPlanner"
                          className="custom-btn primary-btn"
                        >
                          Explore Now <span>&rarr;</span>
                        </Link>
                        <Link
                          to="/ContactUs"
                          className="custom-btn outline-btn"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div data-swiper-parallax="-100">
                      <img src={image4} alt="Slide" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="karlop" data-swiper-parallax="-100">
              <div className="container">
                <div style={{ marginTop: "50px" }} className="row">
                  <div className="col-5  left-sec-hero">
                    <div data-swiper-parallax="-100">
                      <h5 className="cold text-capitalize">
                        Trained Volunteers for Every Event – Easy, Reliable &
                        Professional
                      </h5>
                      <p
                        className=" fs-2"
                        style={{ fontWeight: "bolder", fontSize: "30px" }}
                      >
                        <span className="details-txt text-black herofont text-capitalize">
                          {" "}
                          Book your volunteer team now – because every great
                          event needs strong ground support.
                        </span>
                      </p>
                      <p className="text-capitalize">
                        From managing guests to handling queues, registrations,
                        stage coordination, and crowd flow – we provide smart,
                        well-trained volunteers who make your event smooth,
                        organized, and successful.
                      </p>

                      <div className=" contact-btn ">
                        <Link
                          to="/VolunteerBooking"
                          className="custom-btn primary-btn"
                        >
                          Explore Now <span>&rarr;</span>
                        </Link>
                        <Link
                          to="/ContactUs"
                          className="custom-btn outline-btn"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div data-swiper-parallax="-100">
                      <img src={image5} alt="Slide" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
