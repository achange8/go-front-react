import { GoogleLogin } from "react-google-login";

const clientId="295221415874-mmh9djapdgnsl7i8neke5kec0984a9fm.apps.googleusercontent.com";

function Login(){
    const onSuccess = (res) =>{
      console.log("Login success! Curent user:",res.profileObj.googleId);   
    }
    const onFailure = (res) =>{
      console.log("Login Failed!",res.profileObj);   
    }
    return (
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText="Sign in Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
            </div>
    )
}

export default Login;