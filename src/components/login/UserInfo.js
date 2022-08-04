import styled from "styled-components";
import Button from "../interface/Button";
import expandMore from "../../images/expand-more.png";
import { useContext, useState } from "react";
import LoginCtx from "../../context/Login-Context";

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 30%;
  max-width: 80%;
  height: 80%;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 60%;
  max-width: 100%;
  height: 100%;
  margin: 0 0.5rem;
  align-items: flex-end;
`;

const P = styled.p`
  font-family: ${(props) => props.fontFamily};
  font-size: 24px;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  margin: 0;
  pointer-events: none;
`;

const UserInfo = () => {
  const [showLogout, setShowLogout] = useState(false);
  const loginContext = useContext(LoginCtx);

  return (
    <Div>
      <Span>
        <P>{loginContext.userData.name}</P>
        <P>Saldo: {loginContext.userData.balance.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</P>
      </Span>
      <Button
        bgColor={"transparent"}
        bgImg={expandMore}
        bgSize={"150%"}
        filter={"invert(100%)"}
        width={"25px"}
        height={"30px"}
        border={"none"}
        margin={"0.5rem 0"}
        onClick={() => setShowLogout((actualValue) => !actualValue)}
      />
      <Button
        display={showLogout ? "flex" : "none"}
        justContent={"center"}
        alignItems={"center"}
        width={"135px"}
        height={"48px"}
        border={"none"}
        zindex={"99"}
        position={"absolute"}
        margin={"-3.5rem 0"}
        onClick={loginContext.logoff}
      >
        <P fontFamily={"Sansita, sans-serif"} color={"#000000"}>
          Logout
        </P>
      </Button>
    </Div>
  );
};

export default UserInfo;
