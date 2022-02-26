import { ethers } from "hardhat";

async function main() {

  const Balance = await ethers.getContractFactory("BalanceWithEvent");
  const balance = await Balance.deploy();

  await balance.deployed();

  console.log("BalanceWithEvent deployed to:", balance.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
