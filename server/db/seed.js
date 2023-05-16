const Pokemon = require("../models/Pokemon");
const axios = require("axios")
const sequelize = require('../config/connection')

const init = async () =>{
    try {
    await sequelize.sync({ force: true });

        const pokeCalls = [];
    
        for (let i = 1; i < 152; i++) {
          pokeCalls.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`));
        }
        
        const callWaiting = await Promise.all(pokeCalls);
        const condensedData = callWaiting.map(item => {
          const miniPoke = {
              id: item.data.id,
              name: item.data.name,
              sprite: item.data.sprites.front_default,
              type: item.data.types[0].type?.name,
              url: `https://pokeapi.co/api/v2/pokemon/${item.data.id}/`
            }
          return miniPoke
        })
        await Pokemon.bulkCreate(condensedData)
        console.log("seeded database")
        process.exit(0)
    }
    catch(e){
        console.log(e)
    }
}

init()