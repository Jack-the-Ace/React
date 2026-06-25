import { Component, Fragment } from "react";
import styled from 'styled-components'

// src/assets 폴더 안에 있는 이미지ㅍㅏ일읗 불러와서 변수로 저장
import logo_insta from './assets/instagram-logo.png'
import logo_facebook from './assets/facebook-logo.png'

// css파일 불러오기
import './Home.css'

class Home extends Component{
    render(){
        return(
            // <Fragment>
            //     <p>Hello</p>
            //     <p>Nice</p>
            // </Fragment>
            // 여러개를 리턴하기 위해 div 묶었더니.. 중첩이 길어짐.. 필요없을 수도 있음
            // 그래서 등장한 그냥 묶어만 주고 실제 요소가 되지않는 컴포넌트(화면의 일부-파편): Fragment
            // 단, 실제 요소가 아니기에 스타일 등.. 어떤 속성도 적용할 수 없음.
            // 실제 요소가 아니기에 Fragment라는 글씨가 보이는 것도 싫어..
            <>
                <p>Good</p>
                <p>Nice</p>

                {/* 레이아웃 연습 (3개의 요소를 배치 - flex스타일) : styled-components*/}
                <Root>
                    <div>Resion #1</div>
                    <div>Resion #2</div>
                    <div>Resion #3</div>
                </Root>

                {/* 인스타그램 헤더 영역 따라 만들기 */}
                <Header>
                    <img src={logo_insta} alt="logo" />
                    <input type="text" placeholder="검색" />
                    <div>
                        <span>SAM</span>
                        {/* 이미지파일을 public 폴더(마치 현재폴더인것처럼 경로지정) */}
                        <img src="./ms_01.png" alt="희번득" />
                    </div>
                </Header>

                {/* 인스타그램 로그인 요청화면 UI 만들어보기 - 일반 CSS파일로 적용해보기 */}
                <div className="container">
                    <img src={logo_insta} alt="LOGO" className="logo" />

                    <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" className="login_input" />
                    <input type="password" placeholder="비밀번호" className="login_input" />

                    
                    <input type="submit" value='로그인' className="login_button" />

                    <div className="separator">
                        <span>또는</span>
                    </div>
                    <div className="loginFacebook">
                        <a href="">
                            <img src={logo_facebook} alt="facebook" />
                            <div>Facebook으로 로그인</div>
                        </a>
                    </div>
               
               
                </div>

            </>
        )
    }
}//Home..............................
export default Home

const Root=styled.div`
    display: flex;
    border: 1px solid black;
    padding: 1rem;
    justify-content: space-between;
`

const Header=styled.div`
    display: flex;
    padding: 1rem;

    justify-content: space-between;
    box-shadow: 0px 3px 3px black;
    align-items: center;

    >img{height: 2rem}
    >input{
        padding: .5rem 1rem;
        text-align: center;
    }
    div{
        display: flex;
        img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            margin: 4px;
            border: 1px solid black;
        }
        span{
            font-weight: bold;
            padding: 8px;
        }
    }
`