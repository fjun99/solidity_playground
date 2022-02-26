import { expect } from "chai";
import { ethers } from "hardhat";

describe("BalanceWithEvent", function () {
  it("Should update and emit event", async function () {
    const signers = await ethers.getSigners()

    const Balance = await ethers.getContractFactory("BalanceWithEvent");
    const balance = await Balance.deploy();
  
    await balance.deployed();

    await expect(balance.update(100))
    .to.emit(balance, 'Updated')
    .withArgs(await signers[0].getAddress(),100)

  });
});
