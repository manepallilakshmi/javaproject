import { Link } from "react-router-dom";


const Login=()=>
{
    return(
     <div className="login" style={{backgroundImage:'url(img14.png)',backgroundSize:'cover',height:600}}>
        <center><h1 style={{color:'white',paddingTop:'100px'}}>Login</h1>
        <form style={{paddingTop:'10px'}}>
            <label>User Name </label>
            <input type='text'></input>
            <br/><br/>
            <label> Password  &nbsp;</label>
            <input type="password"></input>
            <br/><br/><br/>
            <Link to='./login1'>
            <button className="login1">Login</button></Link>
            <Link to='./guest'>
            <button className="guest">Guest</button></Link>
        </form></center>
     </div>
    )
}
export default Login;