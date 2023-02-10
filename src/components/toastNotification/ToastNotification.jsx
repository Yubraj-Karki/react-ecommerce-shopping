import React, { useContext } from "react";
import "./toastNotification.css";
import { MyContext } from "../../context";

import { TiTick } from "react-icons/ti";
import { FaInfo } from "react-icons/fa";
import { MdOutlineSmsFailed } from "react-icons/md";

const ToastNotification = () => {
  const { showNotification, setShowNotification } = useContext(MyContext);

  // setTimeout(() => {
  //   setShowNotification(showNotification.display == false);
  // }, 1000);

  const toastNotificationStyle =
    showNotification.display === true ? "showNotification" : "hideNotification";

  let Icon;
  switch (showNotification.type) {
    case "success":
      Icon = TiTick;
      break;
    case "info":
      Icon = FaInfo;
      break;
    default:
      Icon = MdOutlineSmsFailed;
  }

  return (
    <div className={"toastNotification " + toastNotificationStyle}>
      <div className="container">
        <div className="left">
          <span className={`line ${showNotification.type}`}></span>
          <div className={`icon ${showNotification.type}`}>
            <Icon />
          </div>
        </div>
        <div className="message">
          <h3>{showNotification.message}</h3>
          <p>{showNotification.subMessage}</p>
        </div>
        <button
          onClick={() =>
            setShowNotification(showNotification.display === false)
          }
          className="closeBtn"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ToastNotification;
