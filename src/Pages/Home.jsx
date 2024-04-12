import axios from 'axios';
import  { useEffect, useState } from 'react';

const Home = () => {


    const [techs, setTech] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/tech')
            .then(res => {
                setTech(res.data);
                console.log(res.data); // Make sure this logs the expected data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array to execute once on component mount


    console.log(techs);
    return (
        <div>
            {
                techs.map(tech => <div key={tech._id}>


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={tech.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{tech.title}</h2>
                            <p>{tech.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add To Cart</button>
                            </div>
                        </div>
                    </div>



                </div>)
            }
        </div>
    );
};

export default Home;