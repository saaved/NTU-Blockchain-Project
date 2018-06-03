pragma solidity ^0.4.23;

contract SimpleStorage {
  uint randomNumber;
  address moneyAddress = 0xb8d851486d1c953e31a44374aca11151d49b8bb3;
  address thisAddress = this;
  

  function SimpleStorage(uint initialValue) public {
    randomNumber = initialValue;
  }

  function set() public {
    randomNumber = uint(blockhash(block.number-1))%10;
  }

  function get() public view returns (uint retVal) {
    return randomNumber;
  }

  function getBlockNumber() public view returns (uint retVal) {
    return block.number;
  }

  function sendMoney() payable public {
    thisAddress.transfer(200);
  }

  function getContractAddress() public view returns (address Address) {
    return thisAddress;
  }

  function getBalance() public view returns (uint bal) { 
    return moneyAddress.balance/1000000000000000000; //division to convert wei -> eth
  }

  function getContractBalance() public view returns (uint bal) {
    return thisAddress.balance/1000000000000000000;
  }

}
