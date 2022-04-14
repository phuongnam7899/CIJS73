import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Home, Welcome } from "./components";
import { Course } from "./components/Course";
import { ProductDetail } from "./components/ProductDetail";
import './styles.css'

export const RouterLearning = () => {
    const activeClass = ({isActive}) => {
        return isActive ? 'active' : '';
    }
  return (
    <div>
        <div>
            <NavLink className={activeClass} to='/home'>Home</NavLink>
            <NavLink className={activeClass} to='/welcome'>Welcome</NavLink>
        </div>
        <hr/>
      <Routes>
        <Route path="/home" element={<Home/>} >
            <Route  path="courses" element={<Course/>}/>
            <Route  path=":id" element={<ProductDetail/>}/>
        </Route>
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </div>
  );
};
