import React from "react";  
import styles from './Body.module.css';
import { ArrowDown } from "react-feather";
function Body(){
    const color = ['239ce2',"#48bb79","#0bc5ea","#a0aec0","#e8936"]
    return (<div className={styles.container}>
        <p className={styles.heading}>
            Resume Builder
        </p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>{
                color.map((item)=>(
                    <spam key={item}
                    style={{ backgroundColor : item}}
                    className={styles.color}/>
                ))}
            </div>
            <button>Download <ArrowDown />
            </button>
        </div>
    </div>);
}

export default Body;