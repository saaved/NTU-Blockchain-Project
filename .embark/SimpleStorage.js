import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let SimpleStorageJSONConfig = {
  "contract_name": "SimpleStorage",
  "address": "0x04D45b51fe4f00b4478F8b0719Fa779f14c8A194",
  "code": "608060405260018054600160a060020a031990811673b8d851486d1c953e31a44374aca11151d49b8bb317909155600280549091163017905534801561004457600080fd5b506040516020806102b2833981016040525160005561024a806100686000396000f3006080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312065fe0811461008757806332a2c5d0146100ae57806342cbb15c146100ec5780636d4ce63c146101015780636f9fb98a14610116578063b8e010de1461012b578063cbedbf5a14610142575b600080fd5b34801561009357600080fd5b5061009c61014a565b60408051918252519081900360200190f35b3480156100ba57600080fd5b506100c3610178565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100f857600080fd5b5061009c610194565b34801561010d57600080fd5b5061009c610198565b34801561012257600080fd5b5061009c61019e565b34801561013757600080fd5b506101406101ca565b005b6101406101d8565b600154600090670de0b6b3a76400009073ffffffffffffffffffffffffffffffffffffffff16315b04905090565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b4390565b60005490565b600254600090670de0b6b3a76400009073ffffffffffffffffffffffffffffffffffffffff1631610172565b600a60001943014006600055565b60025460405173ffffffffffffffffffffffffffffffffffffffff9091169060009060c89082818181858883f1935050505015801561021b573d6000803e3d6000fd5b505600a165627a7a7230582086135f40522fbbe45ecf088acaf36a58f0a53e118f52a0f0063725766fba3f8f0029",
  "runtime_bytecode": "6080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312065fe0811461008757806332a2c5d0146100ae57806342cbb15c146100ec5780636d4ce63c146101015780636f9fb98a14610116578063b8e010de1461012b578063cbedbf5a14610142575b600080fd5b34801561009357600080fd5b5061009c61014a565b60408051918252519081900360200190f35b3480156100ba57600080fd5b506100c3610178565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100f857600080fd5b5061009c610194565b34801561010d57600080fd5b5061009c610198565b34801561012257600080fd5b5061009c61019e565b34801561013757600080fd5b506101406101ca565b005b6101406101d8565b600154600090670de0b6b3a76400009073ffffffffffffffffffffffffffffffffffffffff16315b04905090565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b4390565b60005490565b600254600090670de0b6b3a76400009073ffffffffffffffffffffffffffffffffffffffff1631610172565b600a60001943014006600055565b60025460405173ffffffffffffffffffffffffffffffffffffffff9091169060009060c89082818181858883f1935050505015801561021b573d6000803e3d6000fd5b505600a165627a7a7230582086135f40522fbbe45ecf088acaf36a58f0a53e118f52a0f0063725766fba3f8f0029",
  "real_runtime_bytecode": "6080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312065fe0811461008757806332a2c5d0146100ae57806342cbb15c146100ec5780636d4ce63c146101015780636f9fb98a14610116578063b8e010de1461012b578063cbedbf5a14610142575b600080fd5b34801561009357600080fd5b5061009c61014a565b60408051918252519081900360200190f35b3480156100ba57600080fd5b506100c3610178565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100f857600080fd5b5061009c610194565b34801561010d57600080fd5b5061009c610198565b34801561012257600080fd5b5061009c61019e565b34801561013757600080fd5b506101406101ca565b005b6101406101d8565b600154600090670de0b6b3a76400009073ffffffffffffffffffffffffffffffffffffffff16315b04905090565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b4390565b60005490565b600254600090670de0b6b3a76400009073ffffffffffffffffffffffffffffffffffffffff1631610172565b600a60001943014006600055565b60025460405173ffffffffffffffffffffffffffffffffffffffff9091169060009060c89082818181858883f1935050505015801561021b573d6000803e3d6000fd5b505600a165627a7a7230582086135f40522fbbe45ecf088acaf36a58f0a53e118f52a0f0063725766fba3f8f0029",
  "swarm_hash": "86135f40522fbbe45ecf088acaf36a58f0a53e118f52a0f0063725766fba3f8f",
  "gas_estimates": {
    "creation": {
      "codeDepositCost": "117200",
      "executionCost": "60732",
      "totalCost": "177932"
    },
    "external": {
      "get()": "450",
      "getBalance()": "813",
      "getBlockNumber()": "227",
      "getContractAddress()": "421",
      "getContractBalance()": "912",
      "sendMoney()": "infinite",
      "set()": "20282"
    }
  },
  "function_hashes": {
    "get()": "6d4ce63c",
    "getBalance()": "12065fe0",
    "getBlockNumber()": "42cbb15c",
    "getContractAddress()": "32a2c5d0",
    "getContractBalance()": "6f9fb98a",
    "sendMoney()": "cbedbf5a",
    "set()": "b8e010de"
  },
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "name": "bal",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getContractAddress",
      "outputs": [
        {
          "name": "Address",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBlockNumber",
      "outputs": [
        {
          "name": "retVal",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "retVal",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getContractBalance",
      "outputs": [
        {
          "name": "bal",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "sendMoney",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "initialValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ]
}
;
let SimpleStorage = new EmbarkJS.Contract(SimpleStorageJSONConfig);

__embarkContext.execWhenReady(function() {

SimpleStorage.setProvider(web3.currentProvider);

SimpleStorage.options.from = web3.eth.defaultAccount;

});
export default SimpleStorage;
