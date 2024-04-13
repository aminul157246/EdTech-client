import { NavLink } from 'react-router-dom';
import notFound from '../assets/404.jpg'
const NotFound = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Oops! Page not found</h2>
          <p className="mt-2 text-center text-sm text-gray-600">The page you are looking for does not exist.</p>
        </div>
        <div>
          <img className="mx-auto h-64" src={notFound} alt="404 Not Found" />
        </div>
      </div> <br />
      
    </div>

<div className='flex justify-center items-center -mt-24'>
<NavLink className='bg-blue-400 px-4 py-2' to={'/'}>Go Home</NavLink>
</div>
</>
  );
};

export default NotFound;
