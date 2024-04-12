import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Products = () => {

const {user} = useContext(AuthContext)

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

     console.log(carts);


    return (
        <div>
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