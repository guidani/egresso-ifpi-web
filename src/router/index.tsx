import { Routes, Route} from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    )
}