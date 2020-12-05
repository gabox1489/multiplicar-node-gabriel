const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i} = ${base*i}`)
    }
}


let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let mostrar = '';

        for (let i = 1; i <= 10; i++) {
            mostrar += `${base}*${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, mostrar, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
            console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}