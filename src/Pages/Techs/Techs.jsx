import axios from 'axios';
import { useEffect, useState } from 'react';
import Tech from './Tech/Tech';

const Techs = () => {

    // products data fetching
    const [techs, setTech] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://ed-tech-server-five.vercel.app/tech')
            .then(res => {
                setTech(res.data);
                setLoading(false)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    if(loading){
        return <div className='flex justify-center items-center'> <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></div>
    }

    return (
        <>
        <h2 className='text-5xl font-bold'>Categories : </h2>
        <div className='grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                techs?.map(tech => <Tech key={tech._id} item={tech}></Tech>)
            }
        </div>
        </>
    );
};

export default Techs;