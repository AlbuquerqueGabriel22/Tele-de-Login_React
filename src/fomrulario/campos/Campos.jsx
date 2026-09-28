// src/fomrulario/campos/Campos.jsx
export default function Campos() {
  return (
    <div className="labels-formulario">
      <div className="campo-item">
        <label className="label-formulario">Nome Completo</label>
        <input type="text" placeholder="Digite seu nome" className="input-formulario" />
      </div>

      <div className="campo-item">
        <label className="label-formulario">E-mail</label>
        <input type="email" placeholder="seuemail@exemplo.com" className="input-formulario" />
      </div>

      <div className="campo-item">
        <label className="label-formulario">Senha</label>
        <input type="password" placeholder="••••••••" className="input-formulario" />
      </div>
    </div>
  );
}