import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const location = useLocation();

  // Cerrar el menú en móvil y limpiar submenús al cambiar de ruta o de hash (#)
  useEffect(() => {
    setMobileOpen(false);
    setActiveSubmenu(null);
  }, [location.pathname, location.hash]);

  const handleMouseEnter = (index) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveSubmenu(index);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
    setCloseTimeout(timeout);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const menuItems = [
    {
      id: 'curaduria',
      title: 'Curaduría de Contenidos en educación',
      path: '/',
    },
    {
      id: 'cocreacion',
      title: 'Cocreación: Ajedrez Estratégico y movimiento',
      path: '/cocreacion',
      submenu: [
        {
          title: 'Documento de Partida (Curso TIC)',
          desc: 'Construido en el curso de enseñanza mediada por las TIC',
          path: '/cocreacion',
        },
        {
          title: 'Planeación y Storyboard',
          desc: 'Diseño pedagógico del contenido educativo digital',
          path: '/cocreacion#planeacion-storyboard',
        },
        {
          title: 'Storyboard mejorado',
          desc: 'Versión optimizada y estructurada',
          path: '/cocreacion#storyboard-mejorado',
        },
        {
          title: 'Sitio Web Interactivo',
          desc: 'Diseño web moderno (Dina Soledad Velásquez)',
          path: '/cocreacion#sitio-web-interactivo',
        },
      ],
    },
    {
      id: 'podcast',
      title: 'Podcast Reflexión metacognitiva final',
      path: '/podcast-reflexion',
    },
  ];

  return (
    <header className="custom-navbar-container">
      <nav className="custom-navbar">
        {/* Logo / Título de la Plataforma */}
        <Link to="/" className="navbar-brand">
          <span className="brand-dot"></span>
          <div className="brand-text-group">
            <span className="brand-title">Cultura del Filtro: </span>
            <span className="brand-subtitle">Aprendizaje Crítico en la Era de la Información.</span>
          </div>
        </Link>

        {/* Botón menú móvil */}
        <button 
          className={`mobile-toggle ${mobileOpen ? 'is-active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú de navegación"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú Principal */}
        <ul className={`navbar-menu ${mobileOpen ? 'mobile-show' : ''}`}>
          {menuItems.map((item, idx) => {
            const currentFullUrl = `${location.pathname}${location.hash}`;
            
            // Verificar si el enlace principal o alguno de sus submenús coincide con la URL completa o base
            const isMainActive = item.submenu 
              ? item.submenu.some(sub => currentFullUrl === sub.path) || (location.pathname === item.path && !location.hash)
              : location.pathname === item.path;

            return (
              <li 
                key={item.id} 
                className={`menu-item ${item.submenu ? 'has-submenu' : ''}`}
                onMouseEnter={() => item.submenu && handleMouseEnter(idx)}
                onMouseLeave={() => item.submenu && handleMouseLeave()}
              >
                {item.submenu ? (
                  <button
                    className={`menu-link ${isMainActive ? 'active' : ''}`}
                    onClick={() => toggleSubmenu(idx)}
                    type="button"
                  >
                    <span className="link-text">{item.title}</span>
                    <span className="arrow-icon">▾</span>
                  </button>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`menu-link ${isMainActive ? 'active' : ''}`}
                  >
                    <span className="link-text">{item.title}</span>
                  </Link>
                )}

                {/* Submenú desplegable */}
                {item.submenu && (
                  <div className={`submenu-dropdown ${activeSubmenu === idx ? 'open' : ''}`}>
                    <div className="submenu-header">
                      <span>Estructura de la Sección</span>
                    </div>
                    <div className="submenu-grid">
                      {item.submenu.map((sub, sIdx) => {
                        // Comparación exacta incluyendo la ID (#)
                        const isSubActive = currentFullUrl === sub.path;

                        return (
                          <Link 
                            key={sIdx} 
                            to={sub.path} 
                            className={`submenu-card ${isSubActive ? 'active-sub' : ''}`}
                          >
                            <span className="submenu-card-number">0{sIdx + 1}</span>
                            <div className="submenu-card-content">
                              <strong className="submenu-card-title">{sub.title}</strong>
                              {sub.desc && <p className="submenu-card-desc">{sub.desc}</p>}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;