pragma solidity >=0.4.22 <0.8.16;

contract Adoption {
    address[16] public adopters;

    function adopt(uint petId) public returns (uint) {
        // adoptersのキーに収まるか判定
        require(petId >= 0 && petId <= 15);

        adopters[petId] = msg.sender;

        return petId;
    }

    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }
}