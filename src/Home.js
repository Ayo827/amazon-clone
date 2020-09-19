import React, {useState} from 'react';
import './Home.css';
import Product from './Product';
// import Carousal from 'react-elastic-carousel'
// import {Transition, CSSTransition} from 'react-transition-group'
// import Image from './image'
// import FlipMove from 'react-flip-move'
// import { duration } from 'moment';
// import transitions from '@material-ui/core/styles/transitions';
//About React-transition-group
// in: is a boolean prop. value is true e=when componet is entering and false when exiting
//timeout: sets the duraation of the each transition(appear, enter, exits)

// class Image_ extends React.Component{
//     <FlipMove 
//                         duration={150}
//                         appearAnimation='accordionHorizontal'
//                     enterAnimation={'fade',{
//                         from:{
//                             opacity: 0.1,
//                         }, 
//                         to:{
//                             transform: '',
//                             animation: 'autoplay'
//                         }
//                     }}
//                     leaveAnimation={'fade',{
//                         from:{
//                             transform: '',
//                             animation: 'autoplay'
//                         },
//                         to:{
//                             opacity: 0.1
//                         }
//                     }}
//                     >
//                     {this.state.Home__Image.map(image => (
//                         <Image_ key={image.id} {...image} />
//                     ))}
//             </FlipMove>
//     render(){
//         return(
//               <div>
//                     {this.props.image}
//               </div>
              
//         )
//     }
// }


class Home extends React.Component{
//     const [slide, setSlide] = useState();


    //     const Gator = ({in: inProp}) => {
    //         return (
    //         <CSSTransition in={inProp} timeout={500} className='pic'>
    //             <div> 
    //             {slide?.map(image => {
    //                 <Image styles = {image} />
    //             })}
               
    //             </div>
    //         </CSSTransition>
    //     );
    // };

//     state={ Home__Image: [{id: 1, image: `https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg` },
//     {id: 2, image:   `https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg`}]
// }

    
 render(){
        var B__Image = [
        `https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg`,
        `https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg`,
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg'
        ]
    
     
        var ran = Math.floor((Math.random() * B__Image.length));
        var image = B__Image[ran];
         
       
       
           
    return(
        <div className='home'>
            <div className='home__container'>
                <div className='home__image'>
                <img className='home__image' src= {image} alt=''/>
                </div>
               
           
            <div className='home__row'>
                    <Product
                    id='12321341'
                    title='The lean startup: How Constant Innovation Creates Radically Successful Business Paperback' 
                    price={11.96}
                    rating= {5}
                    image= 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'  
                    />
                    
                    <Product
                    id='49538094'
                    title='BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games'
                    price={239.0}
                    rating={4}
                    image="data:image/webp;base64,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"  />
            </div>

            <div className='home__row'>
                    <Product 
                    id='4983850'
                    title="Samsung LC49RG98SSUXEN 49 ' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'  />
                    
                    <Product
                    id='23445930'
                    title= "Xbox Wireless Controller - Grey And Blue"
                    price={98.99}
                    rating={5}
                    image='data:image/webp;base64,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' />
                    
                    <Product 
                    id='3254354345'
                    title='New Apple IPad Pro (12.9-inch, Wi-Fi 128GB) Silver (4th Generation) '
                    price={98.99}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_5X385_.jpg'
                    />
            </div>

            <div className='home__row'>
                    <Product
                    id='90829332'
                    title='Samsung LC49RG98SSUXEN 48* Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440'
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
            </div>
         </div>
        </div>
    );
 }
};

export default Home;