// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 < 0.9.0;

contract Election{
    address manager;
    
    constructor(){
        manager = msg.sender;
    }
  
    struct voter{
        uint id;
        string name;
        address account;
        bool isvoted; 
    }

    uint public votercount;
    address[] public voterList;
    mapping(address => voter) public voters;

    
    struct candidate{
        uint id;
        string name;
        address account;
    }

    uint public candidateCount;
    address[] public candidateList;
    mapping(address => candidate) public candidates;
    
    function registerVote(string memory name) public {
        votercount++;
        voters[msg.sender]=voter(votercount,name,msg.sender,false);
        voterList.push(msg.sender);
    }

    





    // function voterDetails() public view returns(uint, string memory,address, bool){
    //     voter memory v = voters[msg.sender];
    //     return(v.id,v.name,v.account,v.isvoted);
    // }


    

    // receive() external payable{
    //     voters.push(payable(msg.sender));
    // }

    // function getContractAddress() public view returns(address){
    //     return  address(this);
    // }
    // function getbalance(address account) public view returns(uint){
        
    //     return address(account).balance;
    // }
}