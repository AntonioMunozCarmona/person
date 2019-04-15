const person = require('./model.js').models.person;

if ( process.argv.length != 4 ) { //Parámetros erroneos
    console.log(`   syntax: "node 2_create <name> <age>"`);
    process.exit(2); // Finaliza el proceso node
}

const name = process.argv[2];
const age = process.argv[3];

person.create({ name, age})
    .then( () => console.log(`   ${name} created with ${age} years`))
    .catch( err => console.log(`   ${err}`))