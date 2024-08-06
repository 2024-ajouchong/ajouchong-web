import React from 'react';
import styles from './styles.scss';
import Slider from 'react-slick';

const Main = (props, context) => (
    <div className={styles.root}>
        <div className={styles.title}>
            <div className={styles.subttile}>
                아주대학교 제43대 총학생회 아우름
            </div>
            <div className={styles.maintitle}>
                AJOU UNIV.
            </div>
        </div>
        <div className={styles.box}>
            <Slider
                className={styles.topslider}
                {...settings}
                autoplay="true"
                infinite="true"
            >
                <div className={styles.selector}>
                    <img
                        className={styles.img}
                        src={require('components/_common/Images/Main/s2.jpeg')}
                        alt="main"
                    />
                </div>
                <div className={styles.selector}>
                    <img
                        className={styles.img}
                        src={require('components/_common/Images/Main/s3.jpeg')}
                        alt="main"
                    />
                </div>
                <div className={styles.selector}>
                    <img
                        className={styles.img}
                        src={require('components/_common/Images/Main/s1.jpeg')}
                        alt="main"
                    />
                </div>
                <div className={styles.selector}>
                    <img
                        className={styles.img}
                        src={require('components/_common/Images/Main/1.jpg')}
                        alt="main"
                    />
                </div>
                <div className={styles.selector}>
                    <img
                        className={styles.img}
                        src={require('components/_common/Images/Main/2.jpg')}
                        alt="main"
                    />
                </div>
                <div className={styles.selector}>
                    <img
                        className={styles.img}
                        src={require('components/_common/Images/Main/5.jpg')}
                        alt="main"
                    />
                </div>
            </Slider>
        </div>
    </div>
            );
export default Main;