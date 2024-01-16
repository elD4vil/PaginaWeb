import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Index = () => {
  // Estado para el fondo
  const [background, setBackground] = useState("#e6e6e6"); // Color de fondo inicial

  // Función para cambiar el fondo
  const changeBackground = (color) => {
    setBackground(color);
  };

  return (
    <div className="container" style={{ backgroundColor: background }}>
      <Head>
        <title>Pagina Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src="/images/Colun_2016.png"
          height={138} // Tamaño deseado con la proporción correcta
          width={300} // Tamaño deseado con la proporción correcta
          alt="ojo"
        />

        <h1 className="title">¿Qué va a subir?</h1>

        {/* Botones para descargar archivos */}
        <div className="download-buttons">
          <button className="button" onClick={() => console.log("Descargar")}>
            Manual
          </button>
          <button className="button" onClick={() => console.log("Archivo")}>
            Aplicaciones
          </button>
        </div>

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
        &nbsp;-&nbsp;
        <Link href="/about">
          <a>Sobre esta página</a>
        </Link>

        {/* Agregar opciones para cambiar el fondo */}
        <div className="button-container">
          <button onClick={() => changeBackground("#ffffff")} className="button">
            Blanco
          </button>
          <button onClick={() => changeBackground("#e6e6e6")} className="button">
            Gris claro
          </button>
          <button onClick={() => changeBackground("#f0f0f0")} className="button">
            Gris más oscuro
          </button>
        </div>

        
      </footer>

      <style jsx>{`

        .card {
            background-color: #ffffff; /* Green background color */
            border: none; /* Remove borders */
            color: black; /* White text color */
            padding: 30px 20px; /* Ajustar el padding para hacer el card más ancho */
            text-align: center; /* Center text */
            text-decoration: none; /* Remove underline */
            display: inline-block; /* Make it an inline block */
            font-size: 16px; /* Set font size */
            cursor: pointer; /* Add cursor pointer */
            border-radius: 10px; /* Add border radius */
            margin-right: 30px; /* Ajustar el margin-right para más espacio entre botones */
        }

        .button-container {
          margin-top: 10px;
        }

        .button {
          background-color: #2196f3; /* Green background color */
          border: none; /* Remove borders */
          color: white; /* White text color */
          padding: 10px 20px; /* Padding */
          text-align: center; /* Center text */
          text-decoration: none; /* Remove underline */
          display: inline-block; /* Make it an inline block */
          font-size: 16px; /* Set font size */
          cursor: pointer; /* Add cursor pointer */
          border-radius: 10px; /* Add border radius */
          margin-right: 10px; /* Add margin between buttons */
        }

        .button:hover {
          background-color: #45a049; /* Change background color on hover */
        }

        .download-buttons {
          margin-top: 10px;
        }
        
        .download-buttons button {
          margin-right: 10px; /* Add margin between buttons */
        }
      `}</style>
    </div>
  );
};

export default Index;
