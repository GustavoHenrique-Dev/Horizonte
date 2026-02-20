import { useEffect, useState } from "react";
import Style from "./Register.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{6,}$/

  const [error, setError] = useState("");
  const { createUser, error: authError, loading } = useAuth();

  const verify = () => {
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
      setError("Preencha todos os campos.");
      return false;
    }

     if (!emailRegex.test(email)) {
      setError("Digite um email válido.");
      return false;
    }

    if (!passwordRegex.test(password)) {
      setError("A senha deve conter no mínimo 6 caracteres.")
      return false;
    }

     if (password !== confirmPassword) {
      setError("As senhas devem ser iguais.");
      return false;
    }

    return true
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setError("")

    if (!verify()) return;

    const user = {
      name,
      email,
      password,
    };

    const res = await createUser(user);

    if (res) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");
    }
  };

  useEffect(() => {
    if(authError){
      setError(authError)
    }
  }, [authError])

  return (
    <main className={Style.container}>
      <div className={Style.registerInfo}>
        <h1>Crie sua conta!</h1>
        <p>
          Cadastre-se para anunciar imóveis, salvar favoritos e acompanhar
          oportunidades de forma simples e segura.
        </p>
      </div>
      <div className={Style.registerFormContainer}>
        <form className={Style.registerForm} onSubmit={onHandleSubmit} noValidate>
          <div className={Style.registerFormInputs}>
            <label className={!name && error ? Style.labelError : ""}>
              Nome Completo:
              <input
                className={!name && error ? Style.inputError : ""}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className={!email && error ? Style.labelError : ""}>
              Email:
              <input
                className={!email && error ? Style.inputError : ""}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className={!password && error ? Style.labelError : ""}>
              Crie sua Senha:
              <input
                className={!password && error ? Style.inputError : ""}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className={!confirmPassword && error ? Style.labelError : ""}>
              Confirme sua Senha:
              <input
                className={!confirmPassword && error ? Style.inputError : ""}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>

          <button
            type="submit"
            className={`${Style.submitButton} ${loading ? Style.submitButtonLoading : ""}`}
          >
            {loading ? "Carregando..." : "Cadastrar"}
          </button>
          {error && <p className={Style.error}>{error}</p>}
        </form>

        <p>
          Já tem uma conta?{" "}
          <Link className={Style.linkToLogin} to="/login">
            Entrar
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
