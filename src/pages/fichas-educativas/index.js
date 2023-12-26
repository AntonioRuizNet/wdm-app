import React, { useState, useEffect } from "react";
import { MdArrowBack, MdOutlineRefresh, MdOutlineFileDownload } from "react-icons/md";
import "./styles.css";

export default function FichasEducativas({ tipo, nivel }) {
  let resultados = tipo === "multiplicaciones" && nivel === 3 ? 18 : 28;
  const [refreshCounter, updateRefreshCounter] = useState(0);

  const DesignV1 = ({ icon, n1, n2, n3 }) => {
    let extraClass = "";
    if (tipo === "multiplicaciones" && nivel === 3) {
      extraClass = "hx2";
    }
    return (
      <div className="operation" style={{ padding: "35px 50px", fontWeight: "bolder", fontSize: "25px", lineHeight: "1.2", textAlign: "end", width: "90px", float: "right", color: "#52a38d" }}>
        <p style={{ margin: "0px" }}>{n1}</p>
        <p style={{ margin: "0px", borderBottom: "1px #52a38d solid", marginBottom: "3px" }}>
          <>
            <label className="operator">{icon}</label>
            <label style={n2 < 10 ? { paddingLeft: "50px" } : { paddingLeft: "40px" }}>{n2}</label>
          </>
        </p>
        <p style={{ margin: "0px" }}>{n3 ? n3 : <div className={"completar " + extraClass}></div>}</p>
      </div>
    );
  };

  const configuraActividad = (dificultad, tipo) => {
    let response = { tipo: "", n1: 0, n2: 0 };

    if (tipo === "sumas") {
      response.tipo = "+";
      if (dificultad === 1) {
        response.n1 = Math.floor(Math.random() * 5) + 1;
        response.n2 = Math.floor(Math.random() * 4) + 1;
      }
      if (dificultad === 2) {
        response.n1 = Math.floor(Math.random() * 79) + 10;
        response.n2 = Math.floor(Math.random() * 9) + 1;
      }
      if (dificultad === 3) {
        response.n1 = Math.floor(Math.random() * 40) + 10;
        response.n2 = Math.floor(Math.random() * 45) + 9;
      }
    }

    if (tipo === "restas") {
      response.tipo = "-";
      if (dificultad === 1) {
        response.n1 = Math.floor(Math.random() * 4) + 5;
        response.n2 = Math.floor(Math.random() * 3) + 1;
      }
      if (dificultad === 2) {
        response.n1 = Math.floor(Math.random() * 89) + 10;
        response.n2 = Math.floor(Math.random() * 9) + 1;
      }
      if (dificultad === 3) {
        response.n1 = Math.floor(Math.random() * 79) + 20;
        response.n2 = response.n1 - Math.floor(Math.random() * 9) - 8;
      }
    }

    if (tipo === "multiplicaciones") {
      response.tipo = "x";
      if (dificultad === 1) {
        response.n1 = Math.floor(Math.random() * 9) + 1;
        response.n2 = Math.floor(Math.random() * 9) + 1;
      }
      if (dificultad === 2) {
        response.n1 = Math.floor(Math.random() * 89) + 10;
        response.n2 = Math.floor(Math.random() * 9) + 1;
      }
      if (dificultad === 3) {
        response.n1 = Math.floor(Math.random() * 89) + 10;
        response.n2 = Math.floor(Math.random() * 89) + 10;
      }
    }

    return <DesignV1 icon={response.tipo} n1={response.n1} n2={response.n2} n3={null} />;
  };

  const numResultados = (n, dificultad, tipo) => {
    let resultados = [];
    for (let i = 1; i <= n; i++) resultados.push(configuraActividad(dificultad, tipo));
    return resultados;
  };

  const HandleImage = (nivel) => {
    let img = "";
    if (nivel === 1) {
      let mumImages = 36;
      let idImg = Math.floor(Math.random() * mumImages) + 1;
      img = "https://app.webdelmaestro.com/assets/img/infantil/" + idImg + ".jpg";
    }
    return <img src={img} />;
  };

  const refreshData = () => {
    updateRefreshCounter(refreshCounter + 1);
  };

  const downloadPDF = () => {
    window.print();
  };

  function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  const MenuTop = () => {
    return (
      <div className="no-printableArea" style={{ backgroundColor: "#52a38d", width: "100%", height: "50px", marginBottom: "15px" }}>
        <div className="menuItem" onClick={() => downloadPDF()} style={{ float: "right", marginRight: "0px" }}>
          <label>
            <MdOutlineFileDownload /> Descargar en PDF
          </label>
        </div>
        <div className="menuItem" onClick={() => refreshData()} style={{ float: "right", marginRight: "20px" }}>
          <label>
            <MdOutlineRefresh /> Generar nuevas
          </label>
        </div>
        <div className="menuItem" style={{ float: "left" }}>
          <label>
            <a href="https://webdelmaestro.com/">
              <MdArrowBack /> Inicio
            </a>
          </label>
        </div>
      </div>
    );
  };

  return (
    <>
      {<MenuTop />}
      <div
        className="printableArea"
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          padding: "0px 65px",
          background: "linear-gradient(rgba(255,255,255,.95), rgba(255,255,255,.95)), url('https://app.webdelmaestro.com/assets/operaciones_back.jpg')",
        }}
      >
        <div className="fecha" style={{ width: "100%", margin: "25px 50px", borderBottom: "1px lightgrey solid" }}>
          <label>Nombre:</label> <label style={{ float: "right", marginRight: "200px" }}>Fecha:</label>
        </div>
        {["sumas", "restas", "multiplicaciones"].includes(tipo) &&
          numResultados(resultados, nivel, tipo).map((op) => {
            return <div>{op}</div>;
          })}
        {tipo === "dibujos" && HandleImage(nivel)}
      </div>
    </>
  );
}
