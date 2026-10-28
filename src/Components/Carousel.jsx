import React from "react";
import Image1 from "./../assets/img1.webp"
import Image2 from "./../assets/img2.webp"
import Image3 from "./../assets/img3.webp"
import Image4 from "./../assets/img4.webp"
import ChervronLeft from "../Icon/ChevronLeft";
import ChervronRight from "../Icon/ChevronRight";

const ImageArray = [Image1 , Image2 , Image3 , Image4]

const Carousel = () =>{

    return (
        <div className="h-[60vh] w-screen">
            <img className="w-full h-full" src={Image1} alt=""/>

            <div className="">
                <ChervronLeft/>
            </div>
            <div className="">
                <ChervronRight/>
            </div>
        </div>
    )
}

export default Carousel 