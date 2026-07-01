import { Link } from "react-router-dom"
import React, {useState} from "react";
import { useNavigate } from "react-router-dom"

function Write({posts, setPosts}){

    const navigate = useNavigate();

    // 1. 입력 폼의 값들을 관리할 State 정의
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [password, setPassword] = useState('');
    const [content, setContent] = useState('');

    // 2. [새 글 저장] 버튼을 누르거나 폼이 제출(submit)되었을 때 실행되는 함수
    const handleSubmit = (e) => {
        e.preventDefault(); // 페이지가 MPA처럼 새로고침 되는 것을 막아줍니다.

        // 간단한 유효성 검사
    if (!title.trim() || !writer.trim() || !password.trim() || !content.trim()) {
        alert("모든 항목을 입력해주세요.");
        return;
    }

    // 3. 새 게시글 객체 만들기
    // 기존 posts 배열에서 가장 큰 no 값을 찾아 +1을 해줍니다. (글이 없으면 1번)
    const nextNo = posts.length > 0 ? Math.max(...posts.map(p => p.no)) + 1 : 1;
    
    // 현재 날짜 구하기 (YYYY.MM.DD 형식)
    const today = new Date();
    const formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

    const newPost = {
        no: nextNo,
        title: title,
        writer: writer,
        password: password,
        content: content,
        date: formattedDate,
        hits: 0 // 새 글이므로 초기 조회수는 0
    };

    // 4. 부모가 준 setPosts를 이용해 기존 배열에 새 글을 결합합니다.
    setPosts([...posts, newPost]);

    alert("글이 성공적으로 등록되었습니다.");
    navigate('/'); // 등록 완료 후 목록(메인) 화면으로 이동
    };

    // 5. [취소] 버튼을 눌렀을 때 목록으로 돌아가는 함수
    const handleCancel = () => {
        navigate('/');
    };

    return (
    <div className="board_wrap">
      {/* 1. 제목 영역 */}
        <div className="board_title">
            <h2>자유게시판 - 새 글 작성</h2>
            <p>자유롭게 게시글을 작성하며 이야기를 나누세요.</p>
        </div>

      {/* 2. 게시글 작성 영역 */}
        <div className="board_write_wrap">
            <form onSubmit={handleSubmit}>
                <div className="board_write">
            {/* 2.1.1 제목 작성 영역 */}
                    <div className="title">
                        <div class="col_label">제목</div>
                        <div class="col_input">
                        <input 
                            type="text" 
                            placeholder="제목입력" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                        </div>
                    </div>
            {/* 2.1.2 글쓴이 / 비밀번호 */}
                    <div className="info">
                        <div className="writer">
                            <div class="col_label">글쓴이</div>
                            <div class="col_input">
                                <input 
                                    type="text" 
                                    placeholder="글쓴이 입력" 
                                    value={writer} 
                                    onChange={(e) => setWriter(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="password">
                            <div class="col_label">비밀번호</div>
                            <div class="col_input">
                                <input 
                                    type="password" 
                                    placeholder="비밀번호 입력" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                />
                            </div>
                        </div>
                    </div>

                {/* 2.1.3 글 내용 입력 영역 */}
                    <div className="content">
                        <textarea 
                            name="msg" 
                            placeholder="내용 입력" 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                {/* 2.2 새글저장/취소버튼 영역 */}
                <div className="btn_wrap">
                    <input type="submit" value="새 글 저장" className="on" style={{ cursor: 'pointer' }} />
                    <input type="button" value="취소" onClick={handleCancel} style={{ cursor: 'pointer', marginLeft: '5px' }} />
                </div>
            </form>
        </div>
    </div>
    )
}
export default Write