import {React} from "react";
import {Interweave}  from "interweave";
import style from "../InfoBox/InfoBox.module.css";

function Infobox({ color, subtitle, text, img  }) {
  /* console.log(content) */
  return (
    <section className={style.container}>
      <div>
      <div className={style.divisionBar}></div>
        <h2 className={style.subtitle}>{subtitle}</h2>
        <div className={style.content}>
          <div className={style.text}>
            <Interweave content={text} />
          </div>
        </div>
        <div>
        
        </div>
        
      </div>
    </section>
  );
}

export default Infobox;