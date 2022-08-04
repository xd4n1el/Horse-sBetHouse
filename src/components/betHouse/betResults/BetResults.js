import { useContext } from "react";
import styled from "styled-components";
import BetCtx from "../../../context/Bet-Context";
import BetBgModel from "../UI/BetBgModel";
import BetResultsItem from "./BetResultsItem";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const P = styled.p`
  font-size: 32px;
  font-weight: 400;
  width: 100%;
  height: 10%;
  text-align: center;
  margin: 1rem 0;
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 84%;
  box-sizing: border-box;
  height: 70%;
  background-color: #d9d9d9;
`;

const Thead = styled.thead`
  height: 10%;
  width: 100%;
`;

const Tbody = styled.tbody`
  width: 100%;
  height: 90%;
`;

const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Th = styled.th`
  font-size: 32px;
  width: 33.33%;
  height: 90%;

  :first-child {
    border-bottom: solid 5px black;
  }

  :nth-child(2) {
    border-left: solid 5px black;
    border-right: solid 5px black;
    border-bottom: solid 5px black;
  }

  :last-child {
    border-bottom: solid 5px black;
  }

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }

  @media screen and (max-width: 435px) {
    font-size: 20px;
  }

  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

const BetResults = () => {
  const betContext = useContext(BetCtx);

  const translateHorseNames = (horseColor) => {
    switch (horseColor) {
      case "blue":
        return "Azul";
      case "green":
        return "Verde";
      case "yellow":
        return "Amarelo";
      case "red":
        return "Vermelho";
      case "orange":
        return "Laranja";
      default:
        return;
    }
  };

  const betResultItemRender = (list) => {
    return list.map((item) => (
      <BetResultsItem
        key={item.id}
        runner={item.label}
        horse={translateHorseNames(item.horseColor)}
        color={item.horseColor}
        position={list.indexOf(item) + 1}
      />
    ));
  };

  return (
    <BetBgModel height={"500px"}>
      {betContext.betResult.position === "none" ? (
        <P>Faça sua aposta!</P>
      ) : (
        <Div>
          <P>Resultados!</P>
          <Table>
            <Thead>
              <Tr>
                <Th>CORREDOR</Th>
                <Th>CAVALO</Th>
                <Th>POSIÇÃO</Th>
              </Tr>
            </Thead>
            <Tbody>{betResultItemRender(betContext.runners)}</Tbody>
          </Table>
        </Div>
      )}
    </BetBgModel>
  );
};

export default BetResults;
