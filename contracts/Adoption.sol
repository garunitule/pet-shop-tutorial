pragma solidity >=0.4.22 <0.8.16;

// 犬と飼い主の紐付け、読み込み
contract Adoption {
    uint constant petIdMin = 0;
    uint constant petIdMax = 15;
    address[16] public adopters;

    function adopt(uint petId) public returns (uint) {
        // adoptersのキーに収まるか判定
        require(petId >= petIdMin && petId <= petIdMax);

        adopters[petId] = msg.sender;

        return petId;
    }

    function getAdopters() public view returns (address[16] memory) {
        return adopters;
    }
}