// import CountUp from 'react-countup';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CountUp from 'react-countup';


const Count = () => {


    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])


    return (

        <div data-aos="fade-up" className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-2xl md:text-4xl lg:text-5xl gap-4  shadow-lg bg-blue-50 p-12 mt-12">

            <div>
                <div className="flex  font-bold justify-center font-textStyle mt-4 ">
                    <h3 >$</h3>
                    <CountUp end={980} />
                    <h3>k</h3>
                </div>
                <h3 className='text-sm lg:text-xl text-center mt-3'>Median sold price</h3>
            </div>


           <div>
           <div className='flex font-bold justify-center font-textStyle mt-4'>
                <CountUp end={24} />
            </div>
                <h3 className='text-sm lg:text-xl mt-3 text-center'>Properties sold</h3>

           </div>

            <div>
                <div className="flex font-bold justify-center font-textStyle mt-4">
                    <h3 >$</h3>
                    <CountUp end={680} />
                    <h3>k</h3>
                </div>
                <h3 className='text-sm lg:text-xl text-center mt-3'>Median leased price</h3>
            </div>


          <div>
          <div className='flex font-bold justify-center font-textStyle mt-4'>
                <CountUp end={95} />
            </div>
                <h3 className='text-center text-sm lg:text-xl mt-3'>Properties leased</h3>

          </div>

            <div>
                <div className="flex font-bold justify-center font-textStyle mt-4">
                    <h3 >$</h3>
                    <CountUp end={722} />
                    <h3>k</h3>
                </div>
                <h3 className='text-sm lg:text-xl mt-3 text-center'>sales & rental transactions</h3>
            </div>


        </div>
    );
};

export default Count;