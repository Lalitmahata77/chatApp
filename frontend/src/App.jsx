import { Navigate,Routes, Route} from "react-router-dom"
import './App.css'
import Signup from "./pages/signup/Signup"
import Home from './pages/home/Home'
import Login from "./pages/login/Login"
import { Toaster} from "react-hot-toast"
import { useAuthContext } from "./context/AuthContext"
// import Login from './pages/login/Login'
// import Signup from './pages/signup/Signup'

function App() {
  const {authUser} = useAuthContext()


  return (
    <div className='P-4 h-screen flex items-center justify-center'>
     <Routes>
				<Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
			</Routes>

     <Toaster/>
    </div>
  )
}

export default App
