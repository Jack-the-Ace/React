import { Component } from "react";

//리액트에서 스타일을 적용하는 방법은 매우 다양함.
//React에서 기본으로 제공하는 방식이 3가지
//추가로 외부라이브러리로 스타일 적용방식 2가지

// 외부 css 파일을 가져오기
import './Home.css'
// 모듈 css 파일을 가져오는 방법은 조금 다름. 스타일 가진 객체를 가져오는 방식
import homeStyle from './Home.module.css'

// scss 가져오기
import './Home.scss'

// styled이 적용된 컴포넌트를 만들어주는 객체 import
import styled from 'styled-components'

class Home extends Component{
    render(){
        return (
            <div>
                {/* 1) 인라인 스타일 : html요소에 style속성으로 스타일 지정 [다른점: 스타일을 문자열이 아니라.. JS객체로 줘야 함] */}
                <h2 style={titleStyle}>Hello React Style</h2>
                <p style={textStyle}>nice to meet you.</p>
                <p style={textStyle}>안녕하세요.</p>
                <p style={{color: "green",margin:16}}>Have a good day.</p>
                <hr />

                {/* 2) 별도 css 파일을 만들고 적용하기 ~ 주의! 다른 화면에도 영향을 줌 */}
                <p className="aa">클래스 선택자 연습</p>
                <hr />

                {/* 3) 클래스선택자를 특정 요소에만 적용되도록 하는 .module.css 파일 [인기없음] */}
                <p className="bb">모듈 클래스 선택자 연습</p>
                {/* 위 방식은 안됨 */}
                <p className={homeStyle.bb}>모듈 클래스 선택자 연습</p>
                <hr />

                {/* 4) 외부 스타일 라이브러리 - sass/scss [라이브러리 설치 필요 npm install sass (scss 모듈이 포함되어있음)] */}
                {/* 라이브러리를 설치하면 파일들은 node_modules 폴더에 다운로드 되며, package.json 파일의 dependencies에 등록됨 */}
                {/* sass/scss는 계층구조를 이용하여 요소들의 관계를 선택할 수 있는 문법 */}
                {/* 별도의 파일로 작성 [파일 확장자 .scss] */}
                <nav className="menu">
                    <ul>
                        <li><a href="">NAVER</a></li>
                        <li><a href="">GOOGLE</a></li>
                        <li><a href="">KAKAO</a></li>
                    </ul>
                </nav>

                {/* 5) 외부 스타일 라이브러리 - styled-components [설치 필요 npm install styled-components] */}
                {/* 사용하려면 import 해야 함. */}

                {/* 스타일이 적용된 버튼을 제작하고 사용 */}
                <MyButton>스타일 버튼</MyButton>            
                <MyButton>나만의 버튼</MyButton>

                {/* 사용자 입력박스.. 스타일이 적용된 input요소 */}
                <MyInput></MyInput>

                {/* 자식요소들의 스타일을 가진 요소도 만들 수 있음 */}
                <MyContainer>
                    <span>Good</span>
                    <p>Hello <span>React</span></p>
                </MyContainer>
                <span>nice to meet you</span>

                {/* 형제 선택자 사용 + ~  */}
                <TextInput placeholder="email"></TextInput>
                <TextInput placeholder="password"></TextInput>
                <div>잠시 다른 요소</div>
                <TextInput placeholder="nickname"></TextInput>
                <hr />

                {/* 요소의 속성에 따라 다르게 스타일을 적용(동적 스타일링) [속성명은 마음대로 정해도 됨] */}
                <WebButton bg='blue'>Log In</WebButton>
                <WebButton bg='green'>Register</WebButton>

                {/* [별외.] 요즘 유행하는 외부 스타일 라이브러리 : bootstrap css, tailwind css */}



            </div>
        )
    }//render..........................
}//Home......................................
export default Home

//1) 인라인 스타일용 JS객체 - 제목글씨 스타일
const titleStyle={color:'blue'}
// 일반글씨 스타일
const textStyle={
    color:'red',
    fontSize: 20,  //snake 표기법이 cammel 표기법으로 바뀌었음. [기본단위 px]
    fontStyle: 'italic',
    margin: '16px',  // 단위를 사용하려면 문자열로.
}


// styled-components 를 이용하여 스타일링이 된 버튼 컴포넌트 만들어놓기
// 스타일을 작성하는 방법은 빽틱 영역 사용. [css문법으로.] -- vscode에서 속성명이 자동완성 되려면.. 확장프로그램 설치[ vscode-styled-components ]
const MyButton= styled.button`
    font-size: 1rem;
    font-weight: bold;
    background-color: black;
    color: white;
    padding: .25rem 1rem;
    border-radius: 4px;
`

const MyInput=styled('input')`
    padding: .25rem 1rem;
    width: 100%;
    margin: 16px;
`

const MyContainer=styled.div`
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0px 5px 3px gray;

    // 본인을 지칭하는 기호 &
    &:hover{
        background-color: yellow;
    }
    // 자식 선택 가능 [본인을 지칭하는 &는 생략해도 됨]
    >span{
        color: blue;
        font-weight: bold;
    }
    // 자손 선택 가능
    span{
        font-style: italic;
    }
`

const TextInput=styled.input`
    padding: .5rem 1rem;
    display: block;

    // 바로 다음 형제 선택자 +
    & + &{
        margin-top: .5rem;
    }
    // 다음으로 오는 모든 형제 선택자 ~
    & ~ &{
        border: 1px solid red;
    }
`

let textColor='white'
const WebButton=styled.button`
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;

    // 스타일이 된 버튼에 지정된 속성(property)을 받아서 특정 기능으로 처리할 수 있음.
    //background-color: ${function(props){return props.bg}};
    background-color: ${props=> props.bg};

    //JS의 변수값 사용
    color: ${textColor};
`
