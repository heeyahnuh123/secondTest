import { ethers } from "hardhat";

async function main() {
  const [signer] = await ethers.getSigners();
  const IyanuNFT = await ethers.getContractAt(
    "IyanuNFT",
    "0x994b7E0f9310865D82d7c5D76d416d61F49c346F"
  );

  await IyanuNFT.mint(
    signer.address,
    "Qmczg2gpAEmb3nDSjyt9uTnDdXEG7DaFDJmKRLLWnX86TJ"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});