// src/fomrulario/Formulario.jsx
import { useState } from 'react';
import Logo from "./logo/Logo";
import Botoes from "./botoes/Botoes";
import Campos from "./campos/Campos";

export default function Formulario({ onCadastrar }) {
  // Estado para a matriz da cor (0 a 360 no espectro HSL)
  const [hue, setHue] = useState(250); // 250 é um tom roxo/azul inicial

  function handleSubmit(event) {
    event.preventDefault();
    if (onCadastrar) onCadastrar();
  }

  return (
    <form 
      className="Formulario" 
      onSubmit={handleSubmit}
      style={{ '--hue': hue }} // Injeta a cor dinamica nas variaveis CSS
    >
      {/* Slider Interativo de Cores no topo */}
      <div className="controle-tema">
        <span className="texto-tema">Personalizar Cor</span>
        <input 
          type="range" 
          min="0" 
          max="360" 
          value={hue} 
          onChange={(e) => setHue(e.target.value)}
          className="slider-cor"
        />
      </div>

      <Logo />
      <Campos />
      <Botoes />
    </form>
  );
}