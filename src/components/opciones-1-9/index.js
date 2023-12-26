import "./style.css";
export const options = (updateResult) => {
  const opciones = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
  return (
    <>
      {opciones.map((opc, index) => {
        return (
          <div key={"op_" + index} style={{ display: "flex" }}>
            {opc.map((o, index2) => {
              return (
                <div key={"opc_" + index2} onClick={() => updateResult(o)} className="itemOpc" style={{ width: index === 3 ? "100%" : "" }}>
                  {o}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
