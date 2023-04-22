async function main() {
  // for getting the instance of our contract
  const DNFT = await ethers.getContractFactory("DNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const dNFT = await DNFT.deploy();
  console.log("Contract deployed to address:", dNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
