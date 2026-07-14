import Link from "next/link";

const blusas = [
  {
    nome: "Blusa Belle Rosé",
    imagem: "/imagens/imagens/blusa-belle-rose.png",
    slug: "blusa-belle-rose",
    preco: "R$ 79,90",
  },
  {
    nome: "Blusa Bronze",
    imagem: "/imagens/imagens/blusa-bronze.png",
    slug: "blusa-bronze",
    preco: "R$ 52,90",
  },
  {
    nome: "Blusa Eloá",
    imagem: "/imagens/imagens/blusa-eloa.png",
    slug: "blusa-eloa",
    preco: "R$ 85,90",
  },
  {
    nome: "Blusa Grace",
    imagem: "/imagens/imagens/blusa-grace.png",
    slug: "blusa-grace",
    preco: "R$ 102,90",
  },
  {
    nome: "Blusa Serenity",
    imagem: "/imagens/imagens/blusa-serenity.png",
    slug: "blusa-serenity",
    preco: "R$ 85,90",
  },
  {
    nome: "Blusa Elegance",
    imagem: "/imagens/imagens/blusa.png",
    slug: "blusa-elegance",
    preco: "R$ 66,90",
  },
];

export default function Blusas() {
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
          Blusas
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
          Delicadeza e elegância para o seu dia a dia.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "35px",
          }}
        >
          {blusas.map((blusa) => (
            <Link
              key={blusa.slug}
              href={`/produto/${blusa.slug}`}
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
                  src={blusa.imagem}
                  alt={blusa.nome}
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
                    {blusa.nome}
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
                    {blusa.preco}
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