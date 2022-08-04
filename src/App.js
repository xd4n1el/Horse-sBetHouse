import styled from "styled-components";
import Home from "./components/home/Home";
import { ModalProvider } from "styled-react-modal";
import { LoginController } from "./context/Login-Context";
import { BetProvider } from "./context/Bet-Context";

const Div = styled.div`
  width: 100%;
  height: 1250px;
  overflow: hidden;
`;

const App = () => {
  return (
    <Div>
      <LoginController>
        <BetProvider>
          <ModalProvider>
            <Home />
          </ModalProvider>
        </BetProvider>
      </LoginController>
    </Div>
  );
};

export default App;
