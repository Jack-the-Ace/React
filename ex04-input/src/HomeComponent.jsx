import React, { Component } from "react";

class HomeComponent extends Component{

    // 값이 변경되면 자동으로 화면을 갱신해주는 Component클래스의 아주 특별한 멤버변수 state
    state={
        text:'',
        text2:'',
    }

    // 일반 멤버변수 - 값을 변경해도 화면이 갱신되지 않음.
    inputText=''

    //요소를 참조하는 참조변수 선언
    inputRef=React.createRef()
    pRef=React.createRef()

    render(){
        return (
            <div>
                <h2>REACT INPUT</h2>
                <p>리액트에서 사용자 입력 받아보기</p>
                <hr/>

                {/* 1. input 요소의 글씨가 변경될때 마다 반응하기 */}
                <input type="text" onChange={this.changeText} />
                <hr />

                {/* 2. input 요소의 글씨가 변경될때 마다 바로 아래 p요소에 표시하기 */}
                <input type="text" onChange={this.changeText2} />
                <p>입력된 글씨 : {this.state.text}</p>
                <hr />

                {/* 3. 버튼을 클릭했을때 input요소에 써있는 글씨를 p요소에 보여주기 */}
                <input type="text" onChange={this.changeText3} />
                <button onClick={this.clickBtn}>입력완료</button>
                <p>입력이 완료된 글씨 : {this.state.text2}</p>
                <hr />

                {/* 4. 요소를 참조하여 제어하는 방식을 react에서도 제공함(최근에 생김) */}
                <input type="text" placeholder="이메일을 입력하세요." ref={this.inputRef} />
                <button onClick={this.clickBtn2}>확인</button>
                <p ref={this.pRef}>입력한 이메일 정보 : </p>

                {/* 사용자 입력데이터는 보통 웹서버로 전송해야 함. form에 대한 수업(추후 별도..) */}

            </div>
        )
    }//render method.......................

    //4)
    clickBtn2=()=>{
        // inputRef 참조변수가 현재 참조하는 요소의 값을 가져와서
        let value=this.inputRef.current.value
        // pRef참조변수가 현재 참조하는 요소에 쓰기
        this.pRef.current.innerHTML=value
    }

    //3)
    clickBtn=()=> this.setState({text2:this.inputText})
    changeText3= event=> this.inputText=event.target.value

    //2) 글씨변경될때마다 p요소가 보여주는 state값 변경하는 함수 만들기
    changeText2=(event)=>{
        // state값의 변경은 반드시 .setState()라는 기능을 사용해야만 함.
        this.setState({text:event.target.value})
    }

    //1) 글씨변경될때마다 반응할 함수로 등록된 함수 만들기
    changeText=(event)=>{  // event : 변경이벤트 정보를 가진 객체가 자동으로 전달됨
        //alert(event.target.value)  //이벤트를 발생한 녀석(target)의 값 출력
        //브라우저 개발자모드(F12)의 [consol]탭에 출력하기
        console.log('change text: '+event.target.value)
    }

}// HomeComponent...........................
export default HomeComponent