import { Link, NavLink, Outlet, useNavigate, useSearchParams } from "react-router-dom";

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const  navigate = useNavigate();
  return (
    <h1>
      <h1 onClick={() => {
          // Gửi rq lên server
          // Đọc kết quả
          // Nếu đúng 
          navigate('/welcome')
      }}>Home</h1>
      <input value={searchParams.get('kw')} onChange={(e) => {
          setSearchParams({kw:e.target.value})
      }}/>
      <div>
        <NavLink to="courses">Course Link</NavLink>
      </div>
      <hr />
      <Link to="1">Prod 1</Link>
      <Link to="2">Prod 2</Link>
      <Outlet />
    </h1>
  );
};
