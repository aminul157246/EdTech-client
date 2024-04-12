import axios from 'axios';
import  {  useEffect, useState } from 'react';

import Tech from './Tech/Tech';

const Techs = () => {


    const [techs, setTech] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/tech')
            .then(res => {
                setTech(res.data);
                // console.log(res.data); // Make sure this logs the expected data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to execute once on component mount


    // console.log(techs);






    return (
        <div>
            {
                techs.map(tech => <Tech key={tech._id} item={tech}></Tech>)
            }
        </div>
    );
};

export default Techs;