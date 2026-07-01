import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'

import Home from '../page/Home'
import MovieDetail from '../page/MovieDetail'

// 페이지 이동을 위한 경로와 컴포넌트를 지정하는 Router 컴포넌트 만들기
function PageRouter(){   

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/movie/:id' element={<MovieDetail></MovieDetail>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default PageRouter