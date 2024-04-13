import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';



const Products = () => {

    const { user } = useContext(AuthContext)

    const [carts, setCart] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/carts?email=${user?.email}`)
            .then(res => {
                setCart(res.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [user.email]);

    const totalPrice = carts.reduce((acc, item) => acc + item?.cartItem?.price, 0);

    return (
        <div className='my-12'>

            <div className="flex-row md:flex lg:flex  justify-center gap-12 items-center font-bold">
                <h2 className='text-xl'>Total Price : {totalPrice} $</h2>
                <Link to={'/payment'}><button className='mt-8 lg:mt-0 md:mt-0  btn btn-primary' >Payment</button></Link>
            </div>
            {
                carts.map(cart => <div key={cart._id}>

                    <div className="card max-w-5xl mx-auto bg-base-100 shadow-xl  mt-6">
                        <div className="card-body lg:flex-row justify-between ">


                            <div className="lg:flex lg:gap-12">
                                <div>
                                    <img className="w-full lg:w-[250px] h-[200px] lg:h-[150px] rounded" src={cart.cartItem.image} alt="" />
                                </div>
                                <div className="space-y-1 mt-4">
                                    <h2 className="text-2xl font-semibold"> {cart.cartItem.title}</h2>

                                    <p>{cart.cartItem.description} </p>
                                    <p>Price: <span className="font-semibold">{cart.cartItem.price} $</span></p>
                                    <p>Instructor : <span className="font-semibold">{cart.cartItem.instructor}</span></p>
                                    <p>Level : <span className="font-semibold">{cart.cartItem.level}</span></p>
                                    <p>Duration : <span className="font-semibold">{cart.cartItem.duration}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Products;