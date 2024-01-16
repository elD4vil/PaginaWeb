import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("tu_url_de_conexion_a_la_base_de_datos", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error de conexión a la base de datos:", error);
  }
};

export default connectDB;
