import { ethers } from "hardhat"
import { ArrayExample } from "../typechain"

async function main() {

    //deploy every time
    const ArrayExample = await ethers.getContractFactory("ArrayExample")
    const contract:ArrayExample = await ArrayExample.deploy()
    await contract.deployed()
    console.log("ArrayExample deployed to:", contract.address)
  
    const signers = await ethers.getSigners();

    await contract.f();

}
  
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
