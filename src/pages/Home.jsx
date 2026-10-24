import React from 'react';
import Menu from '../components/Menu';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      <Menu />
      
      {/* Banner de fondo pegado totalmente al borde superior */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        {/* Puedes cambiar la ruta de la imagen por la que tengas en public/images/ o un enlace */}
        <img 
          src="https://miro.medium.com/v2/resize:fit:1400/1*5amDU9sus0g6wS06pEWZ8Q.png" 
          alt="Curaduría Digital Educativa" 
          className="hero-bg-image" 
        />
      </div>
      
      <main className="home-container">
        {/* Cabecera de la Sección */}
        <header className="home-header">
          <span className="home-badge">Módulo Educativo</span>
          <h1>La curaduría de contenidos digitales</h1>
          <p>
            Estrategias críticas para la selección, filtrado y resignificación de la información en entornos educativos.
          </p>
        </header>

        {/* Sección de la Presentación Interactiva */}
        <section className="presentation-section">
          <div className="presentation-card">
            <div className="presentation-info">
              <h3>Presentación Interactiva</h3>
              <p>Usa los controles inferiores de la diapositiva para navegar o ponla en pantalla completa.</p>
              
              <a 
                href="/docs/curaduria-digital-educativa.pptx" 
                download 
                className="download-btn"
              >
                📥 Descargar Archivo Original
              </a>
            </div>

            {/* Visor interactivo tipo Slides */}
            <div className="embed-container slideshow-container">
              <iframe 
                src="https://docs.google.com/presentation/d/e/2PACX-1vT3AxceDj475mPV8-J_tL7BOiUYvMcaJ2uxh21ddXI8Fh0eWywH7zGfQdnzTZECxuruC2Lg0dn16d7w/pubembed?start=false&loop=false&delayms=3000" 
                title="Curaduría de Contenidos - Presentación Interactiva"
                className="presentation-iframe"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;