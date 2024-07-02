const data = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => data,

  getUser: (id) => {
    let identificador = Number(id);
    let user = data.filter((person) => person.id === identificador)[0];
    return user;
  }, 

  createUser: function (dataUser) {
    let newUser = {
      id: data.length + 1, // Corregir 'lenght' a 'length'
      ...dataUser,
    };
    data.push(newUser);
    return newUser;
  },


  ActualizaUser: (id, actualizaUser) => {
    let actualiza = Number(id);
    let index = data.findIndex((person) => person.id === actualiza);
    if (index !== -1) {
      data[index] = { ...data[index], ...actualizaUser };
      return data[index];
    }
    return null;
  },
  
  deleteUser: (id) => {
    let identificador = Number(id);
    let index = data.findIndex((person) => person.id === identificador);
    if (index !== -1) {
      let deletedUser = data.splice(index, 1);
      return deletedUser[0];
    }
    return null;
  },
   
  };