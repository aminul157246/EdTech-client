import axios from 'axios';
import { useEffect, useState } from 'react';
import Tech from './Tech/Tech';

const Techs = () => {

    // products data fetching
    const [techs, setTech] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/tech')
            .then(res => {
                setTech(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <div className='grid grid-cols-3 gap-8'>
            {
                techs.map(tech => <Tech key={tech._id} item={tech}></Tech>)
            }
        </div>
    );
};

export default Techs;