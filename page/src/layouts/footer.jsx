import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footerInner}>
            {/* <div> */}
                <h4 className={styles.footerIogo}>DB손해보험 주식회사</h4>
                <div className={styles.footerInfo}>
                    {/* 첫 번째 박스 */}
                    <div className={styles.infoArea}>
                        <ul className={styles.liList}>
                            <ul className={styles.liList}>
                                <li>대표이사 : 전종표</li>
                                <li className={styles.before}>사업자등록번호 : 201-81-45593</li>
                            </ul>
                            <li>서울시 강남구 테헤란로 432(대치동, DB금융센터) (우)06194</li>
                        </ul>
                        <p className={styles.corp}>ⓒ DB INSURANCE Co., Ltd.ALL RIGHTS RESERVED.</p>
                    </div>

                    {/* 두 번째 박스 */}
                    <div className={styles.linkArea}>
                        <div className={styles.linkColumn}>
                            <b>개인정보처리방침</b>
                            <p>서비스이용약관</p>
                            <p>전자금융고래약관</p>
                        </div>
                        <div className={styles.linkColumn}>
                            <p>개인정보관리책인자</p>
                            <p>전자금융거래책임자</p>
                        </div>
                        <div className={styles.linkColumn}>
                            <p>공시실</p>
                            <p>신고센터</p>
                            <p>유의사항</p>
                        </div>
                    </div>

                    {/* 세 번째 박스 */}
                    <div className={styles.telArea}>
                        <p>인터넷 고객지원센터</p>
                        <b>1600-0100</b>
                        <p>자동차보험 전화가입</p>
                        <b>1566-0015</b>
                        <p>긴급출동/사고접수</p>
                        <b>1588-0100</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;