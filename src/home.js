import './App.css'
import { Link } from 'react-router-dom';
const Home=()=>{
 return(
    
    <div className="home" style={{backgroundImage:'url(img13.jpg)'}}>
    {/* <div className='home' style={{ backgroundImage:"url('img1.jpg')"}}>  style={{backgroundImage:'url(img3.jpg)'}}  */}
      <center><h1 style={{color:'white'}}>Welcome to college library</h1></center>
      <Link to='/'>
      <button className='home1'>Home</button>
      </Link>
      <Link to='/About'>
      <button className='about'>About</button>
      </Link>
      <Link to='/login'>
      <button className='login'>Login</button></Link>
      <Link to='/admin'>
      <button className='admin'>Admin</button></Link>
    </div>
  
)
}
export default Home;