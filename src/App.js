import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Join } from './components/Join/Join';
import { Chat } from './components/chat/Chat';


// const ENDPOINT = 'http://localhost:4500';
// const socket = socketIO(ENDPOINT , {transports:['websocket']});

function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Join/>}/>
      <Route exact path='/chat' element={<Chat/>} />
    </Routes>
    
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
