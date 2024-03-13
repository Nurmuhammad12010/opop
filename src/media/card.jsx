
import './card1.css';
import React, { useEffect} from "react"
import { PiScalesFill } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
  function Card({img,title,price}){
    return (
        <>
        <div>
        <CiHeart className='ik' />
        <PiScalesFill className='ik ik1' />
        <img src= {img} alt="" />
        <h1>{title}</h1>
        <p>{price}</p>
        <button>добавить в корзину</button>
        </div>
        </>
    );}
  export default Card;
