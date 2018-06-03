import web3 from 'Embark/web3';
import EmbarkJS from 'Embark/EmbarkJS';
let SimpleStorageJSONConfig = {
  "contract_name": "SimpleStorage",
  "address": "0x84615044f0991AdC89042FC4896229C6E9E28E5c",
  "code": "608060405260018054600160a060020a031990811673b8d851486d1c953e31a44374aca11151d49b8bb317909155600280549091163017905534801561004457600080fd5b5060405160208061027c8339810160405251600055610214806100686000396000f3006080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312065fe0811461008757806332a2c5d0146100ae578063338ccd78146100df57806342cbb15c146100f55780636d4ce63c1461010a5780636f9fb98a1461011f578063b8e010de14610134575b600080fd5b34801561009357600080fd5b5061009c610149565b60408051918252519081900360200190f35b3480156100ba57600080fd5b506100c361016a565b60408051600160a060020a039092168252519081900360200190f35b6100f3600160a060020a0360043516610179565b005b34801561010157600080fd5b5061009c6101ad565b34801561011657600080fd5b5061009c6101b1565b34801561012b57600080fd5b5061009c6101b7565b34801561014057600080fd5b506100f36101d6565b600154600090670de0b6b3a764000090600160a060020a0316315b04905090565b600254600160a060020a031690565b604051600160a060020a038216906000906706f05b59d3b200009082818181858883f19350505050506101aa6101d6565b50565b4390565b60005490565b600254600090670de0b6b3a764000090600160a060020a031631610164565b600254600160a060020a0316316000555600a165627a7a723058200629f083abe7c33815c97c6b5effabd8e2797bbfe6c4f49af5b96be17ae22af20029",
  "runtime_bytecode": "6080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312065fe0811461008757806332a2c5d0146100ae578063338ccd78146100df57806342cbb15c146100f55780636d4ce63c1461010a5780636f9fb98a1461011f578063b8e010de14610134575b600080fd5b34801561009357600080fd5b5061009c610149565b60408051918252519081900360200190f35b3480156100ba57600080fd5b506100c361016a565b60408051600160a060020a039092168252519081900360200190f35b6100f3600160a060020a0360043516610179565b005b34801561010157600080fd5b5061009c6101ad565b34801561011657600080fd5b5061009c6101b1565b34801561012b57600080fd5b5061009c6101b7565b34801561014057600080fd5b506100f36101d6565b600154600090670de0b6b3a764000090600160a060020a0316315b04905090565b600254600160a060020a031690565b604051600160a060020a038216906000906706f05b59d3b200009082818181858883f19350505050506101aa6101d6565b50565b4390565b60005490565b600254600090670de0b6b3a764000090600160a060020a031631610164565b600254600160a060020a0316316000555600a165627a7a723058200629f083abe7c33815c97c6b5effabd8e2797bbfe6c4f49af5b96be17ae22af20029",
  "real_runtime_bytecode": "6080604052600436106100825763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166312065fe0811461008757806332a2c5d0146100ae578063338ccd78146100df57806342cbb15c146100f55780636d4ce63c1461010a5780636f9fb98a1461011f578063b8e010de14610134575b600080fd5b34801561009357600080fd5b5061009c610149565b60408051918252519081900360200190f35b3480156100ba57600080fd5b506100c361016a565b60408051600160a060020a039092168252519081900360200190f35b6100f3600160a060020a0360043516610179565b005b34801561010157600080fd5b5061009c6101ad565b34801561011657600080fd5b5061009c6101b1565b34801561012b57600080fd5b5061009c6101b7565b34801561014057600080fd5b506100f36101d6565b600154600090670de0b6b3a764000090600160a060020a0316315b04905090565b600254600160a060020a031690565b604051600160a060020a038216906000906706f05b59d3b200009082818181858883f19350505050506101aa6101d6565b50565b4390565b60005490565b600254600090670de0b6b3a764000090600160a060020a031631610164565b600254600160a060020a0316316000555600a165627a7a723058200629f083abe7c33815c97c6b5effabd8e2797bbfe6c4f49af5b96be17ae22af20029",
  "swarm_hash": "0629f083abe7c33815c97c6b5effabd8e2797bbfe6c4f49af5b96be17ae22af2",
  "gas_estimates": {
    "creation": {
      "codeDepositCost": "106400",
      "executionCost": "60720",
      "totalCost": "167120"
    },
    "external": {
      "get()": "472",
      "getBalance()": "882",
      "getBlockNumber()": "249",
      "getContractAddress()": "559",
      "getContractBalance()": "1003",
      "sendMoney(address)": "infinite",
      "set()": "20943"
    }
  },
  "function_hashes": {
    "get()": "6d4ce63c",
    "getBalance()": "12065fe0",
    "getBlockNumber()": "42cbb15c",
    "getContractAddress()": "32a2c5d0",
    "getContractBalance()": "6f9fb98a",
    "sendMoney(address)": "338ccd78",
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
      "constant": false,
      "inputs": [
        {
          "name": "playerAddress",
          "type": "address"
        }
      ],
      "name": "sendMoney",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function",
      "signature": "0x338ccd78"
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
