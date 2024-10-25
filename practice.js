// class Dictionary {
//     constructor () {
//       this.items = {}
//     }
    
//     has (key) {
//       return this.items.hasOwnProperty(key)	
//     }
    
//     set (key, value) {
//       this.items[key] = value
//     }
    
//     remove (key) {
//       if (this.has(key)) {
//         delete this.items[key]
//         return true
//       }
  
//       return false
//     }
    
//     get (key) {
//       return this.has(key) ? this.items[key] : undefined
//     }
    
//     values () {
//       const values = []
//       for (let key in this.items) {
//         if (this.has(key)) {
//           values.push(this.items[key])
//         }
//       }
//       return values
//     }
  
//     size () {
//       return Object.keys(this.items).length
//     }
    
//     keys () {
//       const keys = []
//       for (let key in this.items) {
//           keys.push(keys)
//       }
//           return keys
      
//       // La forma corta de hacer esto y abusando de las bondades de javascript
//       // es así:
//       // return Object.keys(this.items)
//     }
    
//     getItems () {
//       return this.items
//     }
//   }
  
//   const dict = new Dictionary()
  
//   dict.set('Gandalf', 'gandalf@email.com')
//   dict.set('John', 'johnsnowf@email.com')
//   dict.set('Tyrion', 'tyrion@email.com')
  
//   console.log(dict.has('Gandalf'))
//   console.log(dict.size())
//   console.log(dict.keys())
//   console.log(dict.values())
//   console.log(dict.get('Tyrion'))
  
//   console.log(dict.delete('John'))
//   console.log(dict.keys())
//   console.log(dict.values())
//   console.log(dict.getItems())



  // const usuarios = [
  //   {   id: '1', correo: 'sss.com'},
  //   {   id: '2', correo: 'dewfdewf'}
  // ];
  
  // function getuser(usuarios, usuariosId){
  //   return usuarios.find(usuario => usuario.id === usuariosId);

  // }

  // console.log(getuser(usuarios, '1'));

  const usuarios = {
    'juan': { 
      id: '1',
      nombre: 'sola',
      correo: 'sss.com',
      edad: 13 },
    'monse': { id: '2',
      correo: 'dewfdewf' }
  };

// Modifica la función getuser para que también acepte un parámetro adicional que filtre a los usuarios por edad.
// Si no hay usuarios que cumplan con el criterio de edad, debe retornar un mensaje de "No se encontraron usuario


 function getuser(usuarios, edad) {
  for (const usuario in usuarios){
    if (usuarios[usuario].edad === edad) {
      return usuarios[usuario];
    }
  }
    return 'No se encontraron usuarios';
    
}

console.log(getuser(usuarios, 13))

console.log(usuarios['juan'].correo)
console.log(usuarios['juan'])

function searchUser(usuarios, criteria) {
// Implementar la función aquí
}


function addUser(usuarios, nombre) {
  for (const usuario in usuarios){
    if (usuario === nombre){
      return usuarios[usuario];
      }
    }
      usuarios[nombre] = { nombre: nombre }
      console.log(usuarios)
    }

addUser(usuarios, 'Ana')


function updateUser(usuarios, usuariosName, newData) {
// Implementar la función aquí
}

function deleteUser(usuarios, usuariosName) {
// Implementar la función aquí
}


function listUsers(usuarios) {
  console.log(usuarios)
}

listUsers(usuarios
  
)

function getuserbyname(usuarios, usuariosName){
    return usuarios[usuariosName];

  }
  console.log(getuserbyname(usuarios, 'juan'));


  