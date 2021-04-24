import React from 'react';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Testimonials from '../Testimonials/Testimonials';
import './Testimonial.css';


const Testimonial = () => {
    const testiMonialData = [
        {
            quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto unde ad quos iusto maxime ratione consequatur, expedita non aspernatur. Voluptates ratione possimus architecto laboriosam, quas recusandae voluptate in magnam molestias esse velit, doloribus distinctio molestiae! Quis facere quod temporibus dicta dolorem et facilis natus assumenda! Ab vel eius totam doloremque!',
            name: 'Wilson Harry',
            from: 'California',
            img: wilson
        },
        {
            quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto unde ad quos iusto maxime ratione consequatur, expedita non aspernatur. Voluptates ratione possimus architecto laboriosam, quas recusandae voluptate in magnam molestias esse velit, doloribus distinctio molestiae! Quis facere quod temporibus dicta dolorem et facilis natus assumenda! Ab vel eius totam doloremque!',
            name: 'Ema Gomez',
            from: 'California',
            img: ema
        },
        {
            quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto unde ad quos iusto maxime ratione consequatur, expedita non aspernatur. Voluptates ratione possimus architecto laboriosam, quas recusandae voluptate in magnam molestias esse velit, doloribus distinctio molestiae! Quis facere quod temporibus dicta dolorem et facilis natus assumenda! Ab vel eius totam doloremque!',
            name: 'Aliza Farari',
            from: 'California',
            img: aliza
        }
    ]
    return (
        <section className="testimonials my-5 py-5">
            <div className='container'>
                <div className='section-header'>
                    <h5 className='text-primary text-uppercase'>Testimonial</h5>
                    <h1>What Our Patients <br/>Says</h1>
                </div>
                <div className='card-deck mt-5'>
                    {testiMonialData.map(testimonial => <Testimonials testimonial={testimonial}></Testimonials>)}
                </div>
            </div>
            
        </section>
    );
};

export default Testimonial;