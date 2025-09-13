import React from "react";
import Header from "../components/Header";
import Model from "../Model";
import "../static/style.css";

function Home() {
  const communities = [
    {
      name: "Comunidade Natureza",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      variant: "prominent",
    },
    {
      name: "Comunidade Tecnologia",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      variant: "prominent",
    },
    {
      name: "Comunidade Esportes",
      image:
        "https://images.unsplash.com/photo-1505843279827-4b522fae12b2?auto=format&fit=crop&w=800&q=80",
      variant: "compact",
    },
  ];

  return (
    <Model>
      <div className="home-page">
        <div className="home-card" role="region" aria-label="Página inicial">
          <Header />

          <h1 className="home-title">Comunidades</h1>

          <div className="home-scroll" role="list">
            {communities.map((com) => (
              <button
                key={com.name}
                role="listitem"
                className={`community-card ${
                  com.variant === "prominent" ? "is-prominent" : "is-compact"
                }`}
                aria-label={`Abrir ${com.name}`}
                onClick={() => {
                  // navegação futura (ex.: navigate(`/comunidades/${slug}`))
                  console.log("Abrir:", com.name);
                }}
              >
                <img
                  src={com.image}
                  alt={com.name}
                  className="community-image"
                  loading="lazy"
                />
                <span className="community-name">{com.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Model>
  );
}

export default Home;
