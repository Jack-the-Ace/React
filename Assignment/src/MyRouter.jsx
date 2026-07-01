import { useState } from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Index from './pages/Index'
import View from './pages/View'
import Write from './pages/Write'
import Edit from './pages/Edit'

function MyRouter(){

    const [posts, setPosts] = useState([
    {
      no: 1,
      title: "글 제목 #1",
      writer: "sam",
      date: "2026.06.15",
      hits: 10,
      content: "Hello world\nNice to meet you\n안녕하세요",
      password: "1111"
    }
  ]);

    return (
        <BrowserRouter>
            <Routes>
                {/* 1. 목록 조회 (index.html 대체) */}
                <Route path="/" element={<Index posts={posts} setPosts={setPosts} />} />
                
                {/* 2. 상세보기 (view.html 대체) */}
                <Route path="/view/:no" element={<View posts={posts} setPosts={setPosts} />} />
                
                {/* 3. 글쓰기 (write.html 대체) */}
                <Route path="/write" element={<Write posts={posts} setPosts={setPosts} />} />
                
                {/* 4. 수정하기 (edit.html 대체) */}
                <Route path="/edit/:no" element={<Edit posts={posts} setPosts={setPosts} />} />
            </Routes>
        </BrowserRouter>
    );
}
export default MyRouter