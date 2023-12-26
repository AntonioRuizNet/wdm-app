import React from "react";
//Reducers
import { useSelector } from "react-redux";

export const BarraStatus = ({ handleScreen }) => {
  const userConfig = useSelector((state) => state.aplicationConfig.userConfig);

  return (
    <>
      <div style={{ display: "inline-flex", width: "100%", alignItems: "flex-end", justifyContent: "flex-end", marginTop: "5px", marginRight: "10px" }}>
        <img src="assets/icons/bandera.png" style={{ width: "35px" }} />
        <div style={{ fontSize: "22px", margin: "0px 50px 0px 5px", color: "#8BC34A", cursor: "pointer" }} onClick={() => handleScreen("cartas")}>
          CARTAS
        </div>
        <img src="assets/icons/trofeo.png" style={{ width: "35px" }} />
        <div style={{ fontSize: "22px", margin: "0px 50px 0px 5px", color: "#276958" }}>{userConfig.trofeos}</div>
        <img src="assets/icons/corona.png" style={{ width: "40px" }} />
        <div style={{ fontSize: "22px", margin: "0px 20px 0px 5px", color: "#276958" }}>{userConfig.coronas}</div>
      </div>
    </>
  );
};
