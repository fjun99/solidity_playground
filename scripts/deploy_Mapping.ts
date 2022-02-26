import { ethers } from "hardhat";

async function main() {

  const MappingExample = await ethers.getContractFactory("MappingExample");
  const mappingExample = await MappingExample.deploy();

  await mappingExample.deployed();

  console.log("MappingExample deployed to:", mappingExample.address);


  const MappingUser = await ethers.getContractFactory("MappingUser");
  const mappingUser = await MappingUser.deploy();

  await mappingUser.deployed();

  console.log("MappingUser deployed to:", mappingUser.address);  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
