import React, { useCallback, useEffect } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../../../context/UserAuthContext";
import personCircleSVG from "../../../assert/img/person-circle.svg";
import { Link } from "react-router-dom";

import {
  LoginSocialApple,
  LoginSocialFacebook,
  LoginSocialGoogle,
  LoginSocialInstagram,
  LoginSocialTiktok,
} from "reactjs-social-login";
import {
  AppleLoginButton,
  FacebookLoginButton,
  GoogleLoginButton,
  TikTokLoginButton,
} from "react-social-login-buttons";
import { useState } from "react";
import LoginTiktok from "../signIn/LoginTiktok";
import axios from "axios";

function Profile() {
  const { logOut, user } = useUserAuth();
  const [ggAccessToken, setGgAccessToken] = useState("");
  const [fbAccessToken, setFbAccessToken] = useState("");
  const [ttAccessToken, setTtAccessToken] = useState("");
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const popupWindowURL = new URL(window.location.href);
    const code = popupWindowURL.searchParams.get("code");
    if (code) {
      setTtAccessToken(code);
    }
  }, []);


  // const handlePostMessage = useCallback(
  //   async ({ type, code, provider }) =>
  //     type === "code" &&
  //     provider === "tiktok" &&
  //     code &&
  //     onResolve({ provider: "tiktok", data: { code } }),
  //   [onResolve]
  // );

  const onChangeTiktokCode = useCallback(() => {
    window.removeEventListener("storage", onChangeTiktokCode, false);
    const code = localStorage.getItem("ttauthcode");
    if (code) {
      console.log(code);
      // handlePostMessage({ provider: "tiktok", type: "code", code });
      // localStorage.removeItem("ttauthcode");
    }
  }, []);

  const handleTiktokLoginClick = () => {
    // navigate("/ttredirect");
    window.location.href =
      "https://www.tiktok.com/v2/auth/authorize?client_key=7260025883677704193&scope=user.info.basic%2Cuser.info.username%2Cuser.info.stats%2Cuser.account.type%2Cuser.insights%2Cvideo.list%2Cvideo.insights%2Ccomment.list%2Ccomment.list.manage%2Cvideo.publish%2Cuser.info.basic%2Cuser.insights.creator%2Cbiz.creator.info%2Cbiz.creator.insights%2Cvideo.list%2Ctcm.order.update&response_type=code&redirect_uri=https%3A%2F%2F83a8-146-115-46-137.ngrok-free.app%2Fhome%2F&state=%7B%22%22%3D%22undefined%22%7D";
  };

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <img
              src={personCircleSVG}
              width={30}
              height={30}
              className="d-inline-block align-top"
              style={{ paddingRight: "10px" }}
            />
            Welcome! {user && user.email}
          </Navbar.Brand>
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </Container>
      </Navbar>

      <div
        className="p-4 box mt-3 text-center"
        style={{ width: "500px", wordWrap: "break-word", overflowY: "auto" }}
      >
        {/* See client id on Google Developer Console */}
        <LoginSocialGoogle
          client_id="318118490595-823asgjb1m27pgmsv16mfc8ui4svua4j.apps.googleusercontent.com"
          onResolve={(response) => {
            console.log(`Google access_token: ${response.data.access_token}`);
            console.log(response);
            setGgAccessToken(response.data.access_token);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
        <p style={{ paddingTop: "5px", marginBottom: "5px" }}>
          User Access Token:{" "}
        </p>
        <p style={{ marginBottom: "0px" }}>{ggAccessToken}</p>
      </div>

      <div
        className="p-4 box mt-3 text-center"
        style={{ width: "500px", wordWrap: "break-word", overflowY: "auto" }}
      >
        {/* See app id on Meta for Developers */}
        <LoginSocialFacebook
          appId="3531094853876942"
          onResolve={({ provider, data }) => {
            console.log("Facebook OAuth Responded");
            console.log(data.accessToken);
            setFbAccessToken(data.accessToken);
          }}
          onReject={(err) => {
            console.log("Facebook OAuth Rejected");
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
        <p style={{ paddingTop: "5px", marginBottom: "0px" }}>
          User Access Token:{" "}
        </p>
        <p style={{ marginBottom: "0px" }}>{fbAccessToken}</p>
      </div>

      <div
        className="p-4 box mt-3 text-center"
        style={{ width: "500px", wordWrap: "break-word", overflowY: "auto" }}
      >
        {/* <LoginSocialTiktok
          client_key="7260025883677704193"
          scope="user.info.basic"
          redirect_uri="http://localhost:3000/home"
          onResolve={(response) => {
            console.log(response);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <TikTokLoginButton />
        </LoginSocialTiktok>
        <TikTokLoginButton onClick={handleTiktokLoginClick} /> */}
        <TikTokLoginButton onClick={handleTiktokLoginClick} />
        <p style={{ paddingTop: "5px", marginBottom: "0px" }}>
          Authorization Code:{" "}
        </p>
        <p style={{ marginBottom: "0px" }}>{ttAccessToken}</p>
      </div>

      <div>
        <Link to={'/dashboard'}>
        <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </>
  );
}

export default Profile;
