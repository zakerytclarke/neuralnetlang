var brain=require("brain.js");


var numScaleFactor=0.01;


const config = {
  binaryThresh: 0.5, // ¯\_(ツ)_/¯
  hiddenLayers: [100,100,100,100,100], // array of ints for the sizes of the hidden layers in the network
  activation: 'relu' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);


var tests=[];
for(var i=0;i<10;i++){
  tests.push({
    input:[i*numScaleFactor],
    output:[i*i*numScaleFactor]
  });
  console.log(tests);
}

net.train(tests);

for(var i=0;i<10;i++){
  const output = net.run([i*numScaleFactor]);
  console.log(output/numScaleFactor);
}





function fact(n){
  if(n<=0){
    return 1;
  }else{
    return n*fact(n-1);
  }
}
/*
const net = new brain.recurrent.LSTMTimeStep({
  inputSize: 1,
  hiddenLayers: [50,50,50],
  outputSize: 1,
})

var tests=[];
for(var i=0;i<10;i++){
  console.log([i,fact(i)]);
  tests.push([i,fact(i)]);
  for(var j=0;j<1000;j++){
  }
}

net.train(tests);
const output = net.run([9])
console.log(output);
*/
