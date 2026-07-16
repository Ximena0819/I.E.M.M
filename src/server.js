import app from "./app.js";
const startServer=async()=>{
  try{
    app.listen(3000, () =>{
      console.log("server listo https://localhost:3000")
    });
  }catch(error){
    consoler.log("error en el server", error);
  }
};

startServer();
