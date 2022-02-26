import { ethers } from "hardhat"
import { BytesExample } from "../typechain"

async function main() {

    //deploy every time
    const ArrayExample = await ethers.getContractFactory("BytesExample")
    const contract:BytesExample = await ArrayExample.deploy()
    await contract.deployed()
    console.log("ArrayExample deployed to:", contract.address)
  
    const signers = await ethers.getSigners();

    console.log(await contract.getLowByte());
    console.log(await contract.getHighByte());
    console.log(await contract.num());

    await contract.setNum('0x1234')

    console.log(await contract.getLowByte());
    console.log(await contract.getHighByte());
    console.log(await contract.num());

    const strReturnd = await contract.str()
    console.log(strReturnd)
    console.log(ethers.utils.toUtf8String(strReturnd))

    console.log("getStr",await contract.getStr())

    const input = ethers.utils.hexlify(ethers.utils.toUtf8Bytes('abcdefghijkl'))
    console.log(input)
    await contract.setStr(input)
    console.log("getStr",await contract.getStr())

}
  
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
