import React from 'react';
import './WhoWeInvest.css';
import { features, whoWeInvest } from '@/src/utils/data';
import { motion } from 'framer-motion';
import { containerVariants, tagVaraints, titleVaraints } from '@/src/utils/animation';

const WhoWeInvest = () => {
    return (
        <div className="wwi-wrapper">
            <div className="container">
                <div className="wwi-container">
                    {/* left side */}
                    <div className="wwi-left">
                        <div className="head">
                            <motion.span
                                variants={tagVaraints}
                                initial='offscreen'
                                whileInView={'onscreen'}
                                className='tag'>Who we invest in</motion.span>
                            <motion.span
                                variants={titleVaraints}
                                initial='offscreen'
                                whileInView={'onscreen'}
                                className='title'>Digital Businesses<br />with early tranction</motion.span>
                        </div>

                        {/* features */}
                        <div className="wwi-features">
                            {
                                whoWeInvest.map((features, i) => (
                                    <motion.div
                                        variants={containerVariants(i * 0.05 + 1)}
                                        initial='offscreen'
                                        whileInView={'onscreen'}
                                        className='wwi-feature'
                                        key={i}>
                                        <span className='des'>{features.title}</span>
                                        <span className='text'>{features.des}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>

                    {/* right side */}
                    <div className="wwi-right">
                        <motion.img
                            variants={containerVariants(0.5)}
                            initial='offscreen'
                            whileInView={'onscreen'}
                            src="persons.png"
                            alt="persons" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeInvest