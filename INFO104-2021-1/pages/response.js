import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import connectDB from "/Basededatos/db";
import UserModel from "/Basededatos/userModel";

const Respuesta = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    // Verificar la contraseña en la base de datos
    try {
      await connectDB();
      const user = await UserModel.findOne({ username: "nombre_de_usuario" });

      if (user && user.password === password) {
        // Contraseña correcta, redirigir a la siguiente página
        router.push("/pagina_siguiente");
      } else {
        // Contraseña incorrecta, mostrar mensaje de error
        setErrorMessage("Contraseña incorrecta. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al verificar la contraseña:", error);
    }
  };

  let texts = [
    "Que bien! me alegro!",
    "Qué pasó? bueno no debe ser para tanto...",
    "Pucha, la próximo semana mejor!"
  ];

  return (
    <div className="container">
      <Head>
        <title>Respuesta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{texts[router.query.opt]}</h1>

        {/* Agregar formulario de contraseña */}
        <form onSubmit={handlePasswordSubmit}>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Ingresar</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>

        <div className="grid">
          <Link href={"/"}>
            <a className="card">Volver</a>
          </Link>
        </div>
      </main>

      <footer>
        <a href="https://github.com/PabloSzx/INFO104-2021-1" target="_blank">
          Repositorio y tutorial
        </a>
      </footer>
    </div>
  );
};

export default Respuesta;
