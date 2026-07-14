import Link from "next/link";

const conjuntos = [
  {
    nome: "Conjunto Clássico",
    preco: "R$ 149,90",
    imagem: "/imagens/imagens/conjunto.png",
    slug: "conjunto-classico",
  },
  {
    nome: "Conjunto Alice",
    preco: "R$ 103,90",
    imagem: "/imagens/imagens/conjunto-alice.png",
    slug: "conjunto-alice",
  },
  {
    nome: "Conjunto Sophie",
    preco: "R$ 112,90",
    imagem: "/imagens/imagens/conjunto-sophie.png",
    slug: "conjunto-sophie",
  },
  {
    nome: "Conjunto Âmbar",
    preco: "R$ 141,90",
    imagem: "/imagens/imagens/conjunto-ambar.png",
    slug: "conjunto-ambar",
  },
  {
    nome: "Conjunto Outono",
    preco: "R$ 168,90",
    imagem: "/imagens/imagens/conjunto-outono.png",
    slug: "conjunto-outono",
  },
  {
    nome: "Conjunto Rubi",
    preco: "R$ 199,90",
    imagem: "/imagens/imagens/conjunto-rubi.png",
    slug: "conjunto-rubi",
  },
];

export default function Conjuntos() {
  return (
    <main
      style={{
        background: "#FFFFFF",
        minHeight: "100vh",
        padding: "140px 20px 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "60px",
            color: "#8A6558",
            fontWeight: 500,
            marginBottom: "15px",
          }}
        >
          Conjuntos
        </h1>

        <p
          style={{
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "18px",
            color: "#6F5A52",
            marginBottom: "60px",
          }}
        >
          Conforto, elegância e sofisticação para o dia a dia.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "35px",
          }}
        >
          {conjuntos.map((conjunto) => (
            <Link
              key={conjunto.slug}
              href={`/produto/${conjunto.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background: "#FBF6EE",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid #E8DDD2",
                  boxShadow: "0 10px 25px rgba(0,0,0,.08)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                <img
                  src={conjunto.imagem}
                  alt={conjunto.nome}
                  style={{
                    width: "100%",
                    height: "460px",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    padding: "22px",
                    textAlign: "center",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "30px",
                      color: "#8A6558",
                    }}
                  >
                    {conjunto.nome}
                  </h3>

                  <p
                    style={{
                      margin: "12px 0",
                      color: "#6F5A52",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Moda Feminina Cristã
                  </p>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "26px",
                      fontWeight: "bold",
                      color: "#CDA45B",
                    }}
                  >
                    {conjunto.preco}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}