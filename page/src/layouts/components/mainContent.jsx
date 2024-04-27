import React from "react";
import styles from "./mainContent.module.css";

import img from "../../img/imgModule";

const MainContents = () => {
    return(
        <div className={styles.productCar}>
            <div className={styles.mainTitle}>
                <h2 className={styles.tit}>자동차</h2>
            </div>
            <div className={styles.main}>
                <div className={styles.mainProductBox}>
                    <div className={`${styles.inner} ${styles.innerFirst}`}>
                        <strong>자동차보험</strong>
                        <p>자사 오프라인 대비<br/>
                        인터넷가입 평균 18.1% 저렴해요!<br/>
                        (24.2.15 보험시기 이전 17.7%)</p>
                        <button className={styles.btnFill}>계산/가입</button>
                        <button className={styles.btnLine}>갱신/재가입</button>
                    </div>
                    <div className={styles.imgBox}>
                        <img src={img.carImg} alt="자동차" />
                    </div>
                </div>

                <div className={styles.mainProductBox}>
                    <a href="#" className={styles.inner}>
                        <div className={styles.tBox}>
                            <div className={styles.titBox}>
                                <strong>이륜차보험</strong>
                                <img src={img.arrow} alt="차" />
                            </div>
                            <p>자사 오프라인 대비<br/>
                            평균 19.8% 저렴</p>
                        </div>
                        <div className={styles.iconBox}>
                            <div></div>
                            <img className={styles.icon} src={img.iconBike} alt="오도방구" />
                        </div>
                    </a>
                </div>

                <div className={styles.mainProductBox}>
                    <a href="#" className={styles.inner}>
                        <div className={styles.tBox}>
                            <div className={styles.titBox}>
                                <strong>자동차보험(법인)</strong>
                                <img src={img.arrow} alt="화살표" />
                            </div>
                            <p>자사 오프라인 대비<br/>
                            평균 18.1% 저렴<br/>
                            (24.2.15 보험시기  이전 17.7%)</p>
                        </div>
                        <div className={styles.iconBox}>
                            <div></div>
                            <img className={styles.icon} src={img.iconCar} alt="차" />
                        </div>
                    </a>
                </div>
            </div>
            <></>
            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
            {/* <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p>
            <p>qwer</p> */}
        </div>
    )
}
export default MainContents;