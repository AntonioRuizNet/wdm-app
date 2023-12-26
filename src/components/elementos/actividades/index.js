import react, { useState } from "react";
import "./style.css";

export const Actividades = ({ updateActividadConfig }) => {
  const [bloqueEdad, setBloqueEdad] = useState("4-5");
  const DesignV1 = ({ icon, n1, n2, n3 }) => {
    return (
      <div style={{ padding: "5px 35px", fontWeight: "bolder", fontSize: "25px", lineHeight: "1.2", textAlign: "end", width: "90px", float: "right", color: "#52a38d" }}>
        <p style={{ margin: "0px" }}>{n1}</p>
        <p style={{ margin: "0px", borderBottom: "1px #52a38d solid", marginBottom: "3px" }}>
          {bloqueEdad === "4-5" && (
            <>
              <label>{icon}</label>
              <label style={{ paddingLeft: "50px" }}>{n2}</label>
            </>
          )}
          {bloqueEdad === "6-7" && (
            <>
              {icon === "x" ? <div style={{ rotate: "135deg", marginTop: "-30px" }}>+</div> : <label>{icon}</label>}
              <label style={{ paddingLeft: "30px" }}>{n2}</label>
            </>
          )}
        </p>
        <p style={{ margin: "0px" }}>{n3}</p>
      </div>
    );
  };

  const DesignV2 = ({ n1, tipo }) => {
    return (
      <div style={{ padding: "5px 35px", fontWeight: "bolder", fontSize: "25px", lineHeight: "1.2", textAlign: "end", width: "90px", float: "right", color: "#52a38d" }}>
        <p style={{ fontFamily: "escolar_dotted", fontSize: "100px", marginTop: tipo === "letra" ? "-30%" : "-5%", textAlign: "center", marginLeft: "15px" }}>{n1}</p>
      </div>
    );
  };

  const DesignV21 = ({ n1, tipo }) => {
    return (
      <div style={{ padding: "5px 20px", fontWeight: "bolder", fontSize: "25px", lineHeight: "1.2", textAlign: "end", width: "90px", float: "right", color: "#52a38d" }}>
        <p style={{ fontFamily: "escolar_dotted", fontSize: "100px", marginTop: tipo === "letra" ? "-30%" : "-5%", textAlign: "center", marginLeft: "-30px" }}>{n1}</p>
      </div>
    );
  };

  const actividades = () => {
    switch (bloqueEdad) {
      case "4-5":
        return [
          { design: <DesignV1 icon={"+"} n1={"1"} n2={"2"} n3={"3"} />, name: "Sumas", edad: "4 a 5 años", tipo: "suma", dificultad: 1 },
          { design: <DesignV1 icon={"-"} n1={"3"} n2={"1"} n3={"2"} />, name: "Restas", edad: "4 a 5 años", tipo: "resta", dificultad: 1 },
          { design: <DesignV1 icon={"+"} n1={"20"} n2={"5"} n3={"25"} />, name: "Sumas II", edad: "5 a 6 años", tipo: "suma", dificultad: 2 },
          { design: <DesignV1 icon={"-"} n1={"20"} n2={"5"} n3={"15"} />, name: "Restas II", edad: "5 a 6 años", tipo: "resta", dificultad: 2 },
          { design: <DesignV2 n1={"3"} />, name: "Trazos", edad: "4 a 5 años", tipo: "trazo", dificultad: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] },
          { design: <DesignV2 n1={"a"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] },
          { design: <DesignV21 n1={"ma"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["ma", "me", "mi", "mo", "mu"] },
          { design: <DesignV21 n1={"pa"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["pa", "pe", "pi", "po", "pu"] },
          { design: <DesignV21 n1={"ta"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["ta", "te", "ti", "to", "tu"] },
          { design: <DesignV21 n1={"la"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["la", "le", "li", "lo", "lu"] },
          { design: <DesignV21 n1={"sa"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["sa", "se", "si", "so", "su"] },
          { design: <DesignV21 n1={"ba"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["ba", "be", "bi", "bo", "bu"] },
          { design: <DesignV21 n1={"ca"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["ca", "ce", "ci", "co", "cu"] },
          { design: <DesignV21 n1={"da"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["da", "de", "di", "do", "du"] },
          { design: <DesignV21 n1={"fa"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["fa", "fe", "fi", "fo", "fu"] },
          { design: <DesignV21 n1={"ga"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["ga", "ge", "gi", "go", "gu"] },
          { design: <DesignV21 n1={"ka"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["ka", "ke", "ki", "ko", "ku"] },
          { design: <DesignV21 n1={"ja"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["ja", "je", "ji", "jo", "ju"] },
          { design: <DesignV21 n1={"ra"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["ra", "re", "ri", "ro", "ru"] },
          { design: <DesignV21 n1={"wa"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["wa", "we", "wi", "wo", "wu"] },
          { design: <DesignV21 n1={"na"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["na", "ne", "ni", "no", "nu"] },
          { design: <DesignV21 n1={"za"} tipo={"letra"} />, name: "Trazos", edad: "5 a 6 años", tipo: "trazo", dificultad: ["za", "ze", "zi", "zo", "zu"] },
        ];
      case "6-7":
        return [
          { design: <DesignV1 icon={"+"} n1={"20"} n2={"35"} n3={"55"} />, name: "Sumas", edad: "6 a 7 años", tipo: "suma", dificultad: 3 },
          { design: <DesignV1 icon={"-"} n1={"20"} n2={"15"} n3={"5"} />, name: "Restas", edad: "6 a 7 años", tipo: "resta", dificultad: 3 },
          { design: <DesignV1 icon={"x"} n1={"3"} n2={"2"} n3={"6"} />, name: "Multiplicaciones", edad: "6 a 7 años", tipo: "multiplicacion", dificultad: 1 },
          { design: <DesignV1 icon={"x"} n1={"8"} n2={"5"} n3={"40"} />, name: "Multiplicaciones II", edad: "6 a 7 años", tipo: "multiplicacion", dificultad: 2 },
        ];
      default:
        return [];
    }
  };

  return (
    <>
      <div style={{ display: "flex", margin: "2% 5%", marginTop: "10%" }}>
        <div className={bloqueEdad === "4-5" ? "menuActive menu" : "menu"} onClick={() => setBloqueEdad("4-5")}>
          4 a 6 años
        </div>
        <div className={bloqueEdad === "6-7" ? "menuActive menu" : "menu"} onClick={() => setBloqueEdad("6-7")}>
          6 a 7 años
        </div>
        <div className={"menu"} style={{ color: "lightgrey" }}>
          Más niveles próximamente
        </div>
      </div>
      <hr style={{ margin: "-2% 5%", border: "0.5px #5ca48d87 solid" }} />

      <div className="blockActividades">
        {actividades().map((a) => {
          return (
            <div className="actividad" onClick={() => updateActividadConfig({ tipo: a.tipo, dificultad: a.dificultad })}>
              <div className="actividadNombre">{a.name}</div>
              <div className="actividadEjemplo">{a.design}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
