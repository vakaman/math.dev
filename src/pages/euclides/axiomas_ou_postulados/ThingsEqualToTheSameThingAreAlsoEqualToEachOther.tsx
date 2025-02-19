import { useState } from "react";

function ThingsEqualToTheSameThingAreAlsoEqualToEachOther() {
    const radius = 30; // Raio dos círculos
    const squareSize = 50; // Tamanho dos quadrados
    const [isOverlapping, setIsOverlapping] = useState(false);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>1. As coisas iguais à mesma coisa são também iguais entre si.</h1>
            <p style={{ marginBottom: "20px" }}>
                Se duas coisas são iguais a uma terceira, então elas são iguais entre si.
            </p>

            <hr></hr>
            <h2>As figuras geométricas abaixo são iguais.</h2>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r={radius} fill="#6ec6ff" />
                </svg>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>=</p>
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r={radius} fill="#6ec6ff" />
                </svg>
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>=</p>
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r={radius} fill="#6ec6ff" />
                </svg>
            </div>

            <hr></hr>

            <div>
                <h2>As variáveis abaixo são iguais.</h2>
                <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                    a = 10 | b = 10 | c = 10 <br></br><br></br>
                    → Então... <strong>a = b = c</strong>.<br></br>
                    → Então... <strong>se A = B e B = C, então A = C</strong>.
                </p>

                <hr></hr>
                <h2>2. E, caso sejam adicionadas coisas iguais a coisas iguais, os todos são iguais.</h2>
                <p style={{ fontSize: "18px" }}>
                    a + 2 = 2 + b = c + 2 <br></br><br></br>
                    → Então... a, b e c continuam iguais.
                </p>

                <hr></hr>
                <h2>3. E, caso de iguais sejam subtraídas iguais, as restantes são iguais.</h2>
                <p style={{ fontSize: "18px" }}>
                    a - 2 = 2 - b = c - 2 <br></br><br></br>
                    → Então... a, b e c continuam iguais.
                </p>

                <hr></hr>
                <h2>4. E, caso iguais sejam adicionadas a desiguais, os todos são desiguais.</h2>
                <p style={{ fontSize: "18px" }}>
                    a - 2 = 4 - b = c - 2 <br></br><br></br>
                    → Então... a, b e c agora são desiguais.
                </p>

                <hr></hr>
                <h2>5. E os dobros da mesma coisa são iguais entre si.</h2>
                <p style={{ fontSize: "18px" }}>
                    a . 2 = 2 . b = c . 2 <br></br><br></br>
                    → Então... a, b e c continuam iguais.
                </p>

                <hr></hr>
                <h2>6. E as metades da mesma coisa são iguais entre si.</h2>
                <p style={{ fontSize: "18px" }}>
                    a / 2 = 2 / b = c / 2 <br></br><br></br>
                    → Então... a, b e c continuam iguais.
                </p>

                <hr></hr>

                <h2>7. As coisas que se ajustam uma à outra são iguais entre si.</h2>
                <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                    Se duas formas podem ser sobrepostas perfeitamente, então elas são iguais.
                </p>

                <div style={{
                    position: "relative",
                    height: "120px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "70px",
                    margin: "0 auto",
                }}>
                    <div
                        style={{
                            width: `${squareSize}px`,
                            height: `${squareSize}px`,
                            backgroundColor: "#ff8c8c",
                            position: "absolute",
                            top: isOverlapping ? "35px" : "0px",
                            left: isOverlapping ? "0px" : "20px",
                            transition: "0.5s",
                            opacity: isOverlapping ? 0.6 : 1,
                        }}
                    ></div>

                    <div
                        style={{
                            width: `${squareSize}px`,
                            height: `${squareSize}px`,
                            backgroundColor: "#ff8c8c",
                            position: "absolute",
                            top: "35px",
                            left: "0px",
                            opacity: 0.6,
                        }}
                    ></div>
                </div>

                <button
                    onClick={() => setIsOverlapping(!isOverlapping)}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor: "#4CAF50",
                        color: "white",
                    }}
                >
                    {isOverlapping ? "Separar" : "Sobrepor"}
                </button>

                <p style={{ marginTop: "10px" }}>
                    {isOverlapping
                        ? "Os quadrados agora estão sobrepostos perfeitamente. Eles são iguais."
                        : "Clique para sobrepor os quadrados e ver que eles são iguais."}
                </p>

                <hr></hr>
                <h2>8. E o todo é maior do que a parte.</h2>
                <p style={{ fontSize: "18px" }}>
                    a + b {'>'} a <br></br><br></br>
                    → Então... o produto da soma de a com b é maior do que a e também maior do que b.
                </p>

                <hr></hr>
                <div style={{ padding: "20px", textAlign: "center" }}>
                    <h1>9. E duas retas não contêm uma área.</h1>
                    <p style={{ marginBottom: "20px" }}>
                        Duas linhas sozinhas não podem conter uma área, pois é necessário pelo menos três segmentos conectados para formar uma figura fechada.
                    </p>

                    <h2>❌ Duas linhas não formam uma área</h2>
                    <svg width="200" height="100">
                        <line x1="20" y1="30" x2="180" y2="30" stroke="red" strokeWidth="3" />
                        <line x1="20" y1="70" x2="180" y2="70" stroke="red" strokeWidth="3" />
                    </svg>
                    <p>Essas duas linhas estão separadas, mas não formam uma área.</p>

                    <hr></hr>

                    <h2>✅ Três linhas formam uma área</h2>
                    <svg width="200" height="150">
                        <polygon points="100,20 180,120 20,120" stroke="green" strokeWidth="3" fill="rgba(0, 255, 0, 0.2)" />
                    </svg>
                    <p>Com três segmentos fechando um espaço, agora há uma área.</p>
                </div>
            </div>

            <hr></hr>

            <div>
                <h2>Conclusão</h2>
                <p>Manter a igualdade não fere os princípios do jogo matemático.</p>
                <p>
                    O objetivo deste princípio é permitir manipular os números para tornar as equações mais fáceis de resolver, mantendo a igualdade.
                </p>

                <p>
                    1 = 1 → Um é igual a um<br></br>
                    1 + 2 ≠ 1 → Um somado a dois é diferente de um<br></br>
                    1 + 2 = 2 + 1 → Um somado a dois é igual a dois somado a um <br></br>
                    1 + 10 = 1 + 2 + 8 → Um somado a dez é igual a um somado a dois somado a oito <br></br>
                </p>
            </div>

            <hr></hr>

            <div style={{ marginTop: "50px" }}>
                <p>
                    A referência é o livro de Euclides, página 99, onde ele chama de "noções comuns".
                </p>
                <p>
                    1. As coisas iguais à mesma coisa são também iguais entre si. <br></br>
                    2. E, caso sejam adicionadas coisas iguais a coisas iguais, os todos são iguais. <br></br>
                    3. E, caso de iguais sejam subtraídas iguais, as restantes são iguais. <br></br>
                    4. E, caso iguais sejam adicionadas a desiguais, os todos são desiguais. <br></br>
                    5. E os dobros da mesma coisa são iguais entre si. <br></br>
                    6. E as metades da mesma coisa são iguais entre si. <br></br>
                    7. E as coisas que se ajustam uma à outra são iguais entre si. <br></br>
                    8. E o todo é maior do que a parte. <br></br>
                    9. E duas retas não contêm uma área.
                </p>
            </div>
        </div>
    );
}

export default ThingsEqualToTheSameThingAreAlsoEqualToEachOther;
