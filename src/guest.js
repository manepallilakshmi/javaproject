import { Link } from "react-router-dom";


const Login2=()=>
{
    return(
     <div className="login3" style={{backgroundImage:"url('../img14.png')",backgroundSize:'cover',height:600}}>
        <center><h1 style={{color:'white',paddingTop:'100px'}}>REGISTER HERE</h1><br/>
        <marquee direction='right' width='1500' scrollamount='20' bgcolor='white'><font Size='5px' color='black'><u><b>This is page for who doesn't have login Id.
        <br/>please Regiter here we will send your login details to your Email</b></u></font>
        </marquee>
            <Link to='./login11'>
            <button className="login1">Student</button></Link>
            <Link to='./guest2'>
            <button className="guest">Teacher</button></Link>
        </center>
     </div>
    )
}
export default Login2;