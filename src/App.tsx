import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar';


function App() {
  
  return (  
      <div className='d-flex flex-column flex-grow-1'>
        <Navbar/>
        <Outlet/>
      </div>
    
    )
}

export default App
