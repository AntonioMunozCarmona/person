const person = require('./model').models.person;

if ( process.argv.length !== 4) {  // PArametros erroneos
    console.log(`   ERROR. Syntax is: "node 4_update <name> <age>"`);
    process.exit(2);    // Finaliza node
    
}

const name = process.argv[2];
const age = process.argv[3];

person.update( {age} , {where: {name}})
    .then( n=> {
        if ( n[0] !== 0 ) { console.log(`  ${name} updated a ${age}`)}
        else { throw new Error(`  ${name} is not in the DB`)}
    })
    .catch( err => console.log(`   ${err}`))
