export default function Contato() {
  return (
    <section
      id="contato"
      style={{
        padding: "100px 20px",
        background: "#FDF8F5",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "64px",
            textAlign: "center",
            color: "#8B6B4A",
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 600,
          }}
        >
          Entre em Contato
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Ficaremos felizes em atender você!
        </p>

        <input
          type="text"
          placeholder="Seu nome"
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />

        <input
          type="email"
          placeholder="Seu e-mail"
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
          }}
        />

        <textarea
          rows={5}
          placeholder="Escreva sua mensagem..."
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            fontSize: "16px",
            resize: "none",
          }}
        />

        <a
          href="https://wa.me/5551998379681?text=Olá! Gostaria de conhecer a coleção da Virtuosa Store."
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button
            style={{
              width: "100%",
              background: "#C79B5C",
              color: "white",
              border: "none",
              padding: "16px",
              borderRadius: "30px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            💬 Falar no WhatsApp
          </button>
        </a>
      </div>
    </section>
  );
}