import React from "react";
import { reviewsdata } from "./reviewsData";
import ReviewCard from "./ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews(){
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",
                borderRadius: "50%",
                background: "#c92e79",
                border: "2px solid #c92e79" }}
            onClick={onClick}
          />
        );
      }

    const dataShow = reviewsdata.map((items , index) => 
    <ReviewCard 
        key = {index}
        image = {items.img}
        name ={items.name}
        desc = {items.desc}
    />
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return(
        <React.Fragment>
            <div>
            <h2 className="title" style={{marginTop:"50px" , width:"120px"}} id="review">Reviews</h2>
            <div className="reviewCont">
            <div className="review">
                <Slider {...settings}>
                {dataShow}
                </Slider>
            </div>
            </div>
            </div>
        </React.Fragment>
    )
}