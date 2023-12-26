import React, { useState, useEffect, useRef } from "react";
import { operation } from "./components/estructuraBasica";
import { options } from "./components/opciones-1-9";
//Reducers
import { useDispatch } from "react-redux";
import { setUserConfig } from "./reducers/userConfigSlice";
import { useSelector } from "react-redux";

import { MdDone, MdClose, MdArrowForward } from "react-icons/md";
import CanvasDraw from "react-canvas-draw";
import "./fonts/Cursive_standard.eot";

export const Actividad = ({ tipo, dificultad }) => {
  const userConfig = useSelector((state) => state.aplicationConfig.userConfig);
  const dispatch = useDispatch();
  const [result, setResult] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [operator, setOperator] = useState("");
  const dataRef = useRef(null);

  const configurarActividad = () => {
    if (tipo === "suma") {
      setOperator("+");
      if (dificultad === 1) {
        let n1 = Math.floor(Math.random() * 5) + 1;
        let n2 = Math.floor(Math.random() * 4) + 1;
        setNumbers([n1, n2]);
      }
      if (dificultad === 2) {
        let n1 = Math.floor(Math.random() * 79) + 10;
        let n2 = Math.floor(Math.random() * 9) + 1;
        setNumbers([n1, n2]);
      }
      if (dificultad === 3) {
        let n1 = Math.floor(Math.random() * 40) + 10;
        let n2 = Math.floor(Math.random() * 45) + 1;
        setNumbers([n1, n2]);
      }
    }
    if (tipo === "resta") {
      setOperator("-");
      if (dificultad === 1) {
        let n1 = Math.floor(Math.random() * 4) + 5;
        let n2 = Math.floor(Math.random() * 3) + 1;
        setNumbers([n1, n2]);
      }
      if (dificultad === 2) {
        let n1 = Math.floor(Math.random() * 89) + 10;
        let n2 = n1 - Math.floor(Math.random() * 9) + 1;
        setNumbers([n1, n2]);
      }
      if (dificultad === 3) {
        let n1 = Math.floor(Math.random() * 89) + 10;
        let n2 = Math.floor(Math.random() * 9) + 1;
        setNumbers([n1, n2]);
      }
    }

    if (tipo === "multiplicacion") {
      setOperator("x");
      if (dificultad === 1) {
        let n1 = Math.floor(Math.random() * 2) + 2;
        let n2 = Math.floor(Math.random() * 2) + 2;
        setNumbers([n1, n2]);
      }
      if (dificultad === 2) {
        let n1 = Math.floor(Math.random() * 5) + 4;
        let n2 = Math.floor(Math.random() * 5) + 3;
        setNumbers([n1, n2]);
      }
    }

    if (tipo === "trazo") {
      function randomLetter() {
        let valuesLength = dificultad.length;
        let result = dificultad[Math.floor(Math.random() * valuesLength)];
        console.log(result);
        return result;
      }

      let n1 = randomLetter();
      setNumbers([n1]);
    }
  };

  const checkOperation = () => {
    let res = 0;
    if (tipo === "suma") {
      numbers.map((n) => {
        res = n + res;
      });
    }
    if (tipo === "resta") {
      numbers.map((n, index) => {
        if (index === 0) res = n;
        else res = res - n;
      });
    }
    if (tipo === "multiplicacion") {
      res = 1;
      numbers.map((n) => {
        res = n * res;
      });
    }
    return res;
  };

  const verificarResultado = () => {
    let res = checkOperation();
    console.log(result, res);
    setResult(
      result == res ? (
        <>
          <MdDone style={{ float: "left", color: "darkgreen", fontSize: "50px" }} />
          {result}
        </>
      ) : (
        <>
          <MdClose style={{ float: "left", color: "darkred", fontSize: "50px" }} />
          {result}
        </>
      )
    );

    if (result == res) {
      let aciertos = userConfig.aciertos + 1;
      let trofeos = userConfig.trofeos + 3;
      let experiencia = userConfig.experiencia + 20;
      let coronas = Math.floor(parseInt(experiencia) / 100) + 1;
      dispatch(setUserConfig({ ...userConfig, aciertos: aciertos, trofeos: trofeos, experiencia: experiencia, coronas: coronas }));
    } else {
      let fallos = userConfig.aciertos + 1;
      let trofeos = userConfig.trofeos - 1;
      let experiencia = userConfig.experiencia + 5;
      let coronas = Math.floor(parseInt(experiencia) / 100) + 1;
      dispatch(setUserConfig({ ...userConfig, fallos: fallos, trofeos: trofeos, experiencia: experiencia, coronas: coronas }));
    }

    setTimeout(() => {
      setResult("");
      configurarActividad();
    }, 1000);
  };

  const updateResult = (e) => {
    setResult(e + "" + result);
  };

  const handleTramo = () => {
    const data = dataRef.current.getSaveData();
    console.log(data);
    setTimeout(() => {
      dataRef.current.clear();
      configurarActividad();
    }, 1000);
  };

  const clearTramo = () => {
    dataRef.current.clear();
  };

  useEffect(() => {
    let longPrueba = dificultad;
    if ((tipo === "suma" || tipo === "resta") && dificultad === 3) longPrueba = 2;
    if (longPrueba === result?.length) {
      verificarResultado(result);
    }
  }, [result]);

  useEffect(() => {
    configurarActividad();
  }, [tipo, dificultad]);

  return (
    <>
      {(tipo === "suma" || tipo === "resta" || tipo === "multiplicacion") && <>{operation(numbers, operator, options(updateResult), result)}</>}
      {tipo === "trazo" && (
        <div style={{ position: "relative", width: "340px", margin: "15% auto" }}>
          <CanvasDraw ref={dataRef} canvasWidth={350} canvasHeight={500} style={{ margin: "5% auto" }} />
          <p style={{ fontSize: "2rem", position: "absolute", margin: "-517px 0px", border: "1px lightgrey solid", padding: "13px", backgroundColor: "#f8f8f8", width: "85px", textAlign: "center" }}>
            {numbers[0]}
          </p>
          <div style={{ textAlign: "center", position: "absolute", left: "125px", top: "0" }}>
            <button
              onClick={clearTramo}
              style={{ backgroundColor: "white", border: "1px solid cornflowerblue", padding: "20px 0px", width: "100px", cursor: "pointer", width: "100px", color: "cornflowerblue" }}
            >
              <MdClose style={{ fontSize: "2rem" }} />
            </button>
          </div>
          <div style={{ textAlign: "center", position: "absolute", right: "0", top: "0" }}>
            <button onClick={handleTramo} style={{ backgroundColor: "white", border: "1px solid #52a38d", padding: "20px 0px", width: "100px", cursor: "pointer", color: "#52a38d" }}>
              <MdArrowForward style={{ fontSize: "2rem" }} />
            </button>
          </div>

          {dificultad[0].length === 1 ? (
            <p style={{ fontFamily: "escolar_dotted", fontSize: "27rem", position: "", margin: "-450px 90px" }}>{numbers[0]}</p>
          ) : (
            <p>
              <p style={{ fontFamily: "escolar_dotted", fontSize: "14rem", position: "", margin: "-400px 50px" }}>
                {numbers[0][0]}
                {numbers[0][1]}
              </p>
            </p>
          )}
        </div>
      )}
    </>
  );
};
