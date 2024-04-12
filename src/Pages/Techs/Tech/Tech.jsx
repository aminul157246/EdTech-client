import React from 'react';
import  { useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const Tech = ({item}) => {

    const {image , title, description,price,  instructor, level, duration} = item


// console.log(item);




const {user} = useContext(AuthContext)


const navigate = useNavigate()




    const handleAddToDatabase = () => {
        if (user && user?.email) {
            //something
            console.log(user.photoURL);



            const cartItem = {
                 image, photo: user.photoURL,price,  name: user.displayName, email: user?.email, title, description, instructor , level, duration

            }
            // console.log(cartItem);

            axios.post('http://localhost:3000/carts', { cartItem })
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
                        // refetch()
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
           <div >


<div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
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