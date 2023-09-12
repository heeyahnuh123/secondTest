import { ethers } from "hardhat";

async function main() {
    const [owner] = await ethers.getSigners();

    console.log("Deploying contract", owner.address);

    const IyanuNFT = await ethers.deployContract("IyanuNFT");

    await IyanuNFT.waitForDeployment()

    console.log("Contract deployed at", IyanuNFT.target);
};


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })