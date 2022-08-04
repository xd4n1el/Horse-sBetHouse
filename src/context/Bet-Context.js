import React, { useContext, useEffect, useState } from "react";
import LoginCtx from "./Login-Context";

const runners = [
  { id: "runner1", label: "Carlos", value: "carlos", horseColor: "blue" },
  { id: "runner2", label: "Otávio", value: "otavio", horseColor: "green" },
  { id: "runner3", label: "Kin", value: "kin", horseColor: "yellow" },
  { id: "runner4", label: "Jun", value: "jun", horseColor: "red" },
  { id: "runner5", label: "Son", value: "son", horseColor: "orange" },
];

const BetCtx = React.createContext({
  runners: [],
  bet: (runner, amount) => {},
  sortList: () => {},
  betResult: {},
});

export const BetProvider = (props) => {
  const [runnersList, setRunnersList] = useState(runners);
  const [result, setResult] = useState({ position: "none", amountGain: 0 });

  const loginContext = useContext(LoginCtx);

  function moveArrayElement(array, from, to) {
    const elementPosition = array[from];
    array.splice(from, 1);
    array.splice(to, 0, elementPosition);
  }

  const run = () => {
    setRunnersList((list) => {
      const setPos = Math.floor(Math.random() * list.length);
      list.forEach((element) =>
        moveArrayElement(list, list.indexOf(element), setPos)
      );
      return [...list];
    });
  };

  const userBet = (runner, amount) => {
    const getPos = runnersList.findIndex((racer) => racer.id === runner.id);
    setResult((oldResult) => {
      return { ...oldResult, position: getPos };
    });

    switch (getPos) {
      case 0:
        loginContext.setBalance(amount * 2 - amount);
        setResult((oldResult) => {
          return { ...oldResult, amountGain: amount * 2 };
        });
        break;
      case 1:
        loginContext.setBalance(amount * 1.5 - amount);
        setResult((oldResult) => {
          return { ...oldResult, amountGain: amount * 1.5 };
        });
        break;
      case 2:
        break;
      default:
        loginContext.setBalance(-amount);
        break;
    }
  };

  useEffect(() => {
    if (loginContext.isLogin.login === false) {
      setResult({ position: "none", amountGain: 0 });
    }
  }, [loginContext.isLogin.login]);

  return (
    <BetCtx.Provider
      value={{
        runners: runnersList,
        bet: userBet,
        sortList: run,
        betResult: result,
      }}
    >
      {props.children}
    </BetCtx.Provider>
  );
};

export default BetCtx;
