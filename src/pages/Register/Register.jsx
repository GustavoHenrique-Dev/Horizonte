import { useState } from "react";
import Style from "./Register.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [error, setError] = useState("")
  const {createUser, error: authError, loading} = useAuth()

  const onHandleSubmit = async (e) => {
    e.preventDefault()

    if(password !== confirmPassword){
      setError("As senhas devem ser iguais.")
      return
    }
      const user = {
      name,
      email,
      password
    }

    const res = await createUser(user) 
    

    if(res){
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setError("")
    }

    
  }



  return (
    <main className={Style.container}>
      <div className={Style.registerInfo}>
        <h1>Crie sua conta!</h1>
        <p>Cadastre-se para anunciar imóveis, salvar favoritos e acompanhar oportunidades de forma simples e segura.</p>
      </div>
      <div className={Style.registerFormContainer}>
        <form className={Style.registerForm} onSubmit={onHandleSubmit}>
          <div className={Style.registerFormInputs}>
            <label>
              Nome Completo:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
              Crie sua Senha:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
              Confirme sua Senha:
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
          </div>

          <button type="submit" className={`${Style.submitButton} ${loading ? Style.submitButtonLoading : ""}`}>{loading ? "Carregando..." : "Cadastrar"}</button>
          {error && <p className={Style.error}>{error}</p>}
        </form>

        <p>Já tem uma conta? <Link className={Style.linkToLogin} to="/login">Entrar</Link></p>
      </div>
    </main>
  );
};

export default Register;
