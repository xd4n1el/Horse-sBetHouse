import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height};
  background-color: #9c907d;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 3px rgba(20, 20, 10, 0.3);
`;

const BetBgModel = (props) => {
  return <Div height={props.height}>{props.children}</Div>;
};

export default BetBgModel;
