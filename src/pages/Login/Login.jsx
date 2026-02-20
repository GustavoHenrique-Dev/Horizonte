import { useEffect, useState } from "react"
import Style from "./Login.module.css"
import { useAuth } from "../../hooks/useAuth"
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {logIn, error: authError, loading} = useAuth()

  const verify = () => {
    if (email === "" || password === "") {
      setError("Preencha todos os campos.");
      return false;
    } else {
      return true
    }
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    if (!verify()) return;

    const user = {
      email,
      password
    }

    const res = await logIn(user)
  }

  useEffect(() => {
    if(authError){
      setError(authError)
    }
  }, [authError])

  return (
    <div className={Style.container}>
      <div className={Style.loginInfo}>
        <h1>Login</h1>
        <p>Entre com suas credenciais para acessar sua conta.</p>
      </div>
      <div className={Style.loginFormContainer}>
        <form className={Style.loginForm} onSubmit={onHandleSubmit}>
          <div className={Style.loginFormInputs}>
            <label className={!email && error ? Style.labelError : ""}>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={!email && error ? Style.inputError : ""}/>
            </label>
            <label className={!password && error ? Style.labelError : ""}>
              Senha:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={!password && error ? Style.inputError : ""}/>
            </label>
          </div>
          <button type="submit" className={Style.submitButton}>Entrar</button>
          {error && <p className={Style.error}>{error}</p>}
        </form>

        <p>
          Ainda não tem uma conta?{" "}
          <Link className={Style.linkToRegister} to="/register">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login