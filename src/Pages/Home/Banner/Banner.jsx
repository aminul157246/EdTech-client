import bannerImg1 from '../../../assets/edu-tech-1.jpg';
import bannerImg2 from '../../../assets/edu-tech-2.jpg';
import bannerImg3 from '../../../assets/edu-tech-3.jpg';
import bannerImg4 from '../../../assets/edu-tech-4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




const Banner = () => {
    return (
        <div>



            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>




                    <div
                        className="relative h-[60vh] md:h-[60vh] mb-12 lg:h-[90vh]"
                        style={{
                            backgroundImage: `url(${bannerImg4})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}
                    >
                        <div
                            className="absolute inset-0 bg-black opacity-50"
                        ></div>
                        <div className="absolute top-16 md:top-24 lg:top-48 left-10 md:left-24 lg:left-48 z-10 space-y-3">
                            <div className="border-l-red-500 border-l-4  text-white"><p className='pl-4'>Weapon in education</p></div>
                            <h2 className="text-2xl lg:text-6xl font-bold text-white font-Vidaloka">

                                Think out of the box and  <br />
                                create a learning learner
                            </h2>
                            <p className="text-white">
                                EdTech support student by introducing collaborators outsider, internship  and   research <br />experience abroad
                                and its takes skills and time to make it all look easy going{" "}
                            </p>
                            <button className="bg-blue-500 text-white rounded-3xl px-5 py-3">
                                Online request
                            </button>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>


                    <div
                        className="relative h-[60vh] md:h-[60vh] mb-12 lg:h-[90vh]"
                        style={{
                            backgroundImage: `url(${bannerImg1})`,
                        }}
                    >
                        <div
                            className="absolute inset-0 bg-black opacity-50"
                        ></div>
                        <div className="absolute top-16 md:top-24 lg:top-48 left-10 md:left-24 lg:left-48 z-10 space-y-3">
                            <div className="border-l-red-500 border-l-4  text-white"><p className='pl-4'>Weapon in education</p></div>
                            <h2 className="text-2xl lg:text-6xl font-bold text-white font-Vidaloka">

                                Think out of the box and  <br />
                                create a learning learner
                            </h2>
                            <p className="text-white">
                                EdTech support student by introducing collaborators outsider, internship  and   research <br />experience abroad
                                and its takes skills and time to make it all look easy going{" "}
                            </p>
                            <button className="bg-blue-500 text-white rounded-3xl px-5 py-3">
                                Online request
                            </button>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>

                    <div
                        className="relative h-[60vh] md:h-[60vh] mb-12 lg:h-[90vh]"
                        style={{
                            backgroundImage: `url(${bannerImg2})`,
                        }}
                    >
                        <div
                            className="absolute inset-0 bg-black opacity-50"
                        ></div>
                        <div className="absolute top-16 md:top-24 lg:top-48 left-10 md:left-24 lg:left-48 z-10 space-y-3">
                            <div className="border-l-red-500 border-l-4  text-white"><p className='pl-4'>Weapon in education</p></div>
                            <h2 className="text-2xl lg:text-6xl font-bold text-white font-Vidaloka">

                                Think out of the box and  <br />
                                create a learning learner
                            </h2>
                            <p className="text-white">
                                EdTech support student by introducing collaborators outsider, internship  and   research <br />experience abroad
                                and its takes skills and time to make it all look easy going{" "}
                            </p>
                            <button className="bg-blue-500 text-white rounded-3xl px-5 py-3">
                                Online request
                            </button>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>

                    <div
                        className="relative h-[60vh] md:h-[60vh] mb-12 lg:h-[90vh]"
                        style={{
                            backgroundImage: `url(${bannerImg3})`,
                        }}
                    >
                        <div
                            className="absolute inset-0 bg-black opacity-50"
                        ></div>
                        <div className="absolute top-16 md:top-24 lg:top-48 left-10 md:left-24 lg:left-48 z-10 space-y-3">
                            <div className="border-l-red-500 border-l-4  text-white"><p className='pl-4'>Weapon in education</p></div>
                            <h2 className="text-2xl lg:text-6xl font-bold text-white font-Vidaloka">

                                Think out of the box and  <br />
                                create a learning learner
                            </h2>
                            <p className="text-white">
                                EdTech support student by introducing collaborators outsider, internship  and   research <br />experience abroad
                                and its takes skills and time to make it all look easy going{" "}
                            </p>
                            <button className="bg-blue-500 text-white rounded-3xl px-5 py-3">
                                Online request
                            </button>
                        </div>
                    </div>


                </SwiperSlide>


            </Swiper>





        </div>
    );
};

export default Banner;