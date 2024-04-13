import Techs from '../Techs/Techs';
import Banner from './Banner/Banner';
import Count from './Count';
import FAQ from './FAQ';
import Mission from './Mission';
import Testimonial from './Testimonial/Testimonial';
import Vision from './Vision';

const Home = () => {
    return (
        <div className='space-y-12'>
            <Banner />
            <Techs />
            <Mission/>
            {/* <Vision/>
            <Count />
            <Testimonial />
            <FAQ /> */}
        </div>
    );
};

export default Home;