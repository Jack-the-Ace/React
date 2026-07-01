function Home(){

    const clickBtn= ()=>{
        // 네이버 '코스피 지수' 검색결과 웹페이지 데이터 가져오기
        const url='https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC+%EC%A7%80%EC%88%98&ackey=kbgj5bi2'

        fetch(url).then(res=>res.text()).then(text=>alert(text)).catch(e=>alert(e.message))
        //해결책...
        // 내 서버의 Backend에게 대신 데이터를 요청하고.. 그 결과를 받기(web수업 day14 참고!...openapi.php파일)
    }

    return (
        <div>
            <h2>OPEN API - CORS</h2>
            <button onClick={clickBtn}>naver검색데이터 가져오기(CORS문제발생)</button>
        </div>
    )
}
export default Home