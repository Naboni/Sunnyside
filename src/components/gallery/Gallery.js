import React, { useEffect, useState } from 'react';
import './Gallery.css'
import image1 from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import image1Mob from '../../assets/images/mobile/image-gallery-milkbottles.jpg'
import image2 from '../../assets/images/desktop/image-gallery-orange.jpg'
import image2Mob from '../../assets/images/mobile/image-gallery-orange.jpg'
import image3 from '../../assets/images/desktop/image-gallery-cone.jpg'
import image3Mob from '../../assets/images/mobile/image-gallery-cone.jpg'
import image4 from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'
import image4Mob from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg'



export default function Gallery() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const milkBot = windowWidth >= 769 ? image1 : image1Mob;
    const orange = windowWidth >= 769 ? image2 : image2Mob;
    const cone = windowWidth >= 769 ? image3 : image3Mob;
    const sugarCubes = windowWidth >= 769 ? image4 : image4Mob;

    useEffect(() => {

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        };

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }

    }, [])
    return (
        <>
            <div className='gallery'>
                <img src={milkBot} alt="" className='gallery-img' />
                <img src={orange} alt="" className='gallery-img' />
                <img src={cone} alt="" className='gallery-img' />
                <img src={sugarCubes} alt="" className='gallery-img' />
            </div>
        </>
    );
}
