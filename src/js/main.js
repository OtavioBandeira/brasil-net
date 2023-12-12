import '../css/style.css'
import logo from '../assets/logo.png'
import wifi from '../assets/icons/wi-fi.png'
import rocket from '../assets/icons/rocket.png'
import insurance from '../assets/icons/shield.png'
import assistant from '../assets/icons/assistant.png'
import splashArt from '../assets/splashArt.jpg'
import rocketIcon from '../assets/icons/rocket-icon.png'
import joystick from '../assets/icons/joystick.png'
import support from '../assets/icons/customer-support.png'
import download from '../assets/icons/download.png'
import upload from '../assets/icons/upload.png'
import linkDedicado from '../assets/icons/server.png'

document.querySelector('#app').innerHTML = `
  <header>
    <section class="section_hero">
      <img class="logo" src=${logo} alt="logo">
      
      <div class="nav_hero">
        <a class="nav_btn" href="#inicio">Inicio</a>
        <a class="nav_btn" href="#internet">Internet</a>
        <a class="nav_btn" href="#">Planos</a>
        <a class="nav_btn" href="#">Contato</a>
        <a class="nav_btn" href="#">Sobre</a>
      </div>

      <button class="btn_call">Central de atendimento</button>
    </section>

    <section class="main_section" id="inicio">
      <div class="background_main">
        <p class="title_description">Brasil Net: Conectando Pessoas, Transformando Vidas Online</p>    
      </div>
    </section>
  </header>

  <main class="section_content">

    <section>
      <h1 id="internet" class="main_title">Conectividade sem Limites, Desfrute da Internet mais rápida do brasil com Nossos Serviços de Internet de Alta Velocidade.</h1>

      <p class="main_paragraph">Agora, você tem à sua disposição um provedor de internet ultra-rápido e incrivelmente confiável, projetado para atender às demandas da sua família. Desfrute de uma navegação sem interrupções e streaming suave.</p>
    </section>

    <section class="section_icone">
      <div class="section_icon">
        <img class="icon_section" src=${wifi} alt="icon wifi">
        <span class="span_description">Sem quedas, sem interrupções, sem dores de cabeça.</span>
      </div>

      <div class="section_icon">
        <img class="icon_section" src=${assistant} alt="icon rocket">
        <span class="span_description">Atendimento de alta qualidade 24 horas de segunda a sexta.</span>
      </div>

      <div class="section_icon">
        <img class="icon_section" src=${insurance} alt="icon insurance">
        <span class="span_description">Navegue com total segurança que você merece!</span>
      </div>

      <div class="section_icon">
        <img class="icon_section" src=${rocket} alt="icon assistant">
        <span class="span_description">100% da banda contratada, sem limitações.</span>
      </div>
    </section>

    <section>
      <img class="splashArt" src=${splashArt} alt="splash art">
      <div>
        <h2>Chegou a hora de descobrir um novo mundo!</h2>

        <p>Acabou o tempo ruim. Agora você poderá ter acesso a uma internet de alta qualidade, perfeita para cessar seus melhores filmes, fazer downloads, jogar, ouvir músicas e tudo que você precisar!</p>

        <div>
          <div>
            <img src=${rocketIcon} alt="rocket icon">
            <span>Banda Larga Veloz</span>
            <img src=${joystick} alt="joystick icon">
            <span>Ping Para Gamers</span>
            <img src=${support} alt="support icon">
            <span>Atendimento Qualificado</span>
          </div>
          
          <div>
            <img src=${download} alt="download icon">
            <span>100% de Download</span>
            <img src=${upload} alt="upload icon">
            <span>100% de Upload</span>
            <img src=${linkDedicado} alt="link dedicado icon">
            <span>Link Dedicado</span>
          </div>                    
        </div>
      </div>
    </section>
  </main>
`

