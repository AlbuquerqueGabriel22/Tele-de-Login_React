import './App.css'
import { useState } from 'react';
import Formulario from './fomrulario/Formulario';
import Telaprincipal from './paginaPrincial/Principal';

export default function App() {
  // 1. Criamos o estado da tela no App (o Gerente)
  const [telaAtual, setTelaAtual] = useState('cadastro');

  return (
    <main>
      {/* 2. Se telaAtual for igual a 'cadastro', mostra o Formulário.
             Caso contrário, mostra a PaginaPrincipal. */}
             
      {telaAtual === 'cadastro' ? (
        <div className="pagina-cadastro">
          {/* Passamos a função setTelaAtual para o formulário conseguir trocar a tela */}
          <Formulario onCadastrar={() => setTelaAtual('principal')} />
        </div>
      ) : (
        <Telaprincipal/>
      )}
    </main>
  );
}