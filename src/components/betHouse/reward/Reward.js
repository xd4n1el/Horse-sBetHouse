import ModalModel from "../../interface/ModalModel";
import styled from "styled-components";
import Button from "../../interface/Button";
import closeIcon from "../../../images/close-icon.png";
import { useContext } from "react";
import BetCtx from "../../../context/Bet-Context";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 95%;
  height: 90%;
`;

const Title = styled.h1`
  font-family: "Sansita", sans-serif;
  font-size: 36px;
  font-weight: 400;
  width: 95%;
  height: 30px;
  text-align: center;
  margin: 0.4rem 0;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
`;

const P = styled.p`
  font-family: "Sansita", sans-serif;
  font-size: ${(props) => props.fontSize};
  text-align: center;
  color: ${(props) => props.color};
  margin: 0.5rem 0;
`;

const Reward = (props) => {
  const betContext = useContext(BetCtx);

  return (
    <ModalModel
      isOpen={props.isOpen}
      width={"70%"}
      maxWidth={"600px"}
      height={"50%"}
      maxHeight={"290px"}
      borderRadius={"5px"}
    >
      <Div>
        <Title>Premiação</Title>
        <Button
          bgColor={"transparent"}
          width={"20px"}
          height={"20px"}
          bgImg={closeIcon}
          bgSize={"150%"}
          border={"none"}
          onClick={props.onClick}
        />
        <Span>
          <P fontSize={"24px"}>
            Parabéns!! Você escolheu o cavalo vencedor e levou a quantia de:{" "}
          </P>
          <P fontSize={"32px"} color={"#005819"}>
            {betContext.betResult.amountGain.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </P>
        </Span>
      </Div>
    </ModalModel>
  );
};

export default Reward;
