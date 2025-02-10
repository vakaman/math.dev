import { useState } from "react";
import styles from "./style/RuleOfThree.module.css"


function RuleOfThree() {
  const [value1, setvalue1] = useState("");
  const [value2, setvalue2] = useState("");
  const [value3, setvalue3] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculateRuleOfThree = () => {
    if (value1 && value2 && value3) {
      const x = (parseFloat(value3) * parseFloat(value2)) / parseFloat(value1);
      setResult(x);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "600px", margin: "auto" }}>
      
      <h2>🧮 Calculadora de Regra de Três</h2>
      <p>Se <strong>X</strong> está para <strong>{value1 || "A"}</strong> assim como <strong>{value3 || "B"}</strong> está para <strong>{value2 || "C"}</strong>, então:</p>

      <div>
        <input
          className={styles.input}
          type="number"
          placeholder="Valor A"
          value={value1}
          onChange={(e) => setvalue1(e.target.value)}
        />
        está para
        <input
          className={styles.input}
          type="number"
          placeholder="Valor C"
          value={value2}
          onChange={(e) => setvalue2(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          className={styles.input}
          type="number"
          placeholder="Valor B"
          value={value3}
          onChange={(e) => setvalue3(e.target.value)}
        />
        está para <strong>X</strong>
      </div>

      <button onClick={calculateRuleOfThree} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>
        Calcular X
      </button>

      {result !== null && (
        <h3>🔹 Resultado: X = {result.toFixed(2)}</h3>
      )}
    
    </div>
  );
}


export default RuleOfThree;
