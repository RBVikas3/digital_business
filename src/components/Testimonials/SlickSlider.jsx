import { testimonialsData } from '@/src/utils/data'
// import { settings } from 'eslint-config-next'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

const SlickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        touchMove: true,
        useCSS: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },

            {
                breakpoint: 768,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }
    return (
        <div>
            <Slider {...settings}>
                {
                    testimonialsData.map((Comment, i) => (
                        <div key={i} className='comment'>
                            {/* upper side */}
                            <div className="c-content">
                                <Image
                                    src={'/apos.svg'}
                                    className='apos-slider'
                                    alt='aops'
                                    width={40}
                                    height={30} />
                                <span>{Comment.comment}</span>
                            </div>

                            {/* lower side */}
                            <div className="c-info">
                                <div className="c-avator">
                                    {Comment.name[0]}
                                </div>
                                <div className="c-person">
                                    <span>{Comment.name}</span>
                                    <span>{Comment.profession}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default SlickSlider
