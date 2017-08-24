var configuration = [1,1,0,0,1,1,0];
var ruleTab = [0,1,0,1,0,1,0,1];

function updateConfig(oldConfig, ruleTable){
  var newConfig = [];
  var caRule = 0;
  for(var k=3; k<=13; k++){
    if(Math.pow(2,k) === ruleTable.length){
      caRule = k;
      break;
    }
  }
  for(var i=0; i<oldConfig.length; i++){
    var num = 0;
    for(var j=caRule-1; j>=0; j--){
      num = num + Math.pow(2,j)*oldConfig[(i+oldConfig.length + (caRule-1)/2) % oldConfig.length];
    }
        newConfig[i] = ruleTable[num];
  }
  return newConfig;
}

function newGenerations(config, rule, numGens){
  var answer = [];
  var holder = config;
  for(var i=0; i<=numGens; i++){
    answer [i] = holder;
    holder = updateConfig(holder, rule);
  }
  return answer;
}

console.log(newGenerations(configuration, ruleTab, 3));
