import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"

function Edit({posts, setPosts}){

    const {no}=useParams()
    const navigate= useNavigate()

    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const [password, setPassword] = useState('');
    const [content, setContent] = useState('');

    const [originPassword, setOriginPassword] = useState('');

    useEffect(() => {
        const post = posts.find((p) => p.no === parseInt(no));
        if (post) {
        setTitle(post.title);
        setWriter(post.writer);
        setContent(post.content);
        setOriginPassword(post.password); // 검증을 위해 원본 패스워드 저장
        }
    }, [no, posts]);

    // 3. [수정완료] 버튼을 누르거나 폼이 제출되었을 때 실행되는 함수
    const handleSubmit = (e) => {
        e.preventDefault();

    // 유효성 검사
    if (!title.trim() || !writer.trim() || !password.trim() || !content.trim()) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    // 작성한 비밀번호가 기존에 설정했던 원본 비밀번호와 일치하는지 확인
    if (password !== originPassword) {
      alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      return;
    }

    // 4. 기존 posts 배열에서 현재 글만 수정된 내용으로 변경하여 상태 업데이트
    const updatedPosts = posts.map((post) => {
        if (post.no === parseInt(no)) {
            return {
                ...post,
                title: title,
                writer: writer,
                content: content,
                // 수정 시 비밀번호를 변경하고 싶다면 새 비밀번호를 저장할 수도 있습니다.
            };
        }
        return post;
    });

    setPosts(updatedPosts);
    alert("수정이 완료되었습니다.");
    navigate(`/view/${no}`); // 수정한 글의 상세보기 화면으로 이동
    };

  // 5. [취소] 버튼 클릭 시 이전 화면(상세보기)으로 돌아가는 함수
    const handleCancel = () => {
        navigate(`/view/${no}`);
    };

    return (
        <div className="board_wrap">
      {/* 1. 제목 영역 */}
            <div className="board_title">
                <h2>자유게시판 - 게시글 수정</h2>
                <p>자유롭게 게시글을 작성하며 이야기를 나누세요.</p>
            </div>

      {/* 2. 게시글 수정 영역 */}
            <div className="board_write_wrap">
                <form onSubmit={handleSubmit}>
                    <div className="board_write">
                        {/* 2.1.1 제목 수정 영역 */}
                        <div className="title">
                            <div className="col_label">제목</div>
                            <div className="col_input">
                                <input 
                                type="text" 
                                placeholder="제목입력" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>

                {/* 2.1.2 글쓴이 / 비밀번호 확인 영역 */}
                        <div className="info">
                            <div className="writer">
                                <div className="col_label">글쓴이</div>
                                <div className="col_input">
                                <input 
                                    type="text" 
                                    placeholder="글쓴이 입력" 
                                    value={writer}
                                    onChange={(e) => setWriter(e.target.value)}
                                />
                                </div>
                            </div>
                            <div className="password">
                                <div className="col_label">비밀번호</div>
                                <div className="col_input">
                                <input 
                                    type="password" 
                                    placeholder="비밀번호 입력(본인 확인용)" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </div>
                            </div>
                        </div>

                    {/* 2.1.3 글 내용 수정 영역 */}
                        <div className="content">
                            <textarea 
                                name="msg" 
                                placeholder="내용 입력" 
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                        </div>
                    </div>

            {/* 2.2 버튼 영역 */}
                    <div className="btn_wrap">
                        <input type="submit" value="수정완료" className="on" style={{ cursor: 'pointer' }} />
                        <input type="button" value="취소" onClick={handleCancel} style={{ cursor: 'pointer', marginLeft: '5px' }} />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Edit