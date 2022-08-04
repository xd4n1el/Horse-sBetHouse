import styled from "styled-components";

const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  height: 20%;
  width: 100;
`;

const Td = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  width: 33.33%;
  height: 90%;
  color: ${(props) => (props.color ? props.color : "black")};

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
`;

const BetResultsItem = (props) => {
  return (
    <Tr>
      <Td>{props.runner}</Td>
      <Td color={props.color}>{props.horse}</Td>
      <Td>{props.position}º</Td>
    </Tr>
  );
};

export default BetResultsItem;
