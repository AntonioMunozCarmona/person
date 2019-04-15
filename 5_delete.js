const person = require('./model').models.person;

if ( process.argv.length !== 3 ) { // Parametros erroneos
    console.log(`   La syntaxis debe ser "node 05_delete <name>"`);
    process.exit(2);
}

const name = process.argv[2];

person.destroy( {where: {name} })
    .then( n => {
        if ( n!== 0) {
            console.log(`   ${name} deleted from the DB`)
            
        } else {
            throw new Error(`   ${name} not in DB`)
        };
    })
    .catch(err => console.log(`   ${err}`))