// src/main.tsx 예시
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx' // App.tsx를 불러옵니다.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App /> {/* 여기서 App.tsx의 내용이 <div id="root">에 들어갑니다. */}
  </React.StrictMode>,
)
