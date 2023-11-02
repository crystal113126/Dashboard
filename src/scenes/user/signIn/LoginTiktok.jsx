import React, { useCallback, useEffect, useState } from "react";

const LoginTiktok = ({ className = "", children, onResolve }) => {
  useEffect(() => {
    const popupWindowURL = new URL(window.location.href);
    const code = popupWindowURL.searchParams.get("code");
    if (code) {
      localStorage.setItem("tiktok", code);
      window.close();
    }
  }, []);

  const handlePostMessage = useCallback(
    async ({ type, code, provider }) =>
      type === "code" &&
      provider === "tiktok" &&
      code &&
      onResolve({ provider: "tiktok", data: { code } }),
    [onResolve]
  );

  const onChangeLocalStorage = useCallback(() => {
    window.removeEventListener("storage", onChangeLocalStorage, false);
    const code = localStorage.getItem("tiktok");
    if (code) {
      handlePostMessage({ provider: "tiktok", type: "code", code });
      localStorage.removeItem("instagram");
    }
  }, [handlePostMessage]);

  const onLogin = useCallback(() => {
    window.addEventListener("storage", onChangeLocalStorage, false);
    const oauthUrl =
      "https://www.tiktok.com/v2/auth/authorize?client_key=7260025883677704193&scope=user.info.basic%2Cuser.info.username%2Cuser.info.stats%2Cuser.account.type%2Cuser.insights%2Cvideo.list%2Cvideo.insights%2Ccomment.list%2Ccomment.list.manage%2Cvideo.publish&response_type=code&redirect_uri=https%3A%2F%2Fbrandplus.ai%2F&state=%7B%22%22%3D%22undefined%22%7D&rid=2re3wq59ouq";
    const width = 450;
    const height = 730;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      oauthUrl,
      "Github",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  }, [onChangeLocalStorage]);

  return (
    <div className={className} onClick={onLogin}>
      {children}
    </div>
  );
};

export default LoginTiktok;
