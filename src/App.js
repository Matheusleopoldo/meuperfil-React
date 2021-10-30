import React, { Component } from 'react';
import './App.css';


 
class App extends Component {
 
  render(){
    return(
      <div>
        <MeuPerfil />
   
      </div>
    );
  }
}
 
export default App;
 
 
class MeuPerfil extends Component {
  render(){
    
    return(
      <div>

          <div><img src="/imagens/eu2.jpg" alt="matheus foto"></img>  </div>


          <div>
                 <h2>Dados Pessoais:</h2>
                 <h4>Nome: Matheus de Lima Leopoldo</h4>
                 <h4>Email: Matheus.limaex@gmail.com</h4>
                 <h4>Celular: (13) 97418-6699</h4>
          </div>

          <div>
                 <h2>Formação:</h2>
                 <h4>Ensino Médio: Escola Domingos de Souza</h4>
                 <h4>Ensino Técnico: Desenvolvimento de Sistemas - ETEC Aristóteles Ferreira</h4>
                 <h4>Ensino Superior: Sistemas de Informação - Unip Rangel </h4>
          </div>

          <div>
                 <h2>Experiência:</h2>
                 <h4>Trabalhei como Atendente, caixa, vendedor, estoquista e segurança</h4>
                 <h4>Na Área de Tecnologia estou em busca do meu primeiro emprego</h4>     
          </div>

          <div>
                 <h2>Projetos:</h2>
                 <h4>Projetos de Calculadoras em C#, sites em HTML e CSS, TCC do curso Técnico: Sistema de gerencimento de estoque de materiais reciclaveis para empresas de reciclagem feito em PHP,JS e MySQL</h4>
                   
          </div>



        
        </div>
    );
  }
}
