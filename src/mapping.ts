import { ethers } from "hardhat"

async function main() {
    
    // const exampleaddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
    const exampleaddress = '0xcafac3dd18ac6c6e92c921884f9e4176737c052c'
    const useraddress='0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
    const example = await ethers.getContractAt("MappingExample", exampleaddress)
    const user = await ethers.getContractAt("MappingUser", useraddress)

    console.log("MappingExample",example.address)
    console.log("MappingUser",user.address)

    console.log(await example.update(100))
    console.log("mapping",await example.balances('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'))

    console.log(await user.f())

    console.log("mapping2",await example.balances('0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'))

}
  
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

