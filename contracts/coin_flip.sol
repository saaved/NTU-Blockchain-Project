pragma solidity ^0.4.23;

contract CoinFlip {

  uint randomNumber;
  uint contractBalance;
  address thisAddress = this;
  

  function SimpleStorage(uint initialValue) public {
    randomNumber = initialValue;
  }

  function set() public {
    randomNumber = uint(blockhash(block.number-1))%10 + 1;
  }

  function get() public view returns (uint retVal) {
    return randomNumber;
  }

  function getBlockNumber() public view returns (uint retVal) {
    return block.number;
  }

  function bet(address playerAddress, uint betAmount) payable public {
    set(); // generates a random number and stores on blockchain

    if(uint(blockhash(block.number-1))%10 > 5) {
      address(playerAddress).transfer(betAmount + ((betAmount * 95)/100)); // return winnings to player if player wins. Casino gets a 5% cut
    } 
  }

  function getContractAddress() public view returns (address Address) {
    return thisAddress; // Get the contract address
  }

  function getContractBalance() public view returns (uint bal) {
    return thisAddress.balance/1000000000000000000; // Division to convert wei -> eth
  }


}
