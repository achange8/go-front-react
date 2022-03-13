import { GoogleLogin } from "react-google-login";

const clientId="295221415874-mmh9djapdgnsl7i8neke5kec0984a9fm.apps.googleusercontent.com";

function Login(){
    return (
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
            </div>
    )
}

export default Login;