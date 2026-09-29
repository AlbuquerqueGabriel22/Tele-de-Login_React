// src/fomrulario/Formulario.jsx
import { useState } from 'react';
import Logo from "./logo/Logo";
import Botoes from "./botoes/Botoes";
import Campos from "./campos/Campos";

export default function Formulario({ onCadastrar }) {
  // Estado para a matriz da cor (0 a 360 no espectro HSL)
  const [hue, setHue] = useState(20); // 250 é um tom roxo/azul inicial

  function handleSubmit(event) {
    event.preventDefault();
    if (onCadastrar) onCadastrar();
  }

  return (
    <form 
      className="Formulario" 
      onSubmit={handleSubmit}>w
      <Logo />
      <Campos />
      <Botoes />
    </form>
  );
}