//Imports de los módulos
const { writeFile } = require('fs');
const fs = require('fs/promises');
const path = require('path');


const textPath = path.resolve('hello.txt');
const userPath = path.resolve('users.json');

const readFileUsers = async () => {
    //Imprimir en consola el arreglo de usuarios
    try {
        const data = await fs.readFile(userPath, 'utf8');
        console.log(data);
    }catch{
        console.log(error.message);
    }
};

const writeHelloWorld = () => {
    //Escribir hello world! en el archivo hello.txt
    
    fs.writeFile(textPath, 'hello world!');
};

const addUser = async (username) => {
    //Agregar un usuario en la lista users.json
    const userPath = path.resolve('users.json');
    try {
        const users = await fs.readFile(userPath, 'utf8');
        const userArray = JSON.parse(users);
        userArray.push(username);
        await fs.writeFile(userPath, JSON.stringify(userArray));
    }catch(error){
        console.log(error)
    }
    
    
};

//No hace falta ejecutar las funciones

module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
