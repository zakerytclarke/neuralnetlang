var brain=require("brain.js");
// provide optional config object (or undefined). Defaults shown.


var numScaleFactor=0.001;


const config = {
  binaryThresh: 0.5, // ¯\_(ツ)_/¯
  hiddenLayers: [30,30,30], // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);


var tests=[
  {}
];


net.train(tests);


const output = net.run([100*numScaleFactor]);
console.log(output/numScaleFactor);




function fact(n){
  if(n<=0){
    return 1;
  }else{
    return n*fact(n-1);
  }
}
