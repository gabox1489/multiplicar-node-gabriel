//requireds
const { help } = require('yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado : ${archivo}`))
            .catch(e => console.log(e))
        console.log('Crear');
        break;

    default:
        console.log('Comando no reconocido');

}




//console.log(argv.base);



//let parametro = arg[2];
//let base = parametro.split('=')[1]