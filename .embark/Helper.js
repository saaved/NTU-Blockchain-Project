import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let HelperJSONConfig = {
  "contract_name": "Helper",
  "address": "0xfD31b5cE21e86b2B0275d87c1Bae5E43607Fc5Fe",
  "code": "6080604052348015600f57600080fd5b50603580601d6000396000f3006080604052600080fd00a165627a7a72305820bea50613082c01cec0a31b512ac5b277fd42980ff2e4f2c9bf1b7062428c9e740029",
  "runtime_bytecode": "6080604052600080fd00a165627a7a72305820bea50613082c01cec0a31b512ac5b277fd42980ff2e4f2c9bf1b7062428c9e740029",
  "real_runtime_bytecode": "6080604052600080fd00a165627a7a72305820c225068b52c5da2882652646fbcc1e909ee2b2bc646d6ef22f8b59e1d276763a0029",
  "swarm_hash": "bea50613082c01cec0a31b512ac5b277fd42980ff2e4f2c9bf1b7062428c9e74",
  "gas_estimates": {
    "creation": {
      "codeDepositCost": "10600",
      "executionCost": "66",
      "totalCost": "10666"
    }
  },
  "function_hashes": {},
  "abi": []
}
;
let Helper = new EmbarkJS.Contract(HelperJSONConfig);

__embarkContext.execWhenReady(function() {

Helper.setProvider(web3.currentProvider);

Helper.options.from = web3.eth.defaultAccount;

});
export default Helper;
