import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let SimpleStorageJSONConfig = {
  "contract_name": "SimpleStorage",
  "address": "0x04D45b51fe4f00b4478F8b0719Fa779f14c8A194",
  "code": "608060405260028054600160a060020a0319163017905534801561002257600080fd5b5060405160208061028c8339810160405251600055610246806100466000396000f3006080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312065fe0811461008757806332a2c5d0146100ae57806342cbb15c146100ec5780636d4ce63c146101015780636f9fb98a14610087578063b8e010de14610116578063f846cabc1461012d575b600080fd5b34801561009357600080fd5b5061009c610151565b60408051918252519081900360200190f35b3480156100ba57600080fd5b506100c361017a565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100f857600080fd5b5061009c610196565b34801561010d57600080fd5b5061009c61019a565b34801561012257600080fd5b5061012b6101a0565b005b61012b73ffffffffffffffffffffffffffffffffffffffff600435166024356101b1565b600254670de0b6b3a764000073ffffffffffffffffffffffffffffffffffffffff909116310490565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b4390565b60005490565b600a60001943014006600101600055565b6101b96101a0565b6005600a6000194301400611156102165760405173ffffffffffffffffffffffffffffffffffffffff8316906064605f840204830180156108fc02916000818181858888f19350505050158015610214573d6000803e3d6000fd5b505b50505600a165627a7a723058200d209c52a423538e72c4db2fd9fd7a1b8ad982b948e40f7d2c6ede9231341a580029",
  "runtime_bytecode": "6080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312065fe0811461008757806332a2c5d0146100ae57806342cbb15c146100ec5780636d4ce63c146101015780636f9fb98a14610087578063b8e010de14610116578063f846cabc1461012d575b600080fd5b34801561009357600080fd5b5061009c610151565b60408051918252519081900360200190f35b3480156100ba57600080fd5b506100c361017a565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100f857600080fd5b5061009c610196565b34801561010d57600080fd5b5061009c61019a565b34801561012257600080fd5b5061012b6101a0565b005b61012b73ffffffffffffffffffffffffffffffffffffffff600435166024356101b1565b600254670de0b6b3a764000073ffffffffffffffffffffffffffffffffffffffff909116310490565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b4390565b60005490565b600a60001943014006600101600055565b6101b96101a0565b6005600a6000194301400611156102165760405173ffffffffffffffffffffffffffffffffffffffff8316906064605f840204830180156108fc02916000818181858888f19350505050158015610214573d6000803e3d6000fd5b505b50505600a165627a7a723058200d209c52a423538e72c4db2fd9fd7a1b8ad982b948e40f7d2c6ede9231341a580029",
  "real_runtime_bytecode": "6080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312065fe0811461008757806332a2c5d0146100ae57806342cbb15c146100ec5780636d4ce63c146101015780636f9fb98a14610087578063b8e010de14610116578063f846cabc1461012d575b600080fd5b34801561009357600080fd5b5061009c610151565b60408051918252519081900360200190f35b3480156100ba57600080fd5b506100c361017a565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b3480156100f857600080fd5b5061009c610196565b34801561010d57600080fd5b5061009c61019a565b34801561012257600080fd5b5061012b6101a0565b005b61012b73ffffffffffffffffffffffffffffffffffffffff600435166024356101b1565b600254670de0b6b3a764000073ffffffffffffffffffffffffffffffffffffffff909116310490565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b4390565b60005490565b600a60001943014006600101600055565b6101b96101a0565b6005600a6000194301400611156102165760405173ffffffffffffffffffffffffffffffffffffffff8316906064605f840204830180156108fc02916000818181858888f19350505050158015610214573d6000803e3d6000fd5b505b50505600a165627a7a723058200d209c52a423538e72c4db2fd9fd7a1b8ad982b948e40f7d2c6ede9231341a580029",
  "swarm_hash": "0d209c52a423538e72c4db2fd9fd7a1b8ad982b948e40f7d2c6ede9231341a58",
  "gas_estimates": {
    "creation": {
      "codeDepositCost": "116400",
      "executionCost": "40499",
      "totalCost": "156899"
    },
    "external": {
      "bet(address,uint256)": "infinite",
      "get()": "450",
      "getBalance()": "804",
      "getBlockNumber()": "227",
      "getContractAddress()": "421",
      "getContractBalance()": "892",
      "set()": "20288"
    }
  },
  "function_hashes": {
    "bet(address,uint256)": "f846cabc",
    "get()": "6d4ce63c",
    "getBalance()": "12065fe0",
    "getBlockNumber()": "42cbb15c",
    "getContractAddress()": "32a2c5d0",
    "getContractBalance()": "6f9fb98a",
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
      "type": "function",
      "signature": "0x12065fe0"
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
