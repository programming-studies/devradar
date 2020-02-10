const axios = require("axios");
const Developer = require("../models/Developer");
const parseArrayAsString = require("../utils/parseStringAsArray");

module.exports = {
  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;
    let developer = await Developer.findOne({ github_username });
    if (!developer) {
      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      // se o name não existir pega o valor do login
      const { name = login, avatar_url, bio } = apiResponse.data;
      const techsArray = parseArrayAsString(techs);
      const location = { type: "Point", coordinates: [longitude, latitude] };

      developer = await Developer.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return response.json(developer);
  },
  async index(request, response) {
    const developers = await Developer.find();
    response.json(developers);
  }
};
