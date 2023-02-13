import React from "react";
import classes from './FirstPartw3yz.module.css';
import hmTpImg from '../../assets/images/hmTpImg.webp';


const FirstPartw3yz = () => {
    return (
        <section className={classes.div} >
            <div>


                <h6>Customizable design and complete e-commerce experience</h6>
                <h1>Create Your Own Professional
                    Website</h1>
                <h2>Build your own professional website in minutes with seamless drag and drop.
                    - no experience required.</h2>
                <button type="button" class="btn btn-primary">Try Now</button>

            </div>
            <div >
                <img id="myImg" src={hmTpImg} alt="my image w3yz" width="900" height="900" />
            </div>

        </section>
    )
}
export default FirstPartw3yz;