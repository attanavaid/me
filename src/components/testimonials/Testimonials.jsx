import React from "react"
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    return (
        <section id = "testimonials">
            <h5>
                Reviews From My clients
            </h5>
            <h2>
                Testimonials
            </h2>

            <Swiper className = "container testimonials__container"
                    modules = {[Pagination]}
                    spaceBetween = {40}
                    slidesPerView = {1}
                    pagination = {{clickable: true}}>
                <SwiperSlide className = "testimonial">
                    <div className = "client__avatar">
                        <img src = {AVTR1} alt = "Client Avatar 1"/>
                    </div>
                    <h5 className = "client__name">
                        Ernest Achiever
                    </h5>
                    <small className = "client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Facilis consectetur suscipit error minima ab a, harum, 
                        esse laboriosam nesciunt ratione possimus? Vitae corporis 
                        tenetur saepe ex. Qui tempora libero voluptate.
                    </small>
                </SwiperSlide>

                <SwiperSlide className = "testimonial">
                    <div className = "client__avatar">
                        <img src = {AVTR2} alt = "Client Avatar 2"/>
                    </div>
                    <h5 className = "client__name">
                        John Doe
                    </h5>
                    <small className = "client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Facilis consectetur suscipit error minima ab a, harum, 
                        esse laboriosam nesciunt ratione possimus? Vitae corporis 
                        tenetur saepe ex. Qui tempora libero voluptate.
                    </small>
                </SwiperSlide>

                <SwiperSlide className = "testimonial">
                    <div className = "client__avatar">
                        <img src = {AVTR3} alt = "Client Avatar 3"/>
                    </div>
                    <h5 className = "client__name">
                        Carlos Patos
                    </h5>
                    <small className = "client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Facilis consectetur suscipit error minima ab a, harum, 
                        esse laboriosam nesciunt ratione possimus? Vitae corporis 
                        tenetur saepe ex. Qui tempora libero voluptate.
                    </small>
                </SwiperSlide>

                <SwiperSlide className = "testimonial">
                    <div className = "client__avatar">
                        <img src = {AVTR4} alt = "Client Avatar 4"/>
                    </div>
                    <h5 className = "client__name">
                        Malala Yousafzai
                    </h5>
                    <small className = "client__review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Facilis consectetur suscipit error minima ab a, harum, 
                        esse laboriosam nesciunt ratione possimus? Vitae corporis 
                        tenetur saepe ex. Qui tempora libero voluptate.
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials