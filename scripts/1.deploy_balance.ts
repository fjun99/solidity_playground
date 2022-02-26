import { ethers } from "hardhat";

async function main() {

  const Balance = await ethers.getContractFactory("Balance");
  const balance = await Balance.deploy();

  await balance.deployed();

  console.log("Balance deployed to:", balance.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
