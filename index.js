var brain=require("brain.js");

/*
var numScaleFactor=0.01;


const config = {
  binaryThresh: 0.5, // ¯\_(ツ)_/¯
  hiddenLayers: [100,100,100], // array of ints for the sizes of the hidden layers in the network
  activation: 'relu' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);


var tests=[];
for(var i=0;i<10;i++){
  tests.push({
    input:encode(i),
    output:encode(i*i)
  });
  console.log(tests);
}

net.train(tests);

for(var i=0;i<15;i++){
  const output = net.run([encode(i)]);
  console.log(output);
}





function fact(n){
  if(n<=0){
    return 1;
  }else{
    return n*fact(n-1);
  }
}





function encode(num){
  var out=[];
  for(var i=0;i<1000;i++){
    if(i==num){
      out.push(1);
    }else{
      out.push(0)
    }
  }
  return out;
}

function decode(arr){
  for(var i=0;i<1000;i++){
    if(arr[i]==1){
      return i;
    }
  }
  return -1;
}
*/

function fact(n){
  if(n<=0){
    return 1;
  }else{
    return n*fact(n-1);
  }
}

var func=function(x){
  return x*x;
};



var results=[];


for(var i=1;i<10;i++){//1-10 layers
  for(var j=0;j<i;j++){//Increment each layer seperately
    for(var k=30;k<80;k+=10){//Increment each layer seperately
      var layers=[];
      for(var a=0;a<i;a++){
        layers.push(k);
      }

      console.log("Network Parameters: "+layers);
      var data=makeNetwork([0,1,2,3,4,5,6,7,8,9,10],[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],fact,layers);
      console.log("Average Error: "+data.error);
      console.log("Training Time: "+data.time);
      data.layers=layers;
      results.push(data);
    }
  }
}

results.sort(function(x,y){
  return x.error-y.error;
});
console.log(results);

/**
 * Creates a network with the given specifications and tests against a function
 *
 */
function makeNetwork(inputs,outputs,func,layers){
  const net = new brain.recurrent.RNNTimeStep({
    //inputSize: 1,
    hiddenLayers: layers,
    //outputSize: 1,
  })

  var tests=[];
  for(var i=0;i<inputs.length;i++){
    tests.push([i,func(i)]);
  }



  var startTime=new Date();
  net.train(tests);
  var endTime=new Date();

  var error=0;
  var tests=0;

  for(var i=0;i<outputs.length;i++){
    var output = net.run([i])
    console.log(i,output,func(i)-output);
    error+=Math.abs(func(i)-output);
    tests++;
  }

  return {error:error/tests,time:((endTime-startTime)/1000/60).toFixed(2)}
}

/*
const net = new brain.recurrent.RNNTimeStep({
  //inputSize: 1,
  hiddenLayers: [50,50,50],
  //outputSize: 1,
})

var tests=[];
for(var i=0;i<10;i++){
  console.log([i,func(i)]);
  tests.push([i,func(i)]);
}



var startTime=new Date();
net.train(tests);
var endTime=new Date();

var error=0;
var tests=0;

for(var i=0;i<20;i++){
  var output = net.run([i])
  console.log([i])
  console.log(output);
  error+=Math.abs(func(i)-output);
  tests++;
}

console.log("");
console.log("Average Error: "+error/tests);
console.log("Training Time: "+((endTime-startTime)/1000/60).toFixed(2));


function fact(n){
  if(n<=0){
    return 1;
  }else{
    return n*fact(n-1);
  }
}
*/
