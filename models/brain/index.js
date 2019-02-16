// This is deprecated code 🚫 
// Working o a TenserFlow version.
const brain = require('brain.js'); 

const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 1,
    outputSize: 1
}
);


const data = [
[1, 2, 3, 4, 5, 6],
[2, 4, 6, 8, 10,12],
[3, 6, 9, 12,15,18],
[4, 8, 12,16,20,24],
[5, 10,15,20,25,30],
[6, 12,18,24,30,36],
]

net.train(data, {
    iterations: 10000,
    errorThresh: 0.9,
    learningRate: 0.9
});


const output = net.forecast([7,14,21,28,35,42], 3); 

console.log(output);