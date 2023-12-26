import "./style.css";
export const operation = (numbers, operator, results, result) => {
  const getSpaces = () => {
    let spaces = 0;

    if (operator === "+") {
      numbers.map((n) => (spaces = spaces + n));
    }
    if (operator === "-") {
      numbers.map((n, index) => {
        if (index === 0) spaces = n;
        else spaces = spaces - n;
      });
    }
    return Array.from({ length: spaces.toString().length }, (v, i) => i);
  };

  return (
    <div className="estructura">
      {numbers.map((n, index) => {
        return (
          <div key={"n_" + index} style={{ letterSpacing: "0.8rem", marginBottom: "-10px" }}>
            {n}
          </div>
        );
      })}
      {operator === "x" ? (
        <div style={{ textAlign: "left", position: "absolute", marginTop: "-50px", rotate: "135deg" }}>+</div>
      ) : (
        <div style={{ textAlign: "left", position: "absolute", marginTop: "-50px" }}>{operator}</div>
      )}
      <hr />
      <div style={{ textAlign: "right", marginBottom: "-50px", marginRight: "9px", display: "flex", justifyContent: "end", flexDirection: "row-reverse" }}>
        {getSpaces().map((s, index) => {
          let color = index >= result.length ? "1px #5ca48d solid" : "1px white solid";
          return <div style={{ border: color, padding: "0px 8px", margin: "0px 3px", height: "50px", width: "20px" }}></div>;
        })}
      </div>
      <div style={{ letterSpacing: "0.8rem", height: "60px" }}>{result ? result : ""}</div>
      <div>{results}</div>
    </div>
  );
};
