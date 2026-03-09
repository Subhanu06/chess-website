import './App.css'
import Main from './Components/Main';
import Faculty from './Components/Faculty/Faculty'
import { BrowserRouter
, Routes, Route } from "react-router-dom";
import Member from './Components/Member/Member';
import Alumni from './Components/Alumni/Alumni';
import ChemKriti2021 from './Components/Event/ChemKriti2021'
import ChemKriti2022 from './Components/Event/ChemKriti2022'
import ChemKriti2025 from './Components/Event/ChemKriti2025'
import More from './Components/Event/More';
import Chemeinsider from './Components/Preview/Chemeinsider';
import Achatwithchess from './Components/Preview/Achatwithchess';
import Blog from './Components/Blogs/Blog';
import Error from './Components/Error'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/faculty' element={<Faculty/>}/>
        <Route path='/alumni' element={<Alumni/>}/>
        <Route path='/member' element={<Member/>}/>
        <Route path='/chemeinsider' element={<Chemeinsider/>}/>
        <Route path='/achatwithchess' element={<Achatwithchess/>}/>
        <Route path='/chemKriti2021' element={<ChemKriti2021/>}/>
        <Route path='/chemKriti2022' element={<ChemKriti2022/>}/>
        <Route path='/chemKriti2025' element={<ChemKriti2025/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
