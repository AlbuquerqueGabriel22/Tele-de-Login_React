// 1. Importamos a foto e damos um nome para a variável (ex: logoImg)
import logoImg from '../../static/Captura de tela 2026-01-06 183844.png';

export default function Logo() {
  return (
    <div className="Logo-Formulario">
      {/* 2. Usamos a variável entre chaves {} */}
      <img src={logoImg} alt="Logo do Formulário" className="imagem-logo" />
    </div>
  );
}