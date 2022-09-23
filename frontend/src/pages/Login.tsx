import logo from "../assets/images/logo.png";

const Login = () => {
    return(
        <>
            <img src={logo} width="" height="" alt="instagram logo"/>
            <form>
                <label labe-for="#username" className="d-flex">
                    <span>Label</span>
                    <input id="username" type="username" />
                </label>
                
                <label labe-for="#email" className="d-flex">
                    <span>Email</span>
                    <input id="email" type="email" />
                </label>
                <a href="#">Forgot Password</a>
                <hr/>
                <span>Don't have an account?<a href="#">Sign Up</a></span>
            </form>  
        </>
    )
}

export default Login;