import React from 'react';
import Menu from '../components/Menu';
import '../styles/Home.css'; // Reutilizamos los estilos unificados

const PodcastReflexion = () => {
  // ID del episodio extraído de la URL de Spotify
  const episodeId = "4C9QZBbZOdFLyyCY0yESK6";

  return (
    <>
      <Menu />
      
      {/* Banner de fondo superior pegado totalmente al borde */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <img 
          src="https://sharethis-com.imgix.net/uploads/2022/10/Blog_Podcast_101322-min.png" 
          alt="Podcast Reflexión Metacognitiva Final" 
          className="hero-bg-image" 
        />
        {/* Cabecera de la Sección */}
        <header className="home-header">
          <span className="home-badge">Cierre del Proceso</span>
          <h1>Podcast: Reflexión Metacognitiva Final</h1>
          <p>
            Análisis y reflexión sobre los aprendizajes, desafíos y experiencias durante la creación de contenidos digitales y la curaduría educativa.
          </p>
        </header>
      </div>
      
      <main className="home-container">
        

        {/* Sección del Reproductor de Spotify */}
        <section className="presentation-section">
          <div className="presentation-card">
            <div className="presentation-info">
              <h3>Reproductor de Audio</h3>
              <p>Escucha la reflexión final directamente desde Spotify o abre el enlace original.</p>
              
              <a 
                href="https://open.spotify.com/episode/4C9QZBbZOdFLyyCY0yESK6?si=zrcL9ZYZT0eYosCOvA4q3w" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-btn"
              >
                🎧 Abrir en Spotify
              </a>
            </div>

            {/* Contenedor del Iframe Embebido de Spotify */}
            <div className="spotify-embed-container" style={{ borderRadius: '16px', overflow: 'hidden' }}>
              <iframe 
                src={`https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator&theme=0`} 
                width="100%" 
                height="232" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Podcast Reflexión Metacognitiva Final"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PodcastReflexion;