

import { Link,  useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Google from '../Login/Google';

const Register = () => {

    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const Navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        // get field values 
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const password = event.target.password.value;


        // validation 
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/.test(password)) {
          
          toast.error("You should use valid password");
          return;
        }


        // creating a new user
        createUser(email, password)
            .then(res => {
              console.log(res.user);
                handleUpdateProfile(name, img)
                    .then(() => {
                        toast.success('User created successfully');
                        Navigate('/')

                    })
            })
            .catch(error => {
                toast.error(error.message)
            })




    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                <h1 className="text-5xl font-bold">Register now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" required placeholder="Full name" className="input input-bordered" name='name' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" required placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" required placeholder="image url" className="input input-bordered" name='img' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label> 
                                <input type="text" required placeholder="password" className="input input-bordered" name='password' />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral" type='submit'>Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>
                        </form>
                            <div className='flex justify-center mb-4'>
                            <Google/>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;