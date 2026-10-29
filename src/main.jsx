import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowUpRight, Mail, Menu, X, Image as ImageIcon } from 'lucide-react';
import './style.css';

const works = [
  { category: 'CONEXÃO ESPORTE', title: 'UJR: quase cinco décadas transformando vidas pelo futsal', description: 'Reportagem audiovisual sobre o esporte e seu papel social em Novo Hamburgo.', href: '', image: '' },
  { category: 'CONEXÃO CULTURAL', title: 'Mundo Feevale', description: 'Uma experiência de descoberta de profissões e possibilidades para o futuro.', href: '', image: '' },
  { category: 'CONEXÃO GASTRONOMIA', title: 'Nova unidade da Burguer 32 em Novo Hamburgo', description: 'Uma produção audiovisual sobre gastronomia e empreendedorismo local.', href: '', image: '' }
];

function WorkCard({ work, index }) {
  return <article className="work-card">
    <div className="work-photo" aria-label="Espaço reservado para imagem da reportagem">{work.image ? <img src={work.image} alt={work.title}/> : <span>IMAGEM DA REPORTAGEM <small>0{index + 1}</small></span>}</div>
    <div className="work-info"><p className="eyebrow">{work.category}</p><h3>{work.title}</h3><p>{work.description}</p>{work.href ? <a className="text-link" href={work.href} target="_blank" rel="noopener noreferrer">Ver reportagem <ArrowUpRight size={17}/></a> : <span className="soon">LINK EM BREVE</span>}</div>
  </article>;
}

function App() {
  const [open, setOpen] = React.useState(false);
  const nav = [['Início','#inicio'],['Reportagens','#reportagens'],['Audiovisual','#audiovisual'],['Sobre','#sobre'],['Contato','#contato']];
  return <>
    <header id="inicio" className="site-header">
      <div className="brand"><p>PORTFÓLIO JORNALÍSTICO</p><h1>Camilla Motta</h1><div className="brand-rule"/></div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    </header>
    <main>
      <section className="intro wrap" aria-labelledby="intro-title">
        <div className="portrait"><div className="photo-placeholder"><ImageIcon size={34} strokeWidth={1}/><span>ESPAÇO PARA SUA FOTO</span></div></div>
        <div className="intro-copy"><p className="eyebrow">PRAZER, SOU A CAMILLA</p><h2 id="intro-title">O jornalismo como forma de contar histórias.</h2><p>Sou estudante de Jornalismo na Universidade Feevale e acredito no poder da comunicação para informar, conectar pessoas e ampliar perspectivas.</p><p>Neste portfólio, reúno reportagens, produções audiovisuais e projetos desenvolvidos ao longo da minha trajetória acadêmica e profissional.</p></div>
      </section>
      <a className="discover" href="#reportagens"><span>CONHEÇA MEUS TRABALHOS</span><ArrowDown size={25} strokeWidth={1.3}/></a>
      <section className="works-section" id="reportagens"><div className="wrap"><div className="section-heading"><p className="eyebrow">PRODUÇÕES SELECIONADAS</p><h2>Reportagens</h2><p>Histórias, pessoas e lugares que merecem ser conhecidos.</p></div><div className="works-grid">{works.map((work, i) => <WorkCard work={work} index={i} key={work.title}/>)}</div></div></section>
      <section id="audiovisual" className="simple-section wrap"><p className="eyebrow">VÍDEO E NARRATIVA</p><h2>Audiovisual</h2><p>Reportagens em vídeo e produções desenvolvidas durante minha formação. Em breve, esta seção reunirá os episódios completos e seus bastidores.</p></section>
      <section id="sobre" className="simple-section wrap"><p className="eyebrow">MINHA TRAJETÓRIA</p><h2>Sobre mim</h2><p>Sou estudante de Jornalismo na Universidade Feevale. Minha trajetória reúne experiências em comunicação, produção de conteúdo e projetos audiovisuais, sempre com interesse em contar histórias com responsabilidade e sensibilidade.</p></section>
      <section id="contato" className="contact"><div className="wrap"><p className="eyebrow">VAMOS CONVERSAR?</p><h2>Contato</h2><p>Para propostas, colaborações ou para conhecer mais sobre meu trabalho, entre em contato.</p><div className="contact-links"><span><Mail size={18}/> E-mail e redes sociais em breve</span></div></div></section>
    </main><footer>© {new Date().getFullYear()} Camilla Motta · Portfólio Jornalístico</footer>
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
