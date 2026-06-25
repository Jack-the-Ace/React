import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Home from './Home'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <div>
    <Home></Home>

    {/* 위에서 import Home 을 하면.. Home에 적용된 css도 같이 적용됨 */}
    {/* 실제 웹으로 배포될때는 모든 .jsx 파일들이 하나의 .js로 만들어져 보여짐. 그래서 css도 모두 병합됨 */}
    <h2>여긴 main.jsx의 h2</h2>
    <p className='aa'>이건 main.jsx의 p</p>
    <p className='bb'>이건 main.jsx의 p</p>
  </div>
)
