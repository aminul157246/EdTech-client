
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FAQ = () => {

    useEffect(() => {
        AOS.init({
             duration: "1000"
        });

    }, [])



    return (
        <div className="mt-12" data-aos="fade-up  ">
            <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold lg:font-semibold font-textStyle ml-4 mb-8">Frequently asked questions : </h3>
            <div className="collapse collapse-plus bg-base-200 ">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  What the first step of the home buying process?
  </div>
  <div className="collapse-content"> 
    <p>Buying a home can be challenging for a first-timer. After all, there are so many steps, tasks, and requirements, and you may be anxious about making an expensive mistake. But first-time homebuyers enjoy some special advantages created to encourage new entrants into the real estate market.

To demystify the process, so you get the most out of your purchase, here is a rundown of what you need to consider before you buy and what you can expect from the buying process itself, plus tips to make life easier after you buy your first home.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  How should I prepare my house before selling it?
  </div>
  <div className="collapse-content"> 
    <p>Vim ne munere melius tritani, stet dolore disputationi an per, ea libris aliquid vix. Per ex odio nihil, ei eam illum porro vituperatoribus. Sed no justo nihil, ad est nemore explicari signiferumque, sed tota facer appetere et. Qui eu libris molestie comprehensam. Sale iisque epicurei cu pro, inermis efficiantur no est, ex elit utroque abhorreant sed.

 

Lorem ipsum dolor sit amet, error ullamcorper in sit, nam mazim laoreet delectus eu. Vis id atqui quodsi. Commune constituam quo an, ad eum quas augue aliquip. Sed cu oratio legendos. Mea et wisi recteque, bonorum probatus phaedrum sit at, id nec vidit inciderint possit pertinax delicata his ut.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What is the first step in buying a home?
  </div>
  <div className="collapse-content"> 
    <p>Vim ne munere melius tritani, stet dolore disputationi an per, ea libris aliquid vix. Per ex odio nihil, ei eam illum porro vituperatoribus. Sed no justo nihil, ad est nemore explicari signiferumque, sed tota facer appetere et. Qui eu libris molestie comprehensam. Sale iisque epicurei cu pro, inermis efficiantur no est, ex elit utroque abhorreant sed.

 

Lorem ipsum dolor sit amet, error ullamcorper in sit, nam mazim laoreet delectus eu. Vis id atqui quodsi. Commune constituam quo an, ad eum quas augue aliquip. Sed cu oratio legendos. Mea et wisi recteque, bonorum probatus phaedrum sit at, id nec vidit inciderint possit pertinax delicata his ut.</p>
  </div>
</div>


            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  Should I sell my current property before buying a new one?
  </div>
  <div className="collapse-content"> 
    <p>Buying a home can be challenging for a first-timer. After all, there are so many steps, tasks, and requirements, and you may be anxious about making an expensive mistake. But first-time homebuyers enjoy some special advantages created to encourage new entrants into the real estate market.

To demystify the process, so you get the most out of your purchase, here is a rundown of what you need to consider before you buy and what you can expect from the buying process itself, plus tips to make life easier after you buy your first home.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  How many houses should I view before purchasing one?
  </div>
  <div className="collapse-content"> 
    <p>Vim ne munere melius tritani, stet dolore disputationi an per, ea libris aliquid vix. Per ex odio nihil, ei eam illum porro vituperatoribus. Sed no justo nihil, ad est nemore explicari signiferumque, sed tota facer appetere et. Qui eu libris molestie comprehensam. Sale iisque epicurei cu pro, inermis efficiantur no est, ex elit utroque abhorreant sed.

 

Lorem ipsum dolor sit amet, error ullamcorper in sit, nam mazim laoreet delectus eu. Vis id atqui quodsi. Commune constituam quo an, ad eum quas augue aliquip. Sed cu oratio legendos. Mea et wisi recteque, bonorum probatus phaedrum sit at, id nec vidit inciderint possit pertinax delicata his ut.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What happens if I decide to back out of buying a house?
  </div>
  <div className="collapse-content"> 
    <p>Vim ne munere melius tritani, stet dolore disputationi an per, ea libris aliquid vix. Per ex odio nihil, ei eam illum porro vituperatoribus. Sed no justo nihil, ad est nemore explicari signiferumque, sed tota facer appetere et. Qui eu libris molestie comprehensam. Sale iisque epicurei cu pro, inermis efficiantur no est, ex elit utroque abhorreant sed.

 

Lorem ipsum dolor sit amet, error ullamcorper in sit, nam mazim laoreet delectus eu. Vis id atqui quodsi. Commune constituam quo an, ad eum quas augue aliquip. Sed cu oratio legendos. Mea et wisi recteque, bonorum probatus phaedrum sit at, id nec vidit inciderint possit pertinax delicata his ut.</p>
  </div>
</div>
        </div>
    );
};

export default FAQ;