import styled from "styled-components";
import Header from "../interface/Header";
import Body from "../interface/Body";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Div>
      <Header />
      <Body></Body>
    </Div>
  );
};

export default Home;
