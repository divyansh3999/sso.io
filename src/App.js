import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter,
  LoginSocialApple,
  IResolveParams,
} from 'reactjs-social-login';

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
  AppleLoginButton,
} from 'react-social-login-buttons';

export default function App() {
  const [login, setLogin] = React.useState(false);
  const [data, setData] = React.useState({});
  const [picture, setPicture] = React.useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      console.log('response', response);
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  return (
    // <FacebookLogin
    //   appId="1396902511106693"
    //   // appId="1122721198495372"
    //   autoLoad={true}
    //   fields="name,email,picture"
    //   // onClick={componentClicked}
    //   callback={responseFacebook}
    // />
    <LoginSocialFacebook
          appId={"1396902511106693"}
          // fieldsProfile={
          //   'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          // }
          // onLoginStart={onLoginStart}
          // onLogoutSuccess={onLogoutSuccess}
          // redirect_uri={REDIRECT_URI}
          // onResolve={({ provider, data }: IResolveParams) => {
          //   setProvider(provider);
          //   setProfile(data);
          // }}
          // onReject={err => {
          //   console.log(err);
          // }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
  );
  // 
}
