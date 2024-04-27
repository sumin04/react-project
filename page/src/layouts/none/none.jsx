import React, { useState } from "react";
import styles from "./header.module.css"
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";
import { FaCarAlt } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiFillAlert } from "react-icons/ai";
import { SiAiqfome } from "react-icons/si";
import { VscGraphLine } from "react-icons/vsc";
import img from "../img/imgModule";

const Header = () => {
    // 메뉴 바
    const [menus, setMenus] = useState({
        menu1 : false,
        menu2 : false,
        menu3 : false,
        menu4 : false,
        menu5 : false,
        item1 : false,
    });
    // 마우스 가져갔을 때
    const handleMouseEnter = (key) => {
        setMenus((prevMenus) => ({
            ...prevMenus,
            [key] : true,
        }));
        console.log('키 값 true:',key);
    };
    // 마우스 뗐을 때
    const handleMouseLeave = (key) => {
        setMenus((prevMenus) => ({
            ...prevMenus,
            [key] : false,
        }));
        console.log('키 값 false :',key);
    };

    // mouseover


    return(
        <div className={styles.headerBox}>
            <div className={styles.menuBox}>
                <div className={styles.flexBox}>
                    <a href="/"><b>DB 손해보험 다이렉트</b></a>
                    <div className={styles.aBox}>
                        <a href="#"><b className={styles.corporate}>법인</b></a>
                        <a href="#" className={styles.line}>로그인</a>
                        <a href="#" className={styles.line}>인증센터</a>
                        <a href="#" className={styles.line}>공시실</a>
                        <a href="#">DB손해보험홈페이지</a>
                        <IoIosSearch></IoIosSearch>
                    </div>
                </div>
                <div className={styles.menu}>
                    {/* 보험가입 */}
                    <div className={styles.item}
                        onMouseEnter={() => handleMouseEnter('menu1')}
                        onMouseLeave={() => handleMouseLeave('menu1')}
                    >
                        보험가입
                    </div>
                    {/* 혜택/서비스 */}
                    <div className={styles.item}
                        onMouseEnter={() => handleMouseEnter('menu2')}
                        onMouseLeave={() => handleMouseLeave('menu2')}
                    >
                        혜택/서비스
                    </div>
                    {/* 계약관리 */}
                    <div className={styles.item}
                        onMouseEnter={() => handleMouseEnter('menu3')}
                        onMouseLeave={() => handleMouseLeave('menu3')}
                    >
                        계약관리
                    </div>
                    {/* 사고/보상 */}
                    <div className={styles.item}
                        onMouseEnter={() => handleMouseEnter('menu4')}
                        onMouseLeave={() => handleMouseLeave('menu4')}
                    >
                        사고/보상
                    </div>
                    {/* 고객지원 */}
                    <span className={styles.itemIconBox}>
                        <div className={styles.item}
                            onMouseEnter={() => handleMouseEnter('menu5')}
                            onMouseLeave={() => handleMouseLeave('menu5')}
                        >
                            고객지원
                        </div>
                        <div>
                            <a href="#"><BiShoppingBag className={styles.icon}></BiShoppingBag></a>
                            <a href="#"><FiMenu className={styles.icon}></FiMenu></a>
                        </div>
                    </span>
                    
                </div>
            </div>
            {/* <hr /> */}
            
            <div>
                {/* 보험가입 */}
                {menus.menu1 && <div className={styles.display}>
                    {/* 보험가입 */}
                    <div className={styles.gnbItem}>
                        <div className={styles.textBox}>
                            <b>자동차</b>
                            <p>자동차 보험</p>
                            <p>자동차보험할인특약안내</p>
                            <ul>
                                <li>주행거리할인특약</li>
                                <li>안전운전할인특약</li>
                                <li>Baby in car 할인특약</li>
                                <li>블랙박스할인특약</li>
                                <li>첨단안전장치할인특약</li>
                                <li>커넥티드카 할인특약</li>
                                <li>커넥티드카 안전운전할인특약</li>
                                <li>프로미하트나눔특약</li>
                            </ul>
                            <p>원데이자동차보험</p>
                            <p>자동차 고장수리비용보험</p>
                        </div>

                        <div className={styles.textBox}>
                            <b>이륜차</b>
                            <p>이륜차보험</p>
                        </div>
                    </div>
                    {/* 혜택/서비스 */}
                    <div className={styles.gnbItem}>
                        <div className={styles.textBox}>
                            <b>운전자</b>
                            <p>운전자 보험</p>
                            <p>안전운전UBI운전자보험</p>
                            <p>운전자보험(1년이내)</p>
                        </div>

                        <div className={styles.textBox}>
                            <b>이륜차운전자</b>
                            <p>오토바이운전자보험</p>
                            <p>킥보드운전자보험</p>
                        </div>
                    </div>
                    {/* 계약관리 */}
                    <div className={styles.gnbItem}>
                        <div className={styles.textBox}>
                            <b>건강</b>
                            <p>종합보험</p>
                            <p>암보험</p>
                            <p>치아보험</p>
                        </div>

                        <div className={styles.textBox}>
                            <b>자녀</b>
                            <p>자녀보험</p>
                            <p>치아보험(자녀)</p>
                            <p>유병자간편실손보험(자녀)</p>
                        </div>

                        <div className={styles.textBox}>
                            <b>실손</b>
                            <p>실손의료비보험</p>
                            <p>실손의료비보험(계약전환)</p>
                            <p>유병자간편실손보험</p>
                            <p>유병자간편실손보험(재가입)</p>
                        </div>
                    </div>
                    {/* 사고/보상 */}
                    <div className={styles.gnbItem}>
                        <div className={styles.textBox}>
                            <b>여행</b>
                            <p>해외여행보험</p>
                            <p>해외유학/장기체류보험</p>
                            <p>프리미엄해외여행보험</p>
                            <p>국내여행보험</p>
                        </div>

                        <div className={styles.textBox}>
                            <b>레저</b>
                            <p>오잘공골프보험(3년)</p>
                            <p>골프보험(1년이내)</p>
                            <p>OUTDOOR레저(스키)보험</p>
                        </div>

                        <div className={styles.textBox}>
                            <b>반려동물</b>
                            <p>펫블리반려견보험</p>
                            <p>펫보험(1년)</p>
                        </div>
                    </div>
                    {/* 고객지원 */}
                    <div className={styles.gnbItem}>
                        <div className={styles.textBox}>
                            <b>화재</b>
                            <p>가정보장보험(화재)</p>
                            <p>주택화재보험(3년이내)</p>
                        </div>

                        <div className={styles.textBox}>
                            <b>재산</b>
                            <p>재난배상책임보험(3년이내)</p>
                            <p>풍수해보험(소상공인)</p>
                            <p>개인정보보호책임보험Ⅱ</p>
                        </div>

                        <div className={styles.textBox}>
                            <b>연금</b>
                            <p>연금보험</p>
                        </div>

                        <div className={styles.textBox}>
                            <b>보장분석</b>
                            <p>내 보험 보장분석</p>
                        </div>

                        <div className={styles.textBox}>
                            <b>전화가입</b>
                            <p>전화가입안내</p>
                        </div>
                    </div>
                </div>}

                {/* 혜택/서비스 */}
                {menus.menu2 && <div className={styles.display}>
                    {/* 보험가입 */}
                    <div className={styles.gnbItem}>
                        <b>신용카드 혜택</b>
                        <p>결제혜택/캐시백</p>
                        <p>무이자할부</p>
                        <p>포인트결제</p>
                    </div>
                    {/* 혜택/서비스 */}
                    <div className={styles.gnbItem}>
                        <b>DB다이렉트 서비스</b>
                        <p>가입/이용후기</p>
                        <p>DB 다이렉트TV</p>
                    </div>
                    {/* 계약관리 */}
                    <div className={styles.gnbItem}>
                        <b>프로미카서비스</b>
                        <p>SOS서비스안내<img src={img.arrow} alt="화살표" /></p>
                        <p>오토케어서비스<img src={img.arrow} alt="화살표" /></p>
                        <p>협력정비업체<img src={img.arrow} alt="화살표" /></p>
                    </div>
                    {/* 사고/보상 */}
                    <div className={styles.gnbItem}>
                        <b>이벤트</b>
                        <p>진행중인이벤트</p>
                        <p>당첨자확인</p>
                    </div>
                    {/* 고객지원 */}
                    <div className={`${styles.gnbItem} ${styles.grayBox}`}>
                        <div className={styles.btmItem}>
                            <div className={styles.icon1}>
                                <IoIosCall className={styles.ICON}></IoIosCall>
                                <p>인터넷고객지원센터</p>
                            </div>
                            <b>1600-0100</b>
                        </div>
                        <div className={styles.btmItem}>
                            <div className={styles.icon1}>
                                <FaCarAlt className={styles.ICON}></FaCarAlt>
                                <p>자동차보험 전화가입</p>
                            </div>
                            <b>1566-0015</b>
                        </div>
                        <div className={styles.btmItem}>
                            <div className={styles.icon1}>
                                <IoDocumentTextSharp className={styles.ICON}></IoDocumentTextSharp>
                                <p>전화가입</p>
                            </div>
                            <b>1566-0100</b>
                        </div>
                    </div>
                </div>}

                {/* 계약관리 */}
                {menus.menu3 && <div className={styles.display}>
                    {/* 보험가입 */}
                    <div className={styles.gnbItem}>
                        <b>계약조회</b>
                        <p>계약조회</p>
                        <p>피보험자개인정보동의</p>
                        <p>증명서발급안내</p>
                    </div>
                    {/* 혜택/서비스 */}
                    <div className={styles.gnbItem}>
                        <b>계약변경</b>
                        <p>자동자보험계약변경</p>
                        <p>주행거리사진등록/정산</p>
                        <p>장기보험계약변경</p>
                        <p>일반보험계약변경</p>
                    </div>
                    {/* 계약관리 */}
                    <div className={styles.gnbItem}>
                        <b>취소/철회/해지</b>
                        <p>개시전취소/청약철회</p>
                        <p>해지안내</p>
                        <p>원데이자동차보험해지신청</p>
                    </div>
                    {/* 사고/보상 */}
                    <div className={styles.gnbItem}>
                        <b>보험료납입</b>
                        <p>납입내역조회<img src={img.arrow} alt="화살표" /></p>
                        <p>자동차분납보험료납입<img src={img.arrow} alt="화살표" /></p>
                        <p>장기보험보험료납입<img src={img.arrow} alt="화살표" /></p>
                        <p>연급보험추가납입<img src={img.arrow} alt="화살표" /></p>
                    </div>
                    {/* 고객지원 */}
                    <div className={styles.gnbItem}>
                        <b>보험계약대출</b>
                        <p>신용대출<img src={img.arrow} alt="화살표" /></p>
                        <p>신용대출현황조회<img src={img.arrow} alt="화살표" /></p>
                        <p>보험계약대출<img src={img.arrow} alt="화살표" /></p>
                        <p>보험계약대출현황조회<img src={img.arrow} alt="화살표" /></p>
                    </div>
                </div>}

                {/* 사고/보상 */}
                {menus.menu4 && <div className={styles.display}>
                    {/* 보험가입 */}
                    <div className={styles.gnbItem}>
                        <b>자동차보험</b>
                        <p>자동차긴급출동요청</p>
                        <p>DB V-System</p>
                        <p>자동차사고접수<img src={img.arrow} alt="화살표" /></p>
                        <p>보상처리내역조회<img src={img.arrow} alt="화살표" /></p>
                    </div>
                    {/* 혜택/서비스 */}
                    <div className={styles.gnbItem}>
                        <b>질병/상해보험</b>
                        <p>장기/일반보험금 청구<img src={img.arrow} alt="화살표" /></p>
                        <p>보상처리내역조회<img src={img.arrow} alt="화살표" /></p>
                    </div>
                    {/* 계약관리 */}
                    <div className={styles.gnbItem}>
                        <b>자동차보상가이드</b>
                        <p>교통사고대처요령</p>
                        <p>교통사고발생책임</p>
                        <p>보험처리할까?말까?<img src={img.arrow} alt="화살표" /></p>
                        <p>자동차간접손해보험금</p>
                        <p>음주수치알아보기</p>
                        <p>과실비율판정<img src={img.arrow} alt="화살표" /></p>
                    </div>
                    {/* 사고/보상 */}
                    <div className={styles.gnbItem}>
                        
                    </div>
                    {/* 고객지원 */}
                    <div className={styles.gnbItem}>
                        <div>
                            <div>
                                <IoIosCall />
                                <p>인터넷고객지원센터</p>
                                <b>1600-0100</b>    
                            </div>
                            <div>
                                <p>평일 09:00~18:00</p>
                                <p>토요일 09:00~13:00</p>
                            </div>
                            <div>
                                <AiFillAlert />
                                <p>긴급출동/사고접수</p>
                                <b>1566-0015</b>    
                            </div>
                        </div>
                        <div>
                            <p><SiAiqfome />챗봇상담</p>
                            <p><VscGraphLine />내보험보장분석</p>
                        </div>
                    </div>
                </div>}

                {/* 고객지원 */}
                {menus.menu5 && <div className={styles.display}>
                    {/* 보험가입 */}
                    <div className={styles.gnbItem}>
                        <b>상담문의</b>
                        <p>고객센터이용안내</p>
                        <p>자주묻는질문</p>
                        <p>챗봇상담</p>
                        <p>1:1보상상담<img src={img.arrow} alt="화살표" /></p>
                    </div>
                    {/* 혜택/서비스 */}
                    <div className={styles.gnbItem}>
                        <b>로그인/인증센터</b>
                        <p>로그인</p>
                        <p>인증센터</p>
                    </div>
                    {/* 계약관리 */}
                    <div className={styles.gnbItem}>
                        <b>회원정보관리</b>
                        <p>회원가입</p>
                        <p>회원탈퇴</p>
                        <p>고객정보/우편물수령처변경</p>
                        <p>수신거부설정</p>
                        <p>마케팅정보 동의철회</p>
                    </div>
                    {/* 사고/보상 */}
                    <div className={styles.gnbItem}>
                        <b>이용안내</b>
                        <p>공지사항</p>
                        <p>보안프로그램설치안내</p>
                        <p>모바일서비스안내</p>
                    </div>
                    {/* 고객지원 */}
                    <div className={styles.gnbItem}>
                        <b>소비자보호</b>
                        <p>전자민원접수<img src={img.arrow} alt="화살표" /></p>
                    </div>
                </div>}
            </div>
        </div>
    );

}
export default Header;