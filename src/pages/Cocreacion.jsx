import React, { useState } from 'react';
import Menu from '../components/Menu';
import '../styles/Home.css'; // Estilos limpios y consistentes

const Cocreacion = () => {
  // Estado para controlar qué documento está abierto en el modal (null si está cerrado)
  const [activeModalDoc, setActiveModalDoc] = useState(null);

  // Lista de documentos configurados para abrirse en modal
  const documents = [
    {
      id: 'doc-partida',
      title: 'Documento de Partida (Curso TIC)',
      description: 'Construido en el curso de enseñanza mediada por las TIC.',
      fileUrl: '/docs/diseno-de-estrategia-de-intervencion-pedagogica-pablo-jairo-y-zohe.pdf#view=FitH',
      downloadUrl: '/docs/diseno-de-estrategia-de-intervencion-pedagogica-pablo-jairo-y-zohe.pdf',
    },
    {
      id: 'planeacion-storyboard',
      title: 'Planeación y Storyboard de Contenido Educativo Digital',
      description: 'Diseño pedagógico y estructura multimedia interactiva.',
      fileUrl: '/docs/jairo-pablo-y-zohe-tced1-recursos-u2-a1-4b-recursodigital-formatoplaneacion.pdf#view=FitH',
      downloadUrl: '/docs/jairo-pablo-y-zohe-tced1-recursos-u2-a1-4b-recursodigital-formatoplaneacion.pdf',
    },
    {
      id: 'storyboard-mejorado',
      title: 'Storyboard Mejorado',
      description: 'Versión optimizada y estructurada del contenido educativo digital.',
      fileUrl: '/docs/storyboard.pdf#view=FitH',
      downloadUrl: '/docs/storyboard.pdf',
    },
  ];

  return (
    <>
      <Menu />
      
      {/* Banner de fondo superior pegado totalmente al borde */}
      <div className="hero-banner">
        <div className="hero-overlay"></div>
        <img 
          src="https://gambitodedama.com/wp-content/uploads/2023/04/01_Estrategia-1024x576.jpg" 
          alt="Cocreación y Estrategias Pedagógicas Digitales" 
          className="hero-bg-image" 
        />
        {/* Cabecera general de la sección */}
        <header className="home-header">
          <span className="home-badge">Cocreación: Ajedrez Estratégico</span>
          <h1>Cocreación y Estrategias Pedagógicas Digitales</h1>
          <p>
            Desarrollo, planeación y recursos educativos digitales creados por Jairo, Pablo y Zohé.
          </p>
        </header>
      </div>
      
      <main className="home-container">
        

        {/* ========================================================= */}
        {/* SECCIÓN 1: Sitio Web Interactivo (Canva) - Queda igual    */}
        {/* ========================================================= */}
        <section id="sitio-web-interactivo" className="presentation-section">
          <div className="presentation-card">
            <div className="presentation-info">
              <h3>Sitio Web Interactivo</h3>
              <p>Desarrollo de contenido web interactivo.</p>
              
              <a 
                href="https://www.canva.com/design/DAG57SzMEdo/0brzXdvs9nB658weF5u_VQ/view?utm_content=DAG57SzMEdo&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-btn"
              >
                🔗 Abrir Sitio Web en Canva
              </a>
            </div>

            <div className="embed-container" style={{ height: '700px' }}>
              <iframe 
                loading="lazy" 
                style={{ width: '100%', height: '100%', border: 'none' }}
                src="https://www.canva.com/design/DAG57SzMEdo/0brzXdvs9nB658weF5u_VQ/view?embed" 
                allowFullScreen="allowfullscreen" 
                allow="fullscreen"
                title="Beige Blogger Moderna Personal Sitio web - Dina Soledad Velásquez González"
              >
                <p>
                  Tu navegador no soporta la visualización. Puedes{' '}
                  <a href="https://www.canva.com/design/DAG57SzMEdo/0brzXdvs9nB658weF5u_VQ/view?utm_content=DAG57SzMEdo&utm_campaign=designshare&utm_medium=embeds&utm_source=link">
                    ver el sitio web original aquí
                  </a>.
                </p>
              </iframe>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECCIONES DE DOCUMENTOS CON BOTÓN MODAL                    */}
        {/* ========================================================= */}
        {documents.map((doc) => (
          <section key={doc.id} id={doc.id} className="presentation-section" style={{ marginBottom: '60px' }}>
            <div className="presentation-card">
              <div className="presentation-info" style={{ borderBottom: 'none', marginBottom: 0, paddingBottom: 0 }}>
                <div>
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                </div>
                
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {/* Botón para abrir el visor en Modal */}
                  <button 
                    onClick={() => setActiveModalDoc(doc)}
                    className="download-btn"
                    style={{ cursor: 'pointer', border: 'none' }}
                  >
                    👁️ Ver Documento
                  </button>

                  <a 
                    href={doc.downloadUrl} 
                    download 
                    className="download-btn"
                  >
                    📥 Descargar (PDF)
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* ========================================================= */}
      {/* VENTANA MODAL PARA LOS VISORES PDF                        */}
      {/* ========================================================= */}
      {activeModalDoc && (
        <div className="modal-overlay" onClick={() => setActiveModalDoc(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{activeModalDoc.title}</h3>
              <button 
                className="modal-close-btn"
                onClick={() => setActiveModalDoc(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <iframe 
                src={activeModalDoc.fileUrl} 
                title={activeModalDoc.title}
                className="modal-iframe"
              >
                <p>
                  Tu navegador no soporta la visualización. Puedes{' '}
                  <a href={activeModalDoc.downloadUrl}>descargar el archivo aquí</a>.
                </p>
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cocreacion;