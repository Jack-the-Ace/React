import './Home.css'
import MovieList from '../components/MovieList'
import { useState, useEffect } from 'react'

function Home(){

    //TMDB 인기순 영화 open api url주소
    const apiUrl='https://api.themoviedb.org/3/movie/popular?api_key=4704d6d917590acc0fdea33c3505baa7&language=ko-KR&page=1'

    //영화정보 리스트를 저장할 배열 state변수
    const [movies, setMovies]= useState(null)

    // 이 컴포넌트가 화면에 처음 랜더링 된 후 자동으로 발동하는 라이프사이클함수를 사용하는 HOOK
    useEffect(function(){
        //TMDB에서 유명한 영화목록 데이터 불러오기
        //fetch(apiUrl).then(res=>res.text()).then(text=>alert(text)).catch(e=>alert(message))
        // 받아온 영화 리스트 json형식을 분석하여 JS객체로 받아서.. movies 라는 state변수에 대입
        fetch(apiUrl).then(res=>res.json()).then(json=>setMovies(json.results)).catch(e=>alert(e.message))
    },[])  //두번째 파라미터 배열 - 특정 state변수를 틍록해놓으면 그 값이 변경되었을때도 useEffect가 발동함
    // 빈 []배열을 사용하면.. 처음 한번만 useEffect 함수가 발동함.

    return (
        <div className="Root">
            <header>
                <h1>TMDB 영화정보 OPEN API</h1>
            </header>    

            <main>
                {/* 영화리스트를 보여주는 컴포넌트 조각 배치 */}
                {/* 아직 영화정보가 불러지지 않았을 수도 있기에 */}
                {/* fetch()로 받아온 영화목록 데이터들을 컴포넌트에 속성으로 전달 */}
                {
                    movies?
                    <MovieList movies={movies}></MovieList>
                    :
                    <p>Loading...</p>
                }                
                
            </main>        
        </div>
    )
}
export default Home