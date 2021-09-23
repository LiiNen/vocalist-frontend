import GoogleLogin from 'react-google-login';
import { GoogleLoginButton } from 'react-social-login-buttons';
require('dotenv').config();

const Google_Key = process.env.REACT_APP_GOOGLE_KEY;

export default function MyGoogleLoginButton() {
  const responseGoogle = response => {
    console.log('google login', response);
  };

  return (
    <>
      <GoogleLogin
        clientId={Google_Key}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <GoogleLoginButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: 300,
              fontSize: 18,
              fontFamily: 'Arial'
            }}
          />
        )}
      />
    </>
  );
}
