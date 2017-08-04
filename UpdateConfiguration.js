var configuration = [1,1,0,0,1,1,0];
var ruleTab = [0,1,0,1,0,1,0,1];

function updateConfig(oldConfig, ruleTable){
  var newConfig = [];
  for(var i=0; i<oldConfig.length; i++){
    var self = oldConfig[i];
    var left = oldConfig[(i+oldConfig.length-1) % oldConfig.length];
    var right = oldConfig[(i+1) % oldConfig.length];
    var num = 4*left + 2*self + 1*right;
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
