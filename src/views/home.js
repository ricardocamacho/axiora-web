/* eslint-disable react/no-array-index-key, react/no-danger */
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { scroller } from 'react-scroll';
import Headroom from 'react-headroom';
import GlideComponent from '../components/carousel/GlideComponent';
import PriceCard from '../components/cards/PriceCard';
import { buyUrl, adminRoot } from '../constants/defaultValues';

const slideSettings = {
  type: 'carousel',
  gap: 30,
  perView: 4,
  hideNav: true,
  peek: { before: 10, after: 10 },
  breakpoints: {
    600: { perView: 1 },
    992: { perView: 2 },
    1200: { perView: 3 }
  }
};

const slideItems = [
  {
    icon: 'iconsminds-shop',
    title: 'Conecta cuentas',
    detail:
      'Conecta y sincroniza varias cuentas de la misma o diferentes plataformas.'
  },
  {
    icon: 'iconsminds-tag-3',
    title: 'Conecta publicaciones / productos',
    detail:
      'Conecta y sincroniza las ventas e inventario de tus publicaciones / productos en una misma cuenta'
  },
  {
    icon: 'iconsminds-box-full',
    title: 'Inventario sincronizado',
    detail:
      'Actualiza tu inventario desde Axiora, y el stock de todas tus publicaciones / productos cambiará automáticamente'
  },
  {
    icon: 'iconsminds-speach-bubble-4',
    title: 'Evita reclamos',
    detail:
      'Mantener tu inventario sincronizado te ayudará a evitar reclamos por productos out-of-stock'
  },
  {
    icon: 'iconsminds-palette',
    title: 'Gestiona preguntas y respuestas (pronto)',
    detail: 'Responde preguntas de todas tus cuentas en un mismo lugar'
  }
];

const features = [
  {
    title: 'Conecta múltiples cuentas',
    img: '/assets/img/landing-page/features/conecta-cuentas.png',
    detail: `Conecta y sincroniza varias cuentas de la misma o diferentes plataformas: puedes conectar las cuentas que desees de los diferentes canales (Mercadolibre y Shopify).<br /><br />
      Ejemplo 1: conecta <strong>1</strong> cuenta de <strong>Mercadolibre</strong> y <strong>1</strong> cuenta de <strong>Shopify</strong>.<br /><br />
      Ejemplo 2: conecta <strong>2</strong> cuentas de <strong>Mercadolibre</strong>.<br /><br />
      Ejemplo 3: conecta <strong>2</strong> cuentas de <strong>Mercadolibre</strong> y <strong>1</strong> de <strong>Shopify</strong>.`
  },
  {
    title: 'Conecta múltiples publicaciones / productos',
    img: '/assets/img/landing-page/features/conecta-publicaciones.png',
    detail: `&iquest;Vendes los mismos productos en diferentes publicaciones?<br /><br />
      Si sabes lo importante que es el SEO y el posicionamiento, sabes lo importante que es tener buenos títulos en tus publicaciones / productos.<br /><br />
      Ejemplo: si vendes autopartes o repuestos de carros, puede que un mismo repuesto le sirva a diferentes carros y modelos, y puede que tengas distintas publicaciones (con diferentes títulos para un mejor SEO) que hacen referencia al mismo producto.<br /><br />
      Si este es tu caso, con Axiora puedes crear varias publicaciones con diferentes títulos, haciendo referencia a un mismo producto, manteniendo el inventario del mismo, sincronizado.`
  },
  {
    title: 'Inventario sincronizado',
    img: '/assets/img/landing-page/features/sincroniza-inventario.png',
    detail: `Con Axiora, actualiza tu inventario en nuestra plataforma (web o mobile).<br /><br />
      Utiliza nuestro módulo de Inventario, ingresa el SKU, la cantidad, y el stock de todas tus publicaciones y productos en todas tus cuentas asociadas cambiará automáticamente.`
  },
  {
    title: 'Gestiona preguntas y respuestas (pronto)',
    img: '/assets/img/landing-page/features/gestiona-preguntas.png',
    detail: `Muy pronto, podrás gestionar preguntas y respuestas de todas tus cuentas asociadas de Mercadolibre`
  }
];

const pricesData = [
  {
    icon: 'iconsminds-male',
    title: 'LITE',
    price: 'GRATIS',
    detail:
      'Hasta 500 USD en facturación por mes (de tus productos sincronizados)',
    link: adminRoot,
    features: [
      'Sincronización de ventas e inventario',
      'Actualizaciones gratuitas'
    ],
    ctaText: 'EMPEZAR'
  },
  {
    icon: 'iconsminds-male-female',
    title: 'BASIC',
    price: '$9',
    detail:
      'Mes / Hasta 1000 USD en facturación por mes (de tus productos sincronizados)',
    link: buyUrl,
    features: [
      'Sincronización de ventas e inventario',
      'Actualizaciones gratuitas',
      'Soporte L-V 9am-5pm Eastern Time'
    ],
    ctaText: 'COMPRAR'
  },
  {
    icon: 'iconsminds-mens',
    title: 'PLUS',
    price: '$19',
    detail: 'Mes / Facturación ilimitada',
    link: buyUrl,
    features: [
      'Sincronización de ventas e inventario',
      'Actualizaciones gratuitas',
      'Soporte 24/7'
    ],
    ctaText: 'COMPRAR'
  }
];

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);
  const year = new Date().getFullYear();

  const onWindowResize = event => {
    const homeRect = refRowHome.current.getBoundingClientRect();

    const homeSection = refSectionHome.current;
    homeSection.style.backgroundPositionX = `${homeRect.x - 580}px`;

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX = `${
      event.target.innerWidth - homeRect.x - 2000
    }px`;

    if (event.target.innerWidth >= 992) {
      setShowMobileMenu(false);
    }
  };

  const onWindowClick = () => {
    setShowMobileMenu(false);
  };

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onWindowClick);

    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onWindowClick);
      document.body.classList.remove('no-footer');
    };
  }, []);

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100
    });
    return false;
  };

  return (
    <div
      className={classnames('landing-page', {
        'show-mobile-menu': showMobileMenu
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="mobile-menu" onClick={event => event.stopPropagation()}>
        <a
          className="logo-mobile c-pointer"
          href="#scroll"
          onClick={event => scrollTo(event, 'home')}
        >
          <span />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={event => scrollTo(event, 'features')}
            >
              CARACTERÍSTICAS
            </a>
          </li>
          <li className="nav-item">
            <a
              className="c-pointer"
              href="#scroll"
              onClick={event => scrollTo(event, 'plans')}
            >
              PLANES
            </a>
          </li>
          <li className="nav-item">
            <div className="separator" />
          </li>
          <li className="nav-item text-center">
            <a
              className="btn btn-outline-primary btn-sm mobile-menu-cta"
              target="_blank"
              rel="noopener noreferrer"
              href={adminRoot}
            >
              INGRESAR
            </a>
          </li>
        </ul>
      </div>

      <div className="main-container">
        <Headroom className="landing-page-nav">
          <nav>
            <div className="container d-flex align-items-center justify-content-between">
              <a
                className="navbar-logo pull-left c-pointer"
                href="#scroll"
                onClick={event => scrollTo(event, 'home')}
              >
                <span className="white" />
                <span className="dark" />
              </a>
              <ul className="navbar-nav d-none d-lg-flex flex-row">
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={event => scrollTo(event, 'features')}
                  >
                    CARACTERÍSTICAS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={event => scrollTo(event, 'plans')}
                  >
                    PLANES
                  </a>
                </li>
                <li className="nav-item pl-4">
                  <a
                    className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={adminRoot}
                  >
                    INGRESAR
                  </a>
                </li>
              </ul>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <span
                className="mobile-menu-button"
                onClick={event => {
                  setShowMobileMenu(!showMobileMenu);
                  event.stopPropagation();
                }}
              >
                <i className="simple-icon-menu" />
              </span>
            </div>
          </nav>
        </Headroom>
        <div className="content-container" id="home">
          <div className="section home" ref={refSectionHome}>
            <div className="container">
              <div className="row home-row" ref={refRowHome}>
                <div className="col-12 d-block d-md-none">
                  <NavLink to="/">
                    <img
                      alt="mobile hero"
                      className="mobile-hero"
                      src="/assets/img/landing-page/home-hero-mobile.png"
                    />
                  </NavLink>
                </div>

                <div className="col-12 col-xl-4 col-lg-5 col-md-6">
                  <div className="home-text">
                    <div className="display-1">
                      CONECTA TUS PLATAFORMAS DE E-COMMERCE
                    </div>
                    <p className="white mb-5">
                      Con Axiora puedes conectar tus plataformas de e-commerce{' '}
                      <strong>Mercadolibre</strong> y <strong>Shopify</strong>{' '}
                      sincronizando tus ventas e inventario en tiempo real
                      <br />
                      <br />
                      Manten tu inventario sincronizado, entre dos o más cuentas
                      de la misma o diferentes plataformas
                      <br />
                      <br />
                    </p>
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a
                      className="btn btn-light btn-xl mr-2 mb-2"
                      href={adminRoot}
                      target="_blank"
                    >
                      EMPIEZA <i className="simple-icon-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="col-12 col-xl-7 offset-xl-1 col-lg-7 col-md-6  d-none d-md-block">
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a href={adminRoot} target="_blank">
                    <img
                      alt="hero"
                      src="/assets/img/landing-page/home-hero.png"
                    />
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-12 p-0">
                  <div className="home-carousel">
                    <GlideComponent settings={slideSettings}>
                      {slideItems.map((f, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={`slide_${index}`} className="card">
                          <div className="card-body text-center">
                            <div>
                              <i className={`${f.icon} large-icon`} />
                              <h5 className="mb-3 font-weight-semibold">
                                {f.title}
                              </h5>
                            </div>
                            <div>
                              <p className="detail-text">{f.detail}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </GlideComponent>
                  </div>
                </div>
              </div>

              <div className="row">
                <a
                  className="btn btn-circle btn-outline-semi-light hero-circle-button"
                  href="#scroll"
                  onClick={event => scrollTo(event, 'features')}
                >
                  <i className="simple-icon-arrow-down" />
                </a>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container" id="features">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Características</h1>
                  <p>Explora todas las características que Axiora te ofrece</p>
                </div>
              </div>
              {features.map((feature, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={`feature_${i}`}>
                  {i % 2 === 0 && (
                    <div className="row feature-row">
                      <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                        <div className="feature-text-container">
                          <h2>{feature.title}</h2>
                          <div
                            dangerouslySetInnerHTML={{ __html: feature.detail }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative">
                        <img
                          alt={feature.title}
                          src={feature.img}
                          className="feature-image-right feature-image-charts position-relative"
                        />
                      </div>
                    </div>
                  )}
                  {i % 2 === 1 && (
                    <div className="row feature-row">
                      <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1">
                        <img
                          alt={feature.title}
                          src={feature.img}
                          className="feature-image-left feature-image-charts"
                        />
                      </div>
                      <div className="col-12 col-md-6 offset-md-0 col-lg-5 offset-lg-1 d-flex align-items-center order-1 order-md-2">
                        <div className="feature-text-container">
                          <h2>{feature.title}</h2>
                          <div
                            dangerouslySetInnerHTML={{ __html: feature.detail }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="section background">
            <div className="container" id="plans">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Planes</h1>
                  <p>Escoge el plan que más se adapte a ti y a tu negocio</p>
                </div>
              </div>

              <div className="row pt-5 equal-height-container">
                {pricesData.map((item, index) => {
                  return (
                    <div
                      className="col-item mb-4 col-md-12 col-lg-4"
                      key={`priceCard_${index}`}
                    >
                      <PriceCard data={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="section background background-no-bottom mb-0 pb-0">
            <div className="container">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>&iquest;Estás list@?</h1>
                  <p>
                    Axiora es la plataforma de sincronización de canales de
                    venta que se destaca por su sencillez pero al mismo tiempo
                    por su robustez y eficiencia
                  </p>
                  <p>&iquest;Tienes más dudas?</p>
                </div>
                <div className="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                  <div className="text-center mb-3">
                    <a
                      className="btn btn-secondary btn-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={buyUrl}
                    >
                      CONTÁCTANOS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
                <div className="col-12 text-right">
                  <a
                    className="btn btn-circle btn-outline-semi-light footer-circle-button c-pointer"
                    href="#scroll"
                    onClick={event => scrollTo(event, 'home')}
                  >
                    <i className="simple-icon-arrow-up" />
                  </a>
                </div>
                <div className="col-12 text-center footer-content">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={event => scrollTo(event, 'home')}
                  >
                    <img
                      className="footer-logo"
                      alt="footer logo"
                      src="/assets/logos/white-full-axiora.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright pt-5 pb-5">
              <div className="row">
                <div className="col-12" />
                <div className="col-12 text-center">
                  <p className="mb-0">
                    &copy; Axiora {year}. Todos los derechos reservados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
