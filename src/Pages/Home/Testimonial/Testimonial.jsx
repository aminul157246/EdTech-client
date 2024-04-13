
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useState } from 'react';
import { useEffect } from 'react';

const Testimonial = () => {
    // useEffect(() => {
    //     AOS.init({
    //          duration: "1000"
    //     });

    // }, [])



    const [testimonials , setTestimonials] = useState([])
    useEffect(() => {
        fetch('testimonial.json')
        .then(response => response.json())
        .then(data => {
            setTestimonials(data)
        })
    }, [])

    return (
        <div className='' >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, A11y, Scrollbar]}
                className="mySwiper"
            >

{testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="bg-white rounded-lg shadow-md p-12 my-8">
          <img src={testimonial.image} alt="Testimonial" className="w-48 rounded-full mx-auto mb-4" />
          <h3 className="text-xl text-center font-textStyle font-semibold mb-2">{testimonial.name}</h3>
          <p className="text-gray-700 max-w-xl  mx-auto">{testimonial.testimonial}</p>
        </SwiperSlide>
      ))}
            </Swiper>
        </div>
    );
};

export default Testimonial;