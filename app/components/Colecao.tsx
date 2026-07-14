import Link from "next/link";

export default function Colecao() {
  return (
    <section
      id="colecao"
      style={{
        padding: "100px 20px",
        background: "#FFFFFF",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "56px",
            color: "#8A6558",
            fontWeight: 500,
            marginBottom: "15px",
          }}
        >
          Nossa Coleção
        </h2>

        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "18px",
            color: "#6F5A52",
            marginBottom: "70px",
          }}
        >
          Escolha a categoria que deseja conhecer.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "35px",
            flexWrap: "wrap",
          }}
        >
          {/* Vestidos */}
          <Link
            href="/vestidos"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: "300px",
                background: "#FBF6EE",
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid #E8DDD2",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <img
                src="/imagens/imagens/vestido.png"
                alt="Vestidos"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />

              <div style={{ padding: "22px 15px" }}>
                <h3
                  style={{
                    margin: 0,
                    textAlign: "center",
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "32px",
                    color: "#8A6558",
                    fontWeight: 500,
                  }}
                >
                  Vestidos
                </h3>
              </div>
            </div>
          </Link>

          {/* Blusas */}
          <Link
            href="/blusas"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: "300px",
                background: "#FBF6EE",
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid #E8DDD2",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <img
                src="/imagens/imagens/blusa.png"
                alt="Blusas"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />

              <div style={{ padding: "22px 15px" }}>
                <h3
                  style={{
                    margin: 0,
                    textAlign: "center",
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "32px",
                    color: "#8A6558",
                    fontWeight: 500,
                  }}
                >
                  Blusas
                </h3>
              </div>
            </div>
          </Link>
          {/* Saias */}
          <Link
            href="/saias"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: "300px",
                background: "#FBF6EE",
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid #E8DDD2",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <img
                src="/imagens/imagens/saia.png"
                alt="Saias"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />

              <div style={{ padding: "22px 15px" }}>
                <h3
                  style={{
                    margin: 0,
                    textAlign: "center",
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "32px",
                    color: "#8A6558",
                    fontWeight: 500,
                  }}
                >
                  Saias
                </h3>
              </div>
            </div>
          </Link>

          {/* Conjuntos */}
          <Link
            href="/conjuntos"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                width: "300px",
                background: "#FBF6EE",
                borderRadius: "22px",
                overflow: "hidden",
                border: "1px solid #E8DDD2",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              }}
            >
              <img
                src="/imagens/imagens/conjunto.png"
                alt="Conjuntos"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />

              <div style={{ padding: "22px 15px" }}>
                <h3
                  style={{
                    margin: 0,
                    textAlign: "center",
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "32px",
                    color: "#8A6558",
                    fontWeight: 500,
                  }}
                >
                  Conjuntos
                </h3>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}