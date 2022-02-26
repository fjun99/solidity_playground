import { ethers } from "hardhat"
import { ContractInterface } from "ethers"
import { BalanceWithEvent } from "../typechain"

async function main() {

    //deploy every time
    const Balance = await ethers.getContractFactory("BalanceWithEvent")
    const contract:BalanceWithEvent = await Balance.deploy()
    await contract.deployed()
    console.log("BalanceWithEvent deployed to:", contract.address)
  
    const signers = await ethers.getSigners()

    //send transaction by every signer
    console.log("============ 1st round update ============")
    console.log("...")

    for(let i=0;i<5;i++){
        await contract.connect(signers[i]).update(i*100)
    }

    //called by default signer: signers[0]
    console.log("============ Balance ============")
    for(let i=0;i<5;i++){
        const addr = await signers[i].getAddress()
        console.log(addr,"  ",(await contract.balances(addr)).toString())
    }

    const iface:ContractInterface = new ethers.utils.Interface(
        ["event Updated(address indexed addr, uint value)"])

    //Defination: event Updated(address indexed addr, uint value)
    const filter = contract.filters.Updated()
    let logs = await contract.queryFilter(filter, 0, "latest")
    
    console.log("============ Event logs ============")
    console.log(logs.length)
    for(let i=0;i<logs.length;i++){    
        const {blockNumber,data,topics} = logs[i]
        const event = iface.decodeEventLog("Updated", data, topics)
        console.log(event.addr,"  ",event.value.toString()," blockNumber:",blockNumber)
    }

    console.log("============ 2nd round update ============")
    console.log("...")

    for(let i=0;i<5;i++){
        await contract.connect(signers[i]).update(i*100*2)
    }

    //called by default signer: signers[0]
    console.log("============ Balance ============")
    for(let i=0;i<5;i++){
        const addr = await signers[i].getAddress()
        console.log(addr,"  ",(await contract.balances(addr)).toString())
    }

    console.log("============ Event logs ============")
    logs = await contract.queryFilter(filter, 0, "latest")
    for(let i=0;i<logs.length;i++){
        const {blockNumber,data,topics} = logs[i]
        const event = iface.decodeEventLog("Updated", data, topics)
        console.log(event.addr,"  ",event.value.toString()," blockNumber:",blockNumber)
    }

    console.log("============ Event logs sample============")
    console.log(logs[logs.length-1])
}
  
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
