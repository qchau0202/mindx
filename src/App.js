import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RenderTodo from './components/RenderTodo';
import Completed from './pages/Completed';


function App() {
  return (
    <>
      <BrowserRouter>
        <RenderTodo />
        <Routes>
          <Route path='/completed' element={<Completed/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
