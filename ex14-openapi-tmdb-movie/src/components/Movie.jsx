import { useNavigate } from 'react-router-dom'
import './Movie.css'
function Movie(props){

    // 페이지 전환 기능함수를 HOOK으로 가져오기
    const navigate=useNavigate()

    const goMovieDetail= ()=>{
        //페이지 전환 요청
        navigate('/movie/'+ props.movie.id)  // 현재 영화의 id를 서브경로로 붙이기
    }

    return (
        <div className="Card" onClick={goMovieDetail}>
            <div className="title">{props.movie.title}</div>
            <div className="poster"><img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="poster image" /></div>
            <div className="year">{props.movie.release_date.slice(0,4)}년도 개봉작</div>
            <div className="rating">평점 : <span>{props.movie.vote_average}</span>점</div>
        </div>
    )
}
export default Movie