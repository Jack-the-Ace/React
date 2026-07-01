import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {PacmanLoader} from 'react-spinners'

function MovieDetail(props){

    // route의 서브경로로 전달된 :id 값 받아오는 HOOK
    const params= useParams()
    // 이 컴포넌트가 화면에 보여지면 자동으로 발동하는 함수를 등록하는 HOOK
    useEffect(()=>{
        // 특정 영화 id에 대한 TMDB 영화상세화면 open api  - url params로 전달받은 영화 id 정보를 요청파라미터로 지정. image와 출연자 정보도 같이 요청가능.
    const api_url= `https://api.themoviedb.org/3/movie/${params.id}?api_key=4704d6d917590acc0fdea33c3505baa7&language=ko-KR`
    //fetch(api_url).then(res=>res.text()).then(text=>alert(text))
    fetch(api_url).then(res=>res.json()).then(json=>setMovie(json))
    },[])

    //영화 상세정보 저장변수
    const [movie, setMovie]= useState()

    return (
        <div>
            <h2>영화 상세정보</h2>
            <p>영화 고유 식별자 id : {params.id}</p>

            {/* 영화의 상세정보들을 표시 */}
            {/* 서버에서 데이터를 가져오는 시간이 걸리기에... 로딩 중에는 데이터표시 불가능 */}
            {
                movie?
                <h3>영화 제목 : {movie.title} </h3>
                :
                <PacmanLoader color="black" style={{margin:10}}></PacmanLoader>
            }
            
        </div>
    )
}
export default MovieDetail