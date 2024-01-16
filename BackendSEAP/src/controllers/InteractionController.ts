import { Visita } from "../models/Visitas";
import { Request, Response } from "express";
import {db} from '../db'

let listVisitas: Visita[] = [];
let version = 1;

export const login = async (req: Request, res: Response) => {
  const users = await db.query('SELECT * FROM logear');
  let encontrado = false;
  let name;
  console.log(req.body);
  users.forEach((usuario:any) => {
    if(usuario.rut == req.body.u && usuario.password == req.body.p){
      encontrado = true;
      name=usuario.name;
    };
  });
  if (encontrado){
    res.json({"success": true,"name":name});
  }else{
    res.json({"success":false})
  }
};
// export const insertVisita = async (req: Request, res: Response) => {
//   listVisitas = req.body;
//   console.log(req.body);
//   try {
//   listVisitas.forEach(async(visita:Visita) =>{
//   await db.query(
//     'INSERT INTO Visitas (RutResponsable, RutVecino, litros, comentario, folio, fecha, estado, clorado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
//     [
//       visita.RutResponsable,
//       visita.RutVecino,
//       visita.litros,
//       visita.comentario,
//       visita.folio,
//       visita.fecha,
//       visita.estado,
//       visita.clorado
//     ]
//   );
//   await db.query('UPDATE Vecinos SET ultimaFecha = (?) WHERE Rut LIKE (?)',[visita.fecha, visita.RutVecino]);
//   });
//   version = version + 1;
//   return res.json({ insert: "success"});
//   }
//   catch{return res.json ({insert:"failure"})};
// };
