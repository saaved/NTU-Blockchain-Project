import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let SimpleStorageJSONConfig = {
  "contract_name": "SimpleStorage",
  "address": "0x04D45b51fe4f00b4478F8b0719Fa779f14c8A194",
  "code": "608060405260028054600160a060020a0319163017905534801561002257600080fd5b50604051602080610281833981016040525160005561023b806100466000396000f3006080604052600436106100775763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166332a2c5d0811461007c57806342cbb15c146100ba5780636d4ce63c146100e15780636f9fb98a146100f6578063b8e010de1461010b578063f846cabc14610122575b600080fd5b34801561008857600080fd5b50610091610146565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100c657600080fd5b506100cf610162565b60408051918252519081900360200190f35b3480156100ed57600080fd5b506100cf610166565b34801561010257600080fd5b506100cf61016c565b34801561011757600080fd5b50610120610195565b005b61012073ffffffffffffffffffffffffffffffffffffffff600435166024356101a6565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b4390565b60005490565b600254670de0b6b3a764000073ffffffffffffffffffffffffffffffffffffffff909116310490565b600a60001943014006600101600055565b6101ae610195565b6005600a60001943014006111561020b5760405173ffffffffffffffffffffffffffffffffffffffff8316906064605f840204830180156108fc02916000818181858888f19350505050158015610209573d6000803e3d6000fd5b505b50505600a165627a7a72305820dc965d13970b25b594f8a3ac2e5c2157c9db156152f30275ea9b635d06e5f8790029",
  "runtime_bytecode": "6080604052600436106100775763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166332a2c5d0811461007c57806342cbb15c146100ba5780636d4ce63c146100e15780636f9fb98a146100f6578063b8e010de1461010b578063f846cabc14610122575b600080fd5b34801561008857600080fd5b50610091610146565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100c657600080fd5b506100cf610162565b60408051918252519081900360200190f35b3480156100ed57600080fd5b506100cf610166565b34801561010257600080fd5b506100cf61016c565b34801561011757600080fd5b50610120610195565b005b61012073ffffffffffffffffffffffffffffffffffffffff600435166024356101a6565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b4390565b60005490565b600254670de0b6b3a764000073ffffffffffffffffffffffffffffffffffffffff909116310490565b600a60001943014006600101600055565b6101ae610195565b6005600a60001943014006111561020b5760405173ffffffffffffffffffffffffffffffffffffffff8316906064605f840204830180156108fc02916000818181858888f19350505050158015610209573d6000803e3d6000fd5b505b50505600a165627a7a72305820dc965d13970b25b594f8a3ac2e5c2157c9db156152f30275ea9b635d06e5f8790029",
  "real_runtime_bytecode": "6080604052600436106100775763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166332a2c5d0811461007c57806342cbb15c146100ba5780636d4ce63c146100e15780636f9fb98a146100f6578063b8e010de1461010b578063f846cabc14610122575b600080fd5b34801561008857600080fd5b50610091610146565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100c657600080fd5b506100cf610162565b60408051918252519081900360200190f35b3480156100ed57600080fd5b506100cf610166565b34801561010257600080fd5b506100cf61016c565b34801561011757600080fd5b50610120610195565b005b61012073ffffffffffffffffffffffffffffffffffffffff600435166024356101a6565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b4390565b60005490565b600254670de0b6b3a764000073ffffffffffffffffffffffffffffffffffffffff909116310490565b600a60001943014006600101600055565b6101ae610195565b6005600a60001943014006111561020b5760405173ffffffffffffffffffffffffffffffffffffffff8316906064605f840204830180156108fc02916000818181858888f19350505050158015610209573d6000803e3d6000fd5b505b50505600a165627a7a72305820dc965d13970b25b594f8a3ac2e5c2157c9db156152f30275ea9b635d06e5f8790029",
  "swarm_hash": "dc965d13970b25b594f8a3ac2e5c2157c9db156152f30275ea9b635d06e5f879",
  "gas_estimates": {
    "creation": {
      "codeDepositCost": "114200",
      "executionCost": "40493",
      "totalCost": "154693"
    },
    "external": {
      "bet(address,uint256)": "infinite",
      "get()": "428",
      "getBlockNumber()": "205",
      "getContractAddress()": "399",
      "getContractBalance()": "870",
      "set()": "20266"
    }
  },
  "function_hashes": {
    "bet(address,uint256)": "f846cabc",
    "get()": "6d4ce63c",
    "getBlockNumber()": "42cbb15c",
    "getContractAddress()": "32a2c5d0",
    "getContractBalance()": "6f9fb98a",
    "set()": "b8e010de"
  },
  "abi": [
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
      "type": "function",
      "signature": "0x32a2c5d0"
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
      "type": "function",
      "signature": "0x42cbb15c"
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
      "type": "function",
      "signature": "0x6d4ce63c"
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
      "type": "function",
      "signature": "0x6f9fb98a"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb8e010de"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "playerAddress",
          "type": "address"
        },
        {
          "name": "betAmount",
          "type": "uint256"
        }
      ],
      "name": "bet",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function",
      "signature": "0xf846cabc"
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
      "type": "constructor",
      "signature": "constructor"
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
