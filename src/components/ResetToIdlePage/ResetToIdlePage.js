import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ResetToIdlePage = () => {
  const navigate = useNavigate();
  const value = useSelector((store) => store.idleReset.value);
  var idleInterval;
  var idleTime = 0;

  let timerIncrement = () => {
    idleTime += 1;
    // console.log("idleTime", idleTime);
    if (idleTime > 30) {
      // navigate("/idle");
      clearInterval(idleInterval);
    }

    if (idleTime > 30 && window.location.pathname === "/idle") {
      // window.location.reload(false);
      idleTime = 0;
    }
  };

  // Listening to state change as handled by Redux then setting up or
  // resetting the timer to jump to Idle page after period of inactivity
  //
  // https://stackoverflow.com/questions/39524855/how-to-trigger-off-callback-after-updating-state-in-redux/56945100#56945100
  //
  useEffect(() => {
    clearInterval(idleInterval);
    idleInterval = setInterval(timerIncrement, 1000); // 1 Second

    return () => {
      clearInterval(idleInterval);
    };
  }, [value]);

  return <></>;
};

export default ResetToIdlePage;
