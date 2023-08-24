import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
  
function App() {
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setConfPassword] = useState('');
  

    const handleChange =(e)=>{
      setName(e.target.value);
    }

    const handleEmailChange =(e)=>{
      setEmail(e.target.value);
    }

    const handleCepChange =(e)=>{
      setCep(e.target.value);
    }
    const handlePasswordChange =(e)=>{
      setPassword(e.target.value);
    }

    const handleConfPasswordChange =(e)=>{
      setConfPassword(e.target.value);
    }

    const handleSubmit=(e)=>{
      if(password.length < 6){
        alert("A senha deve ter no minimo 6 caracteres!")
      }
      else if(password!=confPassword)
      {
        alert("As senhas estão diferentes!");
      }      
      else{
        alert("Usuário cadastrado com sucesso!");
        setName('');
        setEmail('');
        setCep('');
        setPassword('');
        setConfPassword('');
        
      }
      e.preventDefault();
  
    }

    const handleReset=(e)=>{
      setName('');
      setEmail('');
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
          <input type="text" value={name} required placeholder="Digite seu nome" onChange={(e)  => {handleChange(e)}} />
        </div>

        <div className="form-content">               
          <label>Email*: </label>
          <input type="email" value={email} required placeholder="Digite seu email" onChange={(e)   => {handleEmailChange(e)}} />
        </div>

        <div className="form-content">               
          <label>CEP*: </label>
          <input type="text" value={cep} required maxLength={8} placeholder="Digite seu CEP, apenas os números" onChange={(e)   => {handleCepChange(e)}} />
        </div>

        <div className="form-content">
          <label>Senha*: </label>
          <input type="password" value={password} required placeholder="Crie uma senha com pelo menos 6 caracteres" onChange={(e)  => {handlePasswordChange(e)}} />
        </div>

        <div className="form-content">
          <label>Confirmar Senha*: </label>
          <input type="password" value={confPassword} required placeholder="Digite novamente a senha criada" onChange={(e)  => {handleConfPasswordChange(e)}} />
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