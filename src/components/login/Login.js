import ModalModel from "../interface/ModalModel";
import styled from "styled-components";
import Input from "../interface/Input";
import Button from "../interface/Button";
import { useContext, useEffect, useState } from "react";
import LoginCtx from "../../context/Login-Context";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-family: "Sansita", sans-serif;
  font-size: 36px;
  font-weight: 400;
  width: 100%;
  height: 10%;
  box-sizing: border: box;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const Span = styled.span`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justContent};
  flex-wrap: wrap;
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  border: ${(props) => props.border};
`;

const P = styled.p`
  font-family: "Rancho", cursive;
  font-weight: 400;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24px")};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  opacity: ${(props) => (props.opacity ? props.opacity : "0")};
`;

const Login = (props) => {
  const loginContext = useContext(LoginCtx);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (event) => {
    setEmail(event.target.value)
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value)
  };

  const submitHandler = () => {
    loginContext.login(email, password)
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if(props.isOpen === false) {
      loginContext.resetError(false)
    }
  }, [props.isOpen, loginContext.isLogin.error])

  return (
    <ModalModel
      isOpen={props.isOpen}
      width={"90%"}
      maxWidth={"602px"}
      height={"50%"}
      maxHeight={"450px"}
      borderRadius={"5px"}
      onBackgroundClick={props.onBackgroundClick}
    >
      <Div>
        <Title>Login</Title>
        <Span
          display={"flex"}
          alignItems={"center"}
          width={"80%"}
          height={"150px"}
        >
          <Span
            display={"flex"}
            flexDirection={"column"}
            justContent={"space-around"}
            alignItems={"center"}
            width={"15%"}
            height={"100%"}
          >
            <P opacity={"100%"}>Email:</P>
            <P opacity={"100%"}>Senha:</P>
          </Span>
          <Span
            display={"flex"}
            flexDirection={"column"}
            width={"85%"}
            height={"100%"}
          >
            <Span
              display={"flex"}
              flexDirection={"column"}
              justContent={"space-between"}
              width={"100%"}
              height={"50%"}
            >
              <Input
                type={"text"}
                width={"95%"}
                height={"65%"}
                margin={"0.40rem 0rem 0rem 0.35rem"}
                borderRadius={"8px"}
                fontSize={"24px"}
                border={loginContext.isLogin.error ? 'solid 1px red' : 'none'}
                onChangeInput={emailHandler}
                value={email}
              />
              <P
                fontSize={"16px"}
                margin={"0 0.75rem"}
                height={"20%"}
                color={"#D90404"}
                opacity={loginContext.isLogin.error ? '100%' : '0'}
              >
                E-mail inválido
              </P>
            </Span>
            <Span
              display={"flex"}
              flexDirection={"column"}
              justContent={"space-between"}
              width={"100%"}
              height={"50%"}
            >
              <Input
                type={"password"}
                width={"95%"}
                height={"65%"}
                margin={"0.40rem 0rem 0rem 0.35rem"}
                borderRadius={"8px"}
                fontSize={"24px"}
                border={loginContext.isLogin.error ? 'solid 1px red' : 'none'}
                onChangeInput={passwordHandler}
                value={password}
              />
              <P
                fontSize={"16px"}
                margin={"0 0.75rem"}
                height={"20%"}
                color={"#D90404"}
                opacity={loginContext.isLogin.error ? '100%' : '0'}
              >
                Senha incorreta
              </P>
            </Span>
          </Span>
        </Span>
        <Span
          display={"flex"}
          alignItems={"center"}
          justContent={"space-around"}
          width={"60%"}
          height={"20%"}
          margin={"0rem 2rem 0 5rem"}
        >
          <Button
            display={"flex"}
            justContent={"center"}
            alignItems={"center"}
            width={"38%"}
            maxWidth={"186px"}
            height={"100%"}
            border={"none"}
            bgColor={"#595959"}
            borderRadius={"5px"}
            margin={"0rem 0.5rem 0 0.5rem"}
            onClick={props.onCancel}
          >
            <P color={"#ffffff"} opacity={"100%"}>
              Cancelar
            </P>
          </Button>
          <Button
            display={"flex"}
            justContent={"center"}
            alignItems={"center"}
            width={"38%"}
            maxWidth={"186px"}
            height={"100%"}
            border={"none"}
            bgColor={"#595959"}
            borderRadius={"5px"}
            margin={"0rem 0.5rem 0 0.5rem"}
            onClick={submitHandler}
          >
            <P color={"#ffffff"} opacity={"100%"}>
              Logar
            </P>
          </Button>
        </Span>
      </Div>
    </ModalModel>
  );
};

export default Login;
