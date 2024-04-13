import Techs from '../Techs/Techs';
import Banner from './Banner/Banner';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Techs/>
            <Home/>
            <Testimonial/>
        </div>
    );
};

export default Home;