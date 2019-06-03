const StrategyManager = require("./StrategyManager");
const Strategy1 = require("./Strategy1");
const Strategy2 = require("./Strategy2");

const strategyManager = new StrategyManager();
const strategy1 = new Strategy1();
const strategy2 = new Strategy2();

strategyManager.strategy = strategy1;
//strategyManager.doAction();

strategyManager.strategy = strategy2;
//strategyManager.doAction();

const strategies = {
    strategy1,
    strategy2
}

function implementarStrategy(param){
    strategies[param].doAction();
}

implementarStrategy(process.argv[2]);