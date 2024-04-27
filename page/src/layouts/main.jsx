import React from "react";
import styles from "./main.module.css"
// import img from "../img/imgModule";
import ListItem from "./components/mainList-Item"
import SlideBanner from "./components/slideBanner"
import MainContents from "./components/mainContent";
// import { text } from "@fortawesome/fontawesome-svg-core";

const Main = () => {
    return(
        <main className={styles.main}>
            <div className={styles.contentInner}>
                <nav className={styles.mainNav}>
                    <p><a href="#">자동차</a></p>
                    <p><a href="#">운전자</a></p>
                    <p><a href="#">건강</a></p>
                    <p><a href="#">자녀</a></p>
                    <p><a href="#">반려동물</a></p>
                    <p><a href="#">주택화재</a></p>
                    <p><a href="#">여행</a></p>
                    <p><a href="#">레저</a></p>
                    <p><a href="#">실손</a></p>
                    <p><a href="#">연금/자산</a></p>
                    <p><a href="#">전화가입</a></p>
                    <p><a href="#">보장분석</a></p>
                    <p><a href="#">서비스</a></p>
                </nav>

                <div className={styles.contents}>
                    <div className={styles.mainProductList}>
                        <div className={styles.tit}>
                            <h1>
                                <strong>인기상품. </strong>
                                최근 조회가<br/>많은 상품들이에요
                            </h1>
                            {/* 슬라이드 배너 */}
                            <SlideBanner/>
                        </div>
                        {/* 리스트 아이템 */}
                        <ListItem />
                    </div>
                    <MainContents />
                    <MainContents />
                    {/* <div>
                        <h1>자동차</h1>
                        <div>
                            <div>
                                <strong>자동차보험</strong>
                                <p>자사 오프라인 대비<br/>
                                인터넷가입 평균 18.1% 저렴해요!<br/>
                                (24.2.15 보험시기 이전 17.7%)</p>
                                <button>계산/가입</button>
                                <button>갱신/재가입</button>
                            </div>
                            <div>
                                <strong>이륜차보험</strong>
                                <p>자사 오프라인 대비<br/>
                                평균 19.8% 저렴</p>
                            </div>
                            <div>
                                <strong>자동차보험(법인)</strong>
                                <p>자사 오프라인 대비<br/>
                                평균 18.1% 저렴<br/>
                                (24.2.15 보험시기  이전 17.7%)</p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
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
                        <p>qwer</p>
                        <p>qwer</p>
                    </div> */}
                </div>
            </div>
        </main>
    );
}

export default Main;