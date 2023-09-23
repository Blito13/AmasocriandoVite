import React ,{useState}from "react";
import styles from "./Card.module.css";
import Infobox from "../InfoBox/InfoBox";
const Card = ({name , id , imgn , texto}) => {
    console.log(texto)
    const [open ,setOpen] = useState ({ marginLeft: "200%"});
    const handleMove = () => {
        setOpen({transition:'3s' , marginLeft:"50%"});
    };
    const handleLeave = () => {
        setOpen({transition:'3s',marginLeft:"200%"});
    };
return (
<div className={styles.container} onMouseMove={handleMove}  onMouseLeave={handleLeave}>
   <img className={styles.imgCont} src={imgn} alt="" />
   <div className={styles.details} style={open? open : null} >
       <Infobox
       text = {name}
       />
       <Infobox
       text = {texto}
       />
    </div>
</div>
)
};
export default Card;