import { useContext } from 'react';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider/AuthProvider';



import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Tech = ({ item }) => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])



    const { image, title, description, price, instructor, level, duration } = item

    const { user } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()


    const handleAddToDatabase = () => {
        if (user && user?.email) {
            console.log(user.photoURL);



            const cartItem = {
                image, photo: user.photoURL, price, name: user.displayName, email: user?.email, title, description, instructor, level, duration

            }

            axios.post('https://ed-tech-server-five.vercel.app/carts', { cartItem })
                .then(res => {

                    console.log(res.data);

                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `added has been successful`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })

        }

        else {
            Swal.fire({
                title: "You have to login first",
                text: "please login in bistro!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: " Yes, Log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // send in login page
                    navigate('/login', { state: { from: location } })

                }
            });
        }
    }

    return (
        <div>
            <div data-aos="fade-up">


                <div className="rounded-xl lg:h-[650px] bg-base-100 shadow-xl">
                    <figure><img src={image} className='h-80 w-full' alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between gap-4'>
                            <div className='bg-gray-200 px-2 py-1 text-sm'>
                                <p >{level}</p>
                            </div>
                            <div className='bg-gray-200 px-2 py-1 text-sm'>
                                <p >{duration}</p>
                            </div>
                        </div>
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className='flex-row md:flex lg:flex  justify-between my-4'>
                            <div><p>Price : <span className='font-semibold text-lg'>{price} $</span></p></div>
                            <div><p>Instructor : <span className='font-semibold text-lg'>{instructor}</span></p></div>
                        </div>

                        <div className="card-actions justify-end">
                            <button onClick={handleAddToDatabase} className="btn btn-primary">Add To Cart</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Tech;