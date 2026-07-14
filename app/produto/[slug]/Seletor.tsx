"use client";

type Props = {
  opcoes: string[];
  value?: string;
  onChange?: (valor: string) => void;
};

export default function Seletor({
  opcoes,
  value,
  onChange,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {opcoes.map((opcao) => {
        const selecionado = value === opcao;

        return (
          <button
            key={opcao}
            type="button"
            onClick={() => onChange?.(opcao)}
            style={{
              padding: "10px 18px",
              border: selecionado
                ? "2px solid #CDA45B"
                : "1px solid #D8C6B8",
              borderRadius: "30px",
              cursor: "pointer",
              background: selecionado ? "#CDA45B" : "#fff",
              color: selecionado ? "#fff" : "#6F5A52",
              fontWeight: 600,
              transition: "all .2s ease",
            }}
          >
            {opcao}
          </button>
        );
      })}
    </div>
  );
}