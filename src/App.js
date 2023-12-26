import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import { Actividad } from "./Actividad";
import { Menu } from "./components/elementos/menu";
import { Actividades } from "./components/elementos/actividades";
import { Mazo } from "./components/mazo";
//Pages
import FichasEducativas from "./pages/fichas-educativas";
//Reducers
import { useDispatch } from "react-redux";
import { setUserConfig } from "./reducers/userConfigSlice";
//Api
import ApiFichasEducativas from "./api/fichas-educativas.json";
//Styles
import { MdDone } from "react-icons/md";
import "./global.css";

function App() {
  const dispatch = useDispatch();
  const [actividadConfig, setActividadConfig] = useState({});
  const [actividadCount, setActividadCount] = useState(0);
  const [showActividades, setShowActividades] = useState(true);
  const [showMazo, setShowMazo] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const [showModalAdvice, setShowModalAdvice] = useState(true);
  const [modalAdviceExtended, setModalAdviceExtended] = useState(false);
  const [adviceMessage, setAdviceMessage] = useState("");

  const updateActividadConfig = (e) => {
    setActividadConfig(e);
    setActividadCount(actividadCount + 1);
    setMensaje("");
    setShowActividades(false);
  };

  const handleScreen = (tipo) => {
    console.log("handleScreen: " + tipo);
    setMensaje("");
    setActividadConfig({});
    if (tipo === "inicio") {
      setShowMazo(false);
      setShowActividades(true);
    } else if (tipo === "cartas") {
      setShowActividades(false);
      setShowMazo(true);
    }
  };

  const ModalAdvice = () => {
    return (
      showModalAdvice && (
        <div
          style={{
            position: "fixed",
            bottom: "0%",
            width: "300px",
            backgroundColor: "#52a38d99",
            padding: "10px",
            right: "0%",
            margin: "30px 12px",
            zIndex: "1",
            boxShadow: "0px 0px 5px 2px lightgrey",
          }}
        >
          {!modalAdviceExtended && (
            <div>
              <p>¿Nos ayudas a mejorar?</p>
              <p>Dinos que te gustaría agregar.</p>
              <p>
                <button style={{ width: "100%", height: "30px", backgroundColor: " #52a38d", border: "1px #338871 solid" }} onClick={() => handleMondalAdviceExtended()}>
                  Enviar sugerencia
                </button>
              </p>
            </div>
          )}
          {modalAdviceExtended && (
            <div>
              <p>
                <textarea style={{ width: "100%", border: "0px", height: "60px" }} onChange={updateAdviceExtended}>
                  {adviceMessage}
                </textarea>
              </p>
              <p>
                <button style={{ width: "100%", height: "30px", backgroundColor: " #52a38d", border: "1px #338871 solid" }} onClick={() => sendAdvice()}>
                  Enviar
                </button>
              </p>
            </div>
          )}
        </div>
      )
    );
  };

  const handleMondalAdviceExtended = () => {
    setModalAdviceExtended(!modalAdviceExtended);
  };

  const updateAdviceExtended = (e) => {
    console.log(e.target.value);
    //setAdviceMessage(e.target.value);
  };

  const sendAdvice = () => {
    setModalAdviceExtended(!modalAdviceExtended);
    setShowModalAdvice(false);
    console.log("Enviando mensaje: " + adviceMessage);
  };

  const Popup = () => {
    console.log("popup");
    return (
      <>
        <div style={{ width: "100vw", height: "100vh", backgroundColor: "#ffffffe0", position: "absolute", zIndex: "99", marginTop: "-48px" }}></div>

        <div className="aviso">
          {mensaje}
          <div
            style={{ cursor: "pointer", textAlign: "center", backgroundColor: "white", color: "#52a38d", width: "100px", paddingTop: "10px", margin: "auto", marginTop: "25px", fontSize: "35px" }}
            onClick={() => setMensaje("")}
          >
            <MdDone />
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    handleScreen("inicio");
    let userConfigSaved = JSON.parse(localStorage.getItem("userConfig"));
    let initConfig = { logged: false, experiencia: 0, aciertos: 0, trofeos: 0, fallos: 0, coronas: 1, cartas: [] };
    dispatch(setUserConfig(userConfigSaved !== null ? userConfigSaved : initConfig));
  }, []);

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Menu handleScreen={handleScreen} />
                <>
                  {actividadConfig && mensaje === "" && (
                    <Actividad tipo={actividadConfig.tipo} dificultad={actividadConfig.dificultad} setMensaje={setMensaje} setShowActividades={setShowActividades} />
                  )}
                  {mensaje !== "" && <Popup />}
                  {showActividades && <Actividades updateActividadConfig={updateActividadConfig} />}
                  {showMazo && <Mazo />}
                  <div className="footer"></div>
                </>
              </>
            }
          />
          {ApiFichasEducativas.map((f) => {
            return <Route exact path={f.path} element={<FichasEducativas tipo={f.tipo} nivel={f.nivel} />} />;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
