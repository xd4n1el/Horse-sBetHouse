import styled from "styled-components";
import BetResults from "./betResults/BetResults";
import UserBet from "./userBet/UserBet";
import Notification from "./notify/Notification";
import Reward from "./reward/Reward";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 98%;
  height: 100%;
`;

const BetHome = () => {
  return (
    <Div>
      <Notification isNotified={true} />
      <Reward />
      <UserBet />
      <BetResults />
    </Div>
  );
};

export default BetHome;
