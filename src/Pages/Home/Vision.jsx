
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Vision = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])


    return (
        <div className="lg:flex bg-gray-100 mt-12 p-4 md:p-8 lg:p-12   items-center gap-8">
            <div className="flex-1" data-aos="zoom-in-left">
                <img className="w-full lg:w-[600px]  p-12   " src='https://i.ibb.co/Byg5LJQ/loan.jpg' alt="" />
            </div>

            <div className="flex-1 " data-aos="zoom-in-right">
 
                <h3 className="text-5xl font-textStyle">Our <br />
                    <span className="font-bold ml-20"> Vision</span></h3>
                <p className="mt-6">Mazim saepe instructior mel ei, sanctus assueverit per at, ad eam veri putent nonumes. Id duo modo quidam maluisset, ut mel tractatos intellegat. Ea electram repudiandae qui. Ea soluta meliore accumsan vel, est veniam populo ea. Mel habeo elitr dissentiunt id, oratio fabulas lobortis te pri.</p>
                
                <div className="flex justify-center">
                <button className="px-5 ml-4 py-3 bg-yellow-400 mt-6 font-semibold">View More</button>
                </div>
            </div> 
        </div>
    );
};

export default Vision;