import SignUp from "./Pages/SignUp";
import {BrowserRouter, Routes, Route, Navigate,} from 'react-router-dom'
import LogIn from "./Pages/LogIn";
import Home from "./Pages/Home";
import { useContext } from "react";
import {} from './'
import { AuthContext } from "./Context/AuthContext";
import Room from "./Pages/Room";
import { AuthContextProvider } from './Context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext)
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/LogIn"/>
    }

    return children
  }
  return (
    <div> 
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LogIn/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/LogIn" element={<LogIn/>}/>
            <Route path="/Home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path="/Room/:roomID" element={<ProtectedRoute><Room/></ProtectedRoute>}/>
          </Routes>
        </BrowserRouter>  
      </AuthContextProvider>
    </div>
  );
}

export default App;
