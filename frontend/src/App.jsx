import Home from './pages/Home/Home';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Chat from './pages/Chat/Chat';
import NotFound from './pages/NotFound';
import { Navigate, Route, Routes } from "react-router-dom";
import useAuth from './zustand/useAuth';
import AboutPage from './pages/About/AboutPage';

function App() {
  const { authUser } = useAuth();

  return (

      <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/signup" element={ authUser ? <Navigate to="/chat" /> : <Signup /> } ></Route>
        <Route path="/login" element={ authUser ? <Navigate to="/chat" /> : <Login /> } ></Route>
        {/* <Route path="/chat" element={ authUser ? <Chat/> : <Navigate to='/login' /> } ></Route> */}
        <Route path="/chat" element={ <Chat/> } ></Route>
        <Route path="/about" element={ <AboutPage /> } ></Route>
        <Route path="*" element={ <NotFound /> } ></Route>
      </Routes>
  );
};

export default App;

