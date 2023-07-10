// SPDX-License-Identifier: MIT 
pragma solidity >=0.5.8;

contract DocumentRegistry {
  mapping(bytes32 => bool) private documents;

  function storeDocument(bytes32 hash) public {
    documents[hash] = true;
  }

  function verifyDocument(bytes32 hash) public view returns (bool) {
    return documents[hash];
  }
}