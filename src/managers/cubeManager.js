const Cube = require('../models/Cube');
const uniqid = require('uniqid');

exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean()

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from))
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to))
    }

    return result;
}
exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories')

exports.create = async (cubeData) => {
    const cube = new Cube(cubeData);

    await cube.save()

    return cube

};

exports.update = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);
exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);

    return cube.save();
}