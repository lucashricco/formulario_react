import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import api from './services/api'
  
function App() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [dadosCep, setDadosCep] = useState('');
    const [cep, setCep] = useState({});
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
    
    async function buscarCep(){ 
          try{
            const response = await api.get(`${dadosCep}/json`);
            setCep(response.data)
          }catch{
            alert("Erro ao buscar CEP");
            setDadosCep('');
            
            
          }
 

  
    }

    const handleSubmit=(e)=>{

      e.preventDefault();
      if(password.length < 6){
        alert("A senha deve ter no minimo 6 caracteres!")
      }
      else if(password!=confPassword)
      {
        alert("As senhas estão diferentes!");

      }else{
        alert("Usuário cadastrado com sucesso!");
        setName('');
        setEmail('');
        setDadosCep('');
        setCep('');
        setPassword('');
        setConfPassword('');
        
      }

  
    }

    const handleReset=(e)=>{
      setName('');
      setEmail('');
      setDadosCep('');
      setCep('');
      setPassword('');
      setConfPassword('');
    }

    const handleCancel=(e)=>{
      window.location.replace('https://google.com');
    }

  return (
    <div className="App">
      <header className="App-header">

      <div className="container">

        <section className="header">
              <h2>Cadastrar usuário</h2>
        </section>

      <form className="form" onSubmit={(e) => {handleSubmit(e)}} onReset={(e) => {handleReset(e)}}>

        <div className="form-content">
          <label>Nome*: </label>
          <input type="text" value={name} required placeholder="Digite seu nome" onChange={(e)  => setName(e.target.value)} />
        </div>

        <div className="form-content">               
          <label>Email*: </label>
          <input type="email" value={email} required placeholder="Digite seu email" onChange={(e)   => setEmail(e.target.value)} />
        </div>

        <div className="form-content">               
          <label>CEP*: </label>
          <input type="text" value={dadosCep} required maxLength={9} placeholder="Digite seu CEP" 
          onChange={(e) => setDadosCep(e.target.value)} 
          onBlur={buscarCep}
          />
        </div>
        <div className="form-cidade">               
          <label>Cidade: </label>
          <input type="text" value={cep.localidade} required disabled />
        
          <label >UF: </label>
          <input className="input-uf" value={cep.uf} type="text" required  disabled />
        </div>


        <div className="form-content">
          <label>Senha*: </label>
          <input type="password" value={password} required placeholder="Crie uma senha com pelo menos 6 caracteres" 
          onChange={(e)  => setPassword(e.target.value)} />
        </div>

        <div className="form-content">
          <label>Confirmar Senha*: </label>
          <input type="password" value={confPassword} required placeholder="Digite novamente a senha criada" 
          onChange={(e)  => setConfPassword(e.target.value)} />
        </div>

       <button type="submit">Cadastrar <i class="bi bi-check-square-fill"></i></button>
       <button type="reset">Limpar Dados <i class="bi bi-x-square-fill"></i></button>
       <button type="button" onClick={(e) => {handleCancel(e)}}>Sair <i class="bi bi-box-arrow-left"></i></button>
       
     </form>
    </div>

      </header>


    </div>
  );
}
  
export default App;

