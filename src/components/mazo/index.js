import React from "react";
//Reducers
import { useDispatch } from "react-redux";
import { setUserConfig } from "./../../reducers/userConfigSlice";
import { useSelector } from "react-redux";

import "./style.css";

export const Mazo = () => {
  const userConfig = useSelector((state) => state.aplicationConfig.userConfig);
  const dispatch = useDispatch();
  const costeTrofeos = 80;

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getStats = () => {
    function getRandom() {
      var num = Math.random();
      if (num < 0.6) return { nivel: randomIntFromInterval(1, 60), sabiduria: randomIntFromInterval(1, 10), color: "#8bc34acc" };
      else if (num < 0.87) return { nivel: randomIntFromInterval(60, 87), sabiduria: randomIntFromInterval(10, 20), color: "#00c2ff96" };
      else if (num < 0.96) return { nivel: randomIntFromInterval(87, 96), sabiduria: randomIntFromInterval(20, 30), color: "#ff980096" };
      else return { nivel: randomIntFromInterval(96, 100), sabiduria: randomIntFromInterval(30, 40), color: "#ff000996" };
    }
    return getRandom();
  };

  const getNewCard = () => {
    if (userConfig.trofeos >= costeTrofeos) {
      let newCart = { id: Math.floor(Math.random() * 7) + 1, stats: getStats() };
      dispatch(setUserConfig({ ...userConfig, cartas: [...userConfig.cartas, newCart], trofeos: userConfig.trofeos - costeTrofeos }));
    }
  };

  const getStars = (level) => {
    let numStars = [1];
    if (level < 60) numStars = [1];
    else if (level < 87) numStars = [1, 2];
    else if (level < 96) numStars = [1, 2, 3];
    else numStars = [1, 2, 3, 4];

    return (
      <div>
        {numStars.map((s) => {
          return <img src="assets/icons/star.png" style={{ width: "20px" }} />;
        })}
      </div>
    );
  };

  return (
    <div style={{ display: "inline-flex", width: "100%" }}>
      <div className="sobre" onClick={() => getNewCard()}>
        <div className="carta" style={{ backgroundColor: "#8bc34acc" }}>
          <div style={{ textAlign: "center", fontSize: "125px", color: "white" }}>
            <div style={{ height: "150px" }}>?</div>
            <div style={{ height: "45px", marginTop: "-90px" }}>
              <div style={{ display: "inline-flex", marginLeft: "0px", width: "70%", backgroundColor: "white", justifyContent: "space-around", borderRadius: "3px", padding: "4px" }}>
                <img src="assets/icons/trofeo.png" style={{ width: "25px" }} />
                <div style={{ fontSize: "18px", color: "#276958" }}>{costeTrofeos}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mazo " style={{ backgroundImage: "url('assets/mazo/alfombra.jpg')" }}>
        <div style={{ display: "inline-flex", width: "100%", flexWrap: "wrap" }}>
          {userConfig.cartas &&
            userConfig.cartas.map((i) => {
              if (i.stats)
                return (
                  <div className="carta" style={{ backgroundColor: i.stats.color, boxShadow: `0px 0px 4px 1px ${i.stats.color}`, border: `2px ${i.stats.color} solid` }}>
                    <div>{getStars(i.stats.nivel)}</div>
                    <div style={{ textAlign: "center" }}>
                      <img src={"assets/mazo/" + i.id + ".png"} style={{ width: "67%" }} />
                    </div>
                    <div style={{ display: "inline-flex", width: "100%", justifyContent: "space-between" }}>
                      <div style={{ display: "inline-flex", width: "100%", justifyContent: "start" }}>
                        <img src="assets/icons/corazon.png" style={{ width: "20px" }} />
                        <div className="stats">{i.stats.nivel}</div>
                      </div>
                      <div style={{ display: "inline-flex", width: "100%", justifyContent: "end" }}>
                        <img src="assets/icons/energia.png" style={{ width: "20px" }} />
                        <div className="stats">{i.stats.sabiduria}</div>
                      </div>
                    </div>
                  </div>
                );
              else return <></>;
            })}
        </div>
      </div>
    </div>
  );
};
