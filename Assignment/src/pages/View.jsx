import { useParams, Link, useNavigate } from "react-router-dom"

function View({posts, setPosts}){

    const {no}= useParams();
    const navigate= useNavigate();

    const post= posts.find((p)=>p.no===parseInt(no));
    // 예외 처리: 만약 주소를 잘못 입력했거나 이미 삭제된 글이라서 데이터를 못 찾았을 때
    if (!post) {
        return (
            <div className="board_wrap">
                <p style={{ padding: '50px', textAlign: 'center' }}>존재하지 않거나 삭제된 게시글입니다.</p>
                <div className="btn_wrap">
                    <Link to="/" className="on">목록으로 이동</Link>
                </div>
            </div>
        );
    }

    const handleDelete = () => {
        if (window.confirm("정말 이 게시글을 삭제하시겠습니까?")) {
        // 현재 글 번호(post.no)가 아닌 '나머지 글들만' 필터링해서 배열을 새로 만듭니다.
            const updatedPosts = posts.filter((p) => p.no !== post.no);
        
        // 부모의 setPosts를 통해 원본 데이터를 갱신합니다.
            setPosts(updatedPosts);
        
            alert("삭제되었습니다.");
            navigate("/"); // 삭제가 끝난 후 목록(메인) 화면으로 보냅니다.
        }
    };


    return (
        <div className="board_wrap">
            {/* 1. 제목 영역 (기존 view.html 구조 유지) */}
            <div className="board_title">
                <h2>자유게시판 - 상세 글 보기</h2>
                <p>자유롭게 게시글을 작성하며 이야기를 나누세요.</p>
            </div>

            {/* 2. 상세글 보기 영역 */}
            <div className="board_view_wrap">
                <div className="board_view">
                {/* 찾은 글 데이터에서 제목(title) 바인딩 */}
                    <div className="title">{post.title}</div>
                
                {/* 글 정보 바인딩 */}
                    <div className="info">
                        <dl>
                            <dt>번호</dt>
                            <dd className="col1">{post.no}</dd>
                        </dl>
                        <dl>
                            <dt>글쓴이</dt>
                            <dd className="col2">{post.writer}</dd>
                        </dl>
                        <dl>
                            <dt>작성일</dt>
                            <dd className="col3">{post.date}</dd>
                        </dl>
                        <dl>
                            <dt>조회</dt>
                            <dd className="col4">{post.hits}</dd>
                        </dl>
                    </div>

                {/* 글 내용 바인딩 (textarea 처럼 줄바꿈이 보이도록 pre-wrap 스타일 추가) */}
                    <div className="content" style={{ whiteSpace: 'pre-wrap' }}>
                        {post.content}
                    </div>
                </div>

            {/* 3. 하단 버튼 영역 */}
                <div className="btn_wrap">
            {/* 목록 버튼을 누르면 메인으로 이동 */}
                    <Link to="/" className="on">목록</Link>
            
            {/* 수정 버튼을 누르면 해당 글의 번호를 들고 Edit 페이지로 이동 */}
                    <Link to={`/edit/${post.no}`}>수정</Link>
            
            {/* 삭제 버튼은 페이지 이동이 아니라 자바스크립트 함수를 실행해야 하므로 button을 씁니다. */}
                    <button 
                        onClick={handleDelete} 
                        style={{
                        marginLeft: '5px',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        background: '#222',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer'
                        }}
                    >삭제</button>
                </div>
            </div>
        </div>
    )
}
export default View