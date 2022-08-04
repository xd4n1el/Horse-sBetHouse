import styled from "styled-components";
import BetHome from "../betHouse/BetHome";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1200px;
  width: 100%;
  margin: 5px 0px;
  overflow: hidden;

  @media screen and (min-width: 1280px) {
    width: 60%;
  }
`;

const Body = () => {
  return (
    <Div>
      <BetHome />
    </Div>
  );
};

export default Body;
