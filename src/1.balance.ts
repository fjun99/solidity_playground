import { ethers } from "hardhat"
import { Balance } from "../typechain"

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

async function main() {
    const signers = await ethers.getSigners()
    const contract:Balance = await ethers.getContractAt("Balance", contractAddress)

    //send transaction by every signer
    for(let i=0;i<signers.length;i++){
        await contract.connect(signers[i]).update(i*100)
    }

    //called by default signer: signers[0]
    for(let i=0;i<signers.length;i++){
        const addr = await signers[i].getAddress()
        console.log(addr,"  ",(await contract.balances(addr)).toString())
    }
}
  
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

