"use client";

import Header from "../components/header";

export default function QuemSomos() {
  return (
    <>
      <Header />

      <main
        style={{
          background: "#FBF6EE",
          minHeight: "100vh",
          padding: "160px 20px 100px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#FFFFFF",
            borderRadius: "20px",
            padding: "60px",
            boxShadow: "0 10px 30px rgba(0,0,0,.06)",
          }}
        >
          <span
            style={{
              color: "#CDA45B",
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Virtuosa Store
          </span>

          <h1
            style={{
              marginTop: "18px",
              color: "#8A6558",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "58px",
              fontWeight: 500,
            }}
          >
            Quem Somos
          </h1>

          <p
            style={{
              color: "#6F5A52",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            A Virtuosa Store nasceu com um propósito que vai muito além da moda.
          </p>

          <p
            style={{
              color: "#6F5A52",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            Acreditamos que roupa é muito mais do que vestir; é identidade, é
            expressão e, acima de tudo, é propósito de Deus. ♡
          </p>

          <p
            style={{
              color: "#6F5A52",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            Nossa missão é oferecer peças que unem beleza, qualidade e{" "}
            <strong>modéstia</strong>, ajudando mulheres cristãs a se vestirem
            com elegância e, acima de tudo, com <strong>propósito</strong>.
          </p>

          <h2
            style={{
              marginTop: "55px",
              color: "#8A6558",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "42px",
              fontWeight: 500,
            }}
          >
            Nosso Objetivo ♡
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              marginTop: "30px",
            }}
          >
            <p
              style={{
                color: "#6F5A52",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              🤍 Promover a modéstia como essência da beleza que agrada a Deus.
            </p>

            <p
              style={{
                color: "#6F5A52",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              🤍 Incentivar mulheres a se vestirem com sabedoria e propósito,
              servindo a Deus em tudo o que fazem.
            </p>

            <p
              style={{
                color: "#6F5A52",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              🤍 Oferecer peças que edificam, valorizam e refletem a identidade
              de filhas do Rei.
            </p>

            <p
              style={{
                color: "#6F5A52",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              🤍 Levar o amor de Cristo através de cada detalhe da nossa loja e
              do nosso atendimento.
            </p>
          </div>

          <div
            style={{
              marginTop: "70px",
              padding: "35px",
              background: "#FBF6EE",
              borderLeft: "4px solid #CDA45B",
              borderRadius: "12px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#8A6558",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "30px",
                fontStyle: "italic",
                lineHeight: 1.7,
              }}
            >
              "Da mesma forma, quero que as mulheres se vistam apropriadamente,
              adornando-se com modéstia e discrição, não com tranças ou ouro,
              nem com pérolas ou roupas caras, mas com boas obras, como convém
              a mulheres que declaram adorar a Deus."
            </p>

            <p
              style={{
                marginTop: "18px",
                color: "#CDA45B",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              1 Timóteo 2:9–10
            </p>
          </div>
        </div>
      </main>
    </>
  );
}