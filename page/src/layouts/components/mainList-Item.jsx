import React from "react";
import img from "../../img/imgModule";
import styles from "./mainList.module.css"

const ListItem = () => {
    return(
        <div className={styles.listBox}>
            <li className={styles.list}>
                <a className={styles.link} href="#">
                    <img src={img.iconCar} alt="자동차" />
                </a>
                <a href="#">자동차보험</a>
            </li>

            <li className={styles.list}>
                <a className={styles.link} href="#">
                    <img src={img.iconBike} alt="오도방구" />
                </a>
                <a href="#">이륜차보험</a>
            </li>

            <li className={styles.list}>
                <a className={styles.link} href="#">
                    <img src={img.iconDrive} alt="운전자" />
                </a>
                <a href="#">운전자보험</a>
            </li>

            <li className={styles.list}>
                <a className={styles.link} href="#">
                    <img src={img.iconFamily} alt="가정" />
                </a>
                <a href="#">가정보장보험</a>
            </li>

            <li className={styles.list}>
                <a className={styles.link} href="#">
                    <img src={img.iconComprehensive} alt="종합" />
                </a>
                <a href="#">종합보험</a>
            </li>

            <li className={`${styles.list} ${styles.before}`}>
                <a className={styles.link} href="#">
                    <img src={img.iconPet} alt="반려견" />
                </a>
                <a href="#">펫블리반려견보험</a>
                <span><a className={styles.event} href="#">이벤트</a></span>
            </li>

            <li className={styles.list}>
                <a className={styles.link} href="#">
                    <img src={img.iconTrip} alt="해외여행" />
                </a>
                <a href="#">해외여행보험</a>
            </li>
        </div>
    )
}
export default ListItem;