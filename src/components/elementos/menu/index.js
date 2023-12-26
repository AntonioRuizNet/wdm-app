import { BarraStatus } from "./../barraStatus";
import "./style.css";
import { MdArrowBack } from "react-icons/md";

export const Menu = ({ handleScreen }) => {
  return (
    <div className="blockMenu">
      <div style={{ display: "inline-flex", width: "100%" }}>
        <div style={{ width: "50%" }}>
          <div className="itemMenu" onClick={() => handleScreen("inicio")}>
            <MdArrowBack /> VOLVER
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <BarraStatus handleScreen={handleScreen} />
        </div>
      </div>
    </div>
  );
};
