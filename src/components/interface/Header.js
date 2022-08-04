import styled from "styled-components";
import Button from "./Button";
import userIcon from "../../images/user-icon.png";
import Login from "../login/Login";
import { useContext, useEffect, useState } from "react";
import LoginCtx from "../../context/Login-Context";
import UserInfo from "../login/UserInfo";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  width: 100%;
  height: 150px;
`;

const Span = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #504739;
  width: 95%;
  height: 80%;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const P = styled.p`
  color: #000000;
  font-size: 40px;
  line-height: 50px;
  margin: 0 15px;

  @media screen and (max-width: 300px) {
    font-size: 30px;
    font-weight: bold;
  }
`;

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loginContext = useContext(LoginCtx);

  useEffect(() => {
    if (loginContext.isLogin.login) {
      setIsModalOpen(false);
    }
  }, [loginContext.isLogin.login]);

  return (
    <Div>
      <Span>
        <P>Horse's BET House</P>
        {loginContext.isLogin.login ? (
          <UserInfo />
        ) : (
          <Button
            bgColor={"transparent"}
            bgImg={userIcon}
            bgSize={"100% 90%"}
            width={"40px"}
            height={"40px"}
            border={"none"}
            margin={"0px 15px"}
            filter={"invert(100%)"}
            onClick={() => setIsModalOpen(true)}
          />
        )}
        <Login
          isOpen={isModalOpen}
          onBackgroundClick={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
        ></Login>
      </Span>
    </Div>
  );
};

export default Header;
