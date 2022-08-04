import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { variant } from "styled-system";
import BetCtx from "../../../context/Bet-Context";
import Reward from "../reward/Reward";
import Button from "../../interface/Button";
import LoginCtx from "../../../context/Login-Context";

const Div = styled("div")(
  {
    display: (props) => props.display,
    alignItems: "center",
    justifyContent: "center",
    height: "7%",
    width: "100%",
    borderRadius: "5px",
  },
  variant({
    variants: {
      win: {
        backgroundColor: "#C7E0BF",
        border: "solid 2px #005819",
      },
      lose: {
        backgroundColor: "#E0BFBF",
        border: "solid 2px #580000",
      },
      draw: {
        backgroundColor: "#ffef96",
        border: "solid 2px #feb236",
      },
    },
  })
);

const Span = styled.span`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const P = styled.p`
  font-family: "Rancho", cursive;
  font-size: 24px;
  color: ${(props) => (props.color ? props.color : "#000000")};
  text-align: center;
`;

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const [notifyResult, setNotifyResult] = useState("");
  const betContext = useContext(BetCtx);
  const loginContext = useContext(LoginCtx);

  useEffect(() => {
    if (
      betContext.betResult.position === "none" ||
      loginContext.isLogin.login === false
    ) {
      setShowNotification(false);
      return;
    }

    setShowNotification(true);

    switch (betContext.betResult.position) {
      case 0:
        setNotifyResult("win");
        break;
      case 1:
        setNotifyResult("win");
        break;
      case 2:
        setNotifyResult("draw");
        break;
      default:
        setNotifyResult("lose");
        break;
    }
  }, [betContext.betResult.position, loginContext.isLogin.login]);

  const notificationRender = () => {
    switch (notifyResult) {
      case "win":
        return <Span>
          <P>
            O corredor em que você apostou chegou em{" "}
            {betContext.betResult.position + 1}° lugar! Verifique sua premiação
          </P>
          <Button
            bgColor={"transparent"}
            border={"none"}
            onClick={() => setShowReward(true)}
          >
            <P color={"#FE2A2A"}>aqui</P>
          </Button>
        </Span>;
      case "draw":
        return <P>
          Infelizmente o seu corredor não atingiu a liderança, mas também não
          atingiu as últimas posições, você não ganha e nem perde.
        </P>;
      default:
        return <P>
          Infelizmente o seu corredor não chegou nas primeiras posições, mais
          sorte na próxima.
        </P>;
    }
  };

  return (
    <Div
      display={showNotification === true ? "flex" : "none"}
      variant={notifyResult}
    >
      {notificationRender()}
      <Reward isOpen={showReward} onClick={() => setShowReward(false)} />
    </Div>
  );
};

export default Notification;
