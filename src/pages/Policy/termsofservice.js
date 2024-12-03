import './styles.css';
import React from 'react';

const TermOfService = () => {
    return (
        <div className="context">
            <div className="contextTitle">이용약관</div>
            <hr className="titleSeparator"/>
            <div className="terms-content">
                <h2>개인정보 수집 및 이용</h2>

                <h3>수집하는 개인정보 항목</h3>
                <p>
                    개인정보보호법에 의거하여, 홈페이지는 원활한 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다: </p>
                <p>이름, 생년월일, 아이디, 비밀번호, 학번, 사번, 연락처, 주소, 이메일, 소속, 성별, 닉네임.

                </p>
                <p>
                    위에 명시한 개인정보 항목이 변경되어야 하거나 추가적으로 수집이 필요한 항목이 발생할 경우</p>
                    <p>아주대학교 이메일이나 홈페이지 내 공지사항 등을 통하여 별도의 동의 절차를 거쳐 변경요청·수집될 수 있습니다.
                </p>
                <p>
                    홈페이지 이용 과정에서 IP 주소, 접속 정보, 웹 브라우저 및 운영체제 정보 등이 자동으로 수집될 수 있습니다.
                </p>

                <h3>개인정보 수집 및 이용 목적</h3>
                <p>
                    가입 및 탈퇴 의사 확인, 회원 식별 및 관리, 아주대학교 소속 확인<br/>
                    서비스이용약관이나 개인정보 수집 항목 변경 등에 대한 공지 개별 발송<br/>
                    문의나 건의사항 등에 대한 응대 및 처리<br/>
                    회원 관리, 홈페이지 운영 및 유지보수를 위한 데이터 분석 및 통계 처리
                </p>

                <h3>개인정보 보유 및 이용 기간</h3>
                <p>
                    회원탈퇴나 개인정보 수집 및 이용 동의 철회 등의 이유로 개인정보 수집 및 이용 목적이 달성되면 수집된 개인정보는 ((보관 기간)) 복구 불가능한 방법으로 파기합니다.
                </p>

                <h3>동의를 거부할 권리 및 동의 거부에 따른 불이익</h3>
                <p>
                    사용자는 개인정보 수집 및 이용에 동의하지 않을 권리가 있으며, 회원탈퇴를 통해 언제든지 개인정보 수집 및 이용 동의를 철회할 권리가 있습니다.</p>
                <p>  그러나 개인정보 수집 이용에 대한 동의를 거부하거나 철회할 경우 홈페이지 및 서비스의 이용이 제한될/불가할 수 있습니다.
                </p>
            </div>
        </div>
    );
}

export default TermOfService;
