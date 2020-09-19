import React from 'react';
import styled,{css, keyframes} from 'styled-components'

function Image(){
    const morph = keyframes`
     0%, 50%{background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg)},
     100%{background-image: url(https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg)}
     `;
     const animation = props => 
        css` ${morph} ${props.animationLength} 40s ease-in-out infinite;`

     const styles= styled.div `
         background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg);
        width: 100%;
        z-index: -1;
        margin-bottom: -150px;
        mask-image: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        animation: ${animation};
     `


    return(
       <div>
            <img src={styles} alt=''/>
       </div>
    )
}
export default Image


// <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=''/> 
// <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg' alt=''/>