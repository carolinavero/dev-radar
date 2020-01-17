const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {

        //buscar todos devs num raio de 10km
        //filtrar por tecnologias
        const { latitude, longitude, techs } = request.query;
        console.log(latitude, longitude);

        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);

        //filtros da busca
        const devs = await Dev.find({
            techs: {
                $in: techsArray, 
            },
            location: {
                
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000, 
                },
            },
        });

        return response.json({ devs });
    }
}