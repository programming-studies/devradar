const Developer = require("../models/Developer");
const parseArrayAsString = require("../utils/parseStringAsArray");

module.exports = {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;
    const techsArray = parseArrayAsString(techs);
    const developers = await Developer.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000 // unidade em metros, 10000 => 10km
        }
      }
    });
    response.json(developers);
  }
};
