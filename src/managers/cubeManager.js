const uniqid = require('uniqid');


const cubes = [
    {
        id: uniqid(),
        name: 'cool',
        description: 'cube',
        imageUrl: 'https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg',
        difficultyLevel: 2,
    },
    {
        id: uniqid(),
        name: 'hot',
        description: 'box',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61HpQqVQ37L._SY355_.jpg',
        difficultyLevel: 4,
    }
];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {

    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube

}