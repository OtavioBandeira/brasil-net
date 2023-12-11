import '../css/style.css'
import logo from '../assets/logo.png'
import wifi from '../assets/icons/wi-fi.png'
import rocket from '../assets/icons/rocket.png'
import insurance from '../assets/icons/shield.png'
import assistant from '../assets/icons/assistant.png'

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
  </main>
`

