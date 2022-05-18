import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper' //使いたい機能をインポート
import "swiper/swiper.min.css"

import {Grid} from "@mui/material"

SwiperCore.use([Pagination,Autoplay ,Navigation])

import Slide1  from "../../assets/images/slide1.jpg";
import Slide2  from "../../assets/images/slide2.jpg";
import Slide3  from "../../assets/images/slide3.jpg";
import Slide4  from "../../assets/images/slide4.jpg";

// カルーセルにする画像のソースをリストにします
const images = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
]

const TestCarousel = () => {
    return (
        <Grid container spacing={2} style={{marginTop:"-8px"}}>
            <Grid item xs={0} md={2}>
            </Grid>
            <Grid item xs={12} md={8}>
            <Swiper
                autoHeight={true}
                autoplay={{delay:3000,stopOnLastSlide: false,disableOnInteraction:false,reverseDirection:false}}
                slidesPerView={1} //一度に表示するスライドの数
                pagination={{
                    el: '.swiper-pagination',
                    type: "bullets",
                    clickable: true,
                }} //　何枚目のスライドかを示すアイコン、スライドの下の方にある
                navigation //スライドを前後させるためのボタン、スライドの左右にある
                loop={true}
            >
                {images.map((src: string, index: number) => {
                    return (
                        <SwiperSlide key={`${index}`} >
                            <img src={src}  alt="slideshow" style={{width:"100%"}}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </Grid>
            <Grid item xs={0} md={2}>

            </Grid>
        </Grid>
    )
}

export default TestCarousel
