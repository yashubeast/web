import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CompNavbar from './comps/navbar.tsx'
import CompFooter from './comps/footer.tsx'

import PageHome from './pages/home.tsx'
import PageBlog from './pages/blog.tsx'
import PageAbout from './pages/about.tsx'

function App() {

  return (
    <BrowserRouter>

      <CompNavbar/>

      <div className='root-body'>
      <Routes>

        <Route path="/" element=<PageHome/> />
        <Route path="/blog" element=<PageBlog/> />
        <Route path="/about" element=<PageAbout/> />

      </Routes>
      </div>

      {/* <CompFooter/> */}

    </BrowserRouter>
  )
}

export default App
