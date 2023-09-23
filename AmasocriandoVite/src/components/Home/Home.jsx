import React ,{useState}from "react";
import styles from "./Home.module.css"
import Card from "../Card/Card";
import Hero from "../Hero/Hero.jsx";
import { mock } from "../../utils/utils";
import { Outlet} from 'react-router-dom';

const Home = () => {
const [from ,setFrom ] = useState(0);
const [to , setTo] = useState(3);
const [opac ,setOpac] =useState("");

const handleNext = () =>{
    if(to >= 7) return;
    setOpac({transition : "2s" ,opacity: "0.0" });
    setTimeout(()=>{
        setFrom(to);
        setTo(to + 3);
        setOpac({transition : "1s" ,opacity: "1" });
    }, 1500)
;
};
const handlePrev = () =>{
    if (from === 0) return ;
    setOpac({transition : "2s" ,opacity: "0.0" });
    setTimeout(()=>{
        setFrom(from - 3);
        setTo(to - 3);
        setOpac({transition : "1s" ,opacity: "1" });
    },1500);
};
    return (
        <div className={styles.container}>   
           <div className={styles.content}>
            <Hero></Hero>
            <Outlet></Outlet>
           </div>
        </div> 
    )
};
export default Home;