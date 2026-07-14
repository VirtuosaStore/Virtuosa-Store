import Link from "next/link";

const saias = [
  {
    nome: "Saia Plissada",
    imagem: "/imagens/imagens/saia.png",
    slug: "saia-plissada",
    preco: "R$ 73,90",
  },
  {
    nome: "Saia Lumière",
    imagem: "/imagens/imagens/saia-lumiere.png",
    slug: "saia-lumiere",
    preco: "R$ 142,90",
  },
  {
    nome: "Saia Belle Nude",
    imagem: "/imagens/imagens/saia-belle-nude.png",
    slug: "saia-belle-nude",
    preco: "R$ 118,90",
  },
  {
    nome: "Saia Verona",
    imagem: "/imagens/imagens/saia-verona.png",
    slug: "saia-verona",
    preco: "R$ 115,90",
  },
  {
    nome: "Saia Essence",
    imagem: "/imagens/imagens/saia-essence.png",
    slug: "saia-essence",
    preco: "R$ 79,90",
  },
  {
    nome: "Saia Celeste",
    imagem: "/imagens/imagens/saia-celeste.png",
    slug: "saia-celeste",
    preco: "R$ 83,90",
  },
];

export default function Saias() {
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
          Saias
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
          Elegância e delicadeza para compor looks femininos e sofisticados.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "35px",
          }}
        >
          {saias.map((saia) => (
            <Link
              key={saia.slug}
              href={`/produto/${saia.slug}`}
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
                  src={saia.imagem}
                  alt={saia.nome}
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
                    {saia.nome}
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
                    {saia.preco}
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