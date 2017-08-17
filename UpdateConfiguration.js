var configuration = [1,1,0,0,1,1,0];
var ruleTab = [0,1,0,1,0,1,0,1];

function updateConfig(oldConfig, ruleTable){
  var newConfig = [];
  for(var i=0; i<oldConfig.length; i++){
    var num = 4*oldConfig[(i+oldConfig.length-1) % oldConfig.length] + 2*oldConfig[i] + 1*oldConfig[(i+1) % oldConfig.length];
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

console.log(newGenerations(configuration, ruleTab, 5));
