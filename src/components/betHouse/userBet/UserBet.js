import styled from "styled-components";
import BetBgModel from "../UI/BetBgModel";
import { Select } from "react-functional-select";
import Button from "../../interface/Button";
import { useContext, useState } from "react";
import LoginCtx from "../../../context/Login-Context";
import BetCtx from "../../../context/Bet-Context";
import CurrencyInput from "react-currency-input";
import "./userbet.css";

const options = [
  { id: "runner1", label: "Carlos", value: "carlos", horseColor: "blue" },
  { id: "runner2", label: "Otávio", value: "otavio", horseColor: "green" },
  { id: "runner3", label: "Kin", value: "kin", horseColor: "yellow" },
  { id: "runner4", label: "Jun", value: "jun", horseColor: "red" },
  { id: "runner5", label: "Son", value: "son", horseColor: "orange" },
];

const Div = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "80%")};
  height: ${(props) => (props.height ? props.height : "60%")};
  justify-content: ${(props) => props.justContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
`;

const Span = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justContent ? props.justContent : "space-around"};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Title = styled.h2`
  font-family: "Rancho", cursive;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  color: ${(props) => props.color};
  width: 100%;
  height: ${(props) => props.height};
  padding: 0;
  margin: 0;
  text-align: center;
  pointer-events: none;
`;

const themes = {
  control: {
    css: `
      background-color: #ffffff;
      height: 50px;
    `,
  },
  menu: {
    css: `
      overflow: hidden;

      * {
        box-sizing: border-box;
      }
    `,
  },
};

const UserBet = () => {
  const loginContext = useContext(LoginCtx);
  const betContext = useContext(BetCtx);
  const [betAmount, setBetAmount] = useState(0);
  const [runnerChosen, setRunnerChosen] = useState("");

  const setAmount = (event) => {
    setBetAmount(event.target.value.substr(2).replace(",", ""));
  };

  const bet = () => {
    if (runnerChosen === "" || betAmount === 0) {
      return;
    }

    betContext.sortList();

    setTimeout(() => {
      betContext.bet(runnerChosen, betAmount);
    }, 100);
  };

  return (
    <BetBgModel height={"300px"}>
      <Div
        width={"100%"}
        height={"90%"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Title fontSize={"32px"} height={"17%"} fontWeight={"400"}>
          Apostas
        </Title>
        <Div
          width={"95%"}
          height={"60%"}
          alignItems={"center"}
          justContent={"space-around"}
        >
          <Span width={"10%"} height={"100%"}>
            <Title>Corredor:</Title>
            <Title>Valor:</Title>
          </Span>
          <Span width={"65%"} height={"100%"}>
            <Select
              options={options}
              placeholder={"Selecione o Corredor"}
              onOptionChange={(value) => setRunnerChosen(value)}
              themeConfig={themes}
              menuItemSize={40}
              isSearchable={false}
            />
            <CurrencyInput
              className="form-control"
              prefix="R$"
              onChangeEvent={(e) => setAmount(e)}
              value={betAmount}
            />
          </Span>
        </Div>
        <Div
          width={"100%"}
          height={"23%"}
          justContent={"center"}
          alignItems={"center"}
        >
          <Button
            bgColor={"#595959"}
            border={"none"}
            borderRadius={"5px"}
            height={"100%"}
            width={"35%"}
            onClick={bet}
            disabled={
              loginContext.userData.balance < betAmount ||
              loginContext.isLogin.login === false
            }
          >
            <Title fontSize={"24px"} color={"#ffffff"}>
              Apostar
            </Title>
          </Button>
        </Div>
      </Div>
    </BetBgModel>
  );
};

export default UserBet;
