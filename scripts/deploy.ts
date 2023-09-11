import { ethers } from "hardhat";

async function main() {
  const IyanuNFT = await ethers.getContractFactory("IyanuNFT");
  const iyanuNFT = await IyanuNFT.deploy();

  await iyNft.deployed();

  console.log("IyanuNFT deployed to:", iyanuNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);y
  });