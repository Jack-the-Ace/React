import {Link} from 'react-router-dom'

function Index({posts}){
    return (
        <div className="board_wrap">
            {/* 1. 게시판 제목 영역 */}
            <div className="board_title">
                <h2>자유 게시판</h2>
                <p>자유롭게 게시글을 작성하며 이야기를 나누세요.</p>
            </div>

            {/* 2. 게시판 테이블이 그려질 메인 영역 */}
            <div className="board_list_wrap">
                {/* 2.1 테이블 영역 */}
                <table className="board_list">
                <thead>
                    {/* 1) 컬럼 제목줄 */}
                    <tr className="column_title">
                    <th className="col_no">번호</th>
                    <th className="col_title">제목</th>
                    <th className="col_writer">글쓴이</th>
                    <th className="col_date">작성일</th>
                    <th className="col_hits">조회</th>
                    </tr>
                </thead>
                    <tbody>
                        {/* 2) 게시글 데이터들 표시영역 (posts 데이터를 반복문 map으로 구현) */}
                        {posts.map((post) => (
                        <tr key={post.no}>
                            <td className="col_no">{post.no}</td>
                            <td className="col_title">
                            {/* 기존 <a href="..."> 대신 React Router의 <Link to="...">를 사용합니다. */}
                            <Link to={`/view/${post.no}`}>{post.title}</Link>
                            </td>
                            <td className="col_writer">{post.writer}</td>
                            <td className="col_date">{post.date}</td>
                            <td className="col_hits">{post.hits}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>

            {/* 2.2 페이지 네이션 영역 (핵심만 남김) */}
                <div className="board_pagination">
                    <a href="#" className="btn selected">1</a>
                </div>

        {/* 2.3 버튼 등록 영역 */}
                <div className="btn_wrap">
                    {/* 글쓰기 버튼 역시 Link 태그로 변경합니다. */}
                    <Link to="/write" className="on">등록</Link>
                </div>
            </div>
        </div>
    )
}
export default Index