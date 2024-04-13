import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Link } from 'react-router-dom';



const Products = () => {

    const { user } = useContext(AuthContext)

    const [carts, setCart] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/carts?email=${user?.email}`)
            .then(res => {
                setCart(res.data);
                // console.log(res.data); // Make sure this logs the expected data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [user.email]); // Empty d

    // console.log(carts);
    const totalPrice = carts.reduce((acc, item) => acc + item?.cartItem?.price, 0);
    // console.log(totalPrice);


    // const stripe =  loadStripe('pk_test_51Oe7BxBFKVxdQIZ0stxU2e5n5EOaP1manIMB8H8ju0I5mpRttFnfQPOOsc9VfORjYmOi5PacjyyWCsWMpSSQkc5B00Li8wRA3p');





    

    return (
        <div>

            <div className="flex justify-center gap-12 items-center font-bold">
                <h2>Total Price : {totalPrice} $</h2>
                <Link to={'/payment'}><button className='btn btn-outline' >Payment</button></Link>
            </div>
            {
                carts.map(cart => <div key={cart._id}>

                    <h1>{cart.cartItem.title}</h1>
                    <h1>{cart.cartItem.price}</h1>

                </div>)
            }
        </div>
    );
};

export default Products;