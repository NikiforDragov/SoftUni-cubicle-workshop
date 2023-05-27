const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {

    const newCube = {
        id: cubes.length,
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube

}