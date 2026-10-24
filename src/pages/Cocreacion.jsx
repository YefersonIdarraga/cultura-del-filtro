import React from 'react';
import Menu from '../components/Menu';
import '../styles/Home.css'; // Estilos limpios y consistentes

const Cocreacion = () => {
  return (
    <>
      <Menu />
      
      <main className="home-container">
        {/* Cabecera general de la sección */}
        <header className="home-header">
          <span className="home-badge">Cocreación: Ajedrez Estratégico</span>
          <h1>Cocreación y Estrategias Pedagógicas Digitales</h1>
          <p>
            Desarrollo, planeación y recursos educativos digitales creados por Jairo, Pablo y Zohé.
          </p>
        </header>

        {/* ========================================================= */}
        {/* SECCIÓN 1: Documento de Partida                           */}
        {/* ========================================================= */}
        <section id="doc-partida" className="presentation-section" style={{ marginBottom: '60px' }}>
          <div className="presentation-card">
            <div className="presentation-info">
              <h3>Documento de Partida (Curso TIC)</h3>
              <p>Construido en el curso de enseñanza mediada por las TIC.</p>
              
              <a 
                href="/docs/diseno-de-estrategia-de-intervencion-pedagogica-pablo-jairo-y-zohe.pdf" 
                download 
                className="download-btn"
              >
                📥 Descargar Documento (PDF)
              </a>
            </div>

            <div className="embed-container">
              <iframe 
                src="/docs/diseno-de-estrategia-de-intervencion-pedagogica-pablo-jairo-y-zohe.pdf#view=FitH" 
                title="Documento de Partida - Curso TIC"
                className="presentation-iframe"
              >
                <p>
                  Tu navegador no soporta la visualización. Puedes{' '}
                  <a href="/docs/diseno-de-estrategia-de-intervencion-pedagogica-pablo-jairo-y-zohe.pdf">
                    descargar el archivo aquí
                  </a>.
                </p>
              </iframe>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECCIÓN 2: Planeación y Storyboard                         */}
        {/* ========================================================= */}
        <section id="planeacion-storyboard" className="presentation-section" style={{ marginBottom: '60px' }}>
          <div className="presentation-card">
            <div className="presentation-info">
              <h3>Planeación y Storyboard de Contenido Educativo Digital</h3>
              <p>Diseño pedagógico y estructura multimedia interactiva.</p>
              
              <a 
                href="/docs/jairo-pablo-y-zohe-tced1-recursos-u2-a1-4b-recursodigital-formatoplaneacion.pdf" 
                download 
                className="download-btn"
              >
                📥 Descargar Planeación (PDF)
              </a>
            </div>

            <div className="embed-container">
              <iframe 
                src="/docs/jairo-pablo-y-zohe-tced1-recursos-u2-a1-4b-recursodigital-formatoplaneacion.pdf#view=FitH" 
                title="Planeación y Storyboard de Contenido Educativo Digital"
                className="presentation-iframe"
              >
                <p>
                  Tu navegador no soporta la visualización. Puedes{' '}
                  <a href="/docs/jairo-pablo-y-zohe-tced1-recursos-u2-a1-4b-recursodigital-formatoplaneacion.pdf">
                    descargar el archivo aquí
                  </a>.
                </p>
              </iframe>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECCIÓN 3: Storyboard Mejorado (ID para el submenú)        */}
        {/* ========================================================= */}
        <section id="storyboard-mejorado" className="presentation-section">
          <div className="presentation-card">
            <div className="presentation-info">
              <h3>Storyboard Mejorado</h3>
              <p>Versión optimizada y estructurada del contenido educativo digital.</p>
              
              <a 
                href="/docs/storyboard.pdf" 
                download 
                className="download-btn"
              >
                📥 Descargar Storyboard Mejorado (PDF)
              </a>
            </div>

            <div className="embed-container">
              <iframe 
                src="/docs/storyboard.pdf#view=FitH" 
                title="Storyboard Mejorado"
                className="presentation-iframe"
              >
                <p>
                  Tu navegador no soporta la visualización. Puedes{' '}
                  <a href="/docs/storyboard.pdf">
                    descargar el archivo aquí
                  </a>.
                </p>
              </iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cocreacion;