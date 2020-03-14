const axios = require("axios");
const Developer = require("../models/Developer");
const parseArrayAsString = require("../utils/parseStringAsArray");
const { findConnections, sendMessage } = require("../websocket");

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

    // Filtrar conexões que estão há no máximo 10km de distância e que o novo desenvolvedor
    // tenha pelo menos uma das tecnologias filtradas
    const sendSocketMessageTo = findConnections({latitude, longitude}, techsArray);
    sendMessage(sendSocketMessageTo, 'new-developer', developer);

    return response.json(developer);
  },
  async index(request, response) {
    const developers = await Developer.find();
    response.json(developers);
  }
};
