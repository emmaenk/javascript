const express = require("express");
const Service = require("./src/service");
const app = express();
const PORT = 3000;

app.use(express.json());


// GET genetal
app.get("/", (req,res) => {
  
    let user = Service.getUsers();
    
    if (user) {
      res.status(201).json({
        message: `Usuarios`,
        body: user,
      });
    } else {
      res.status(404).json({
        message: `sin usuarios para mostrar`,
      });
    }
  });

// GET user by id
app.get("/:id", (req, res) => {
  let { params: { id } } = req;
  let user = Service.getUser(id);
  
  if (user) {
    res.json({
      message: `Usuario ${id}`,
      body: user,
    });
  } else {
    res.status(404).json({
      message: `Usuario ${id} no encontrado`,
    });
  }
});

// POST create new user
app.post("/", (req, res) => {
  let { body: newUser } = req;
  let user = Service.createUser(newUser);

  res.status(201).json({
    message: "Usuario creado",
    body: user,
  });
});


 // PUT update user by id
app.put("/:id", (req, res) => {
  let { params: { id }, body: updateUSer } = req;
  let user = Service.ActualizaUser(id, updateUSer);

  if (user) {
    res.status(201).json({
      message: `Usuario ${id} actualizado`,
      body: user,
    });
  } else {
    res.status(404).json({
      message: `Usuario ${id} no encontrado`,
    });
  }
});

// DELETE user by id
app.delete("/:id", (req, res) => {
  let { params: { id } } = req;
  let user = Service.deleteUser(id);

  if (user) {
    res.status(200).json({
      message: `Usuario ${id} eliminado`,
      body: user,
    });
  } else {
    res.status(404).json({
      message: `Usuario ${id} no encontrado`,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
