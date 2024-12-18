import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Mr. Anand Mishra , Gurugram",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be",
    star:"⭐⭐⭐⭐⭐",

    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Mr. Ashish Soni , New Delhi",
    text: "Outstanding Keendroid Their expertise and dedication to excellence are truly commendable. They delivered exactly what we needed, exceeding our expectations. Highly recommended!",
    img: "https://picsum.photos/102/102",
    star:"⭐⭐⭐⭐",

  },
  {
    id: 1,
    name: "Biswajit Singh , jaipur",
    text: "Absolutely stellar experience working with this Keendroid. Their team was incredibly knowledgeable, responsive, and delivered exceptional results. Highly recommend for any tech project!",
    img: "https://picsum.photos/103/103",
    star:"⭐⭐⭐",

  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "38px",
                fontWeight: "700",
                color: "#ab0000",
              }}
            >
              Customer Reviews
            </h1>
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img,star }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      {/* <img 
                        style={{borderRadius:"12PX", width:"30VW",height:"40VH", marginTop:"20PX"}}
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      /> */}
                      <div className="space-y-4" style={{marginTop:"30px",textAlign:"center"}}>
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                        <h3>{star}</h3>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
