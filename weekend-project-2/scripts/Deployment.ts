import { ethers } from "hardhat";
import * as dotenv from 'dotenv';
import { Ballot__factory } from "../typechain-types";
dotenv.config();

function convertStringArrayToBytes32(array: string[]) {
  const bytes32Array = [];
  for (let index = 0; index < array.length; index++) {
    bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
  }
  return bytes32Array;
}

async function main() {
  const args = process.argv;
  const proposals = args.splice(2);
  if (proposals.length <= 0)
    throw new Error("Missing parameters: proposals");
  
  const provider = ethers.getDefaultProvider("goerli");

  const mnemonic = process.env.MNEMONIC;
  if (!mnemonic || mnemonic.length <= 0)
    throw new Error("Missing mnemonic");
  
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  console.log(`Connected to the wallet address ${wallet.address}`);
  const signer = wallet.connect(provider);
  const balance = await signer.getBalance();
  console.log(`Wallet Balance: ${balance} Wei`);

  console.log("Proposals: ");
  proposals.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });
  
  console.log("Deploying Ballot contract");
  const ballotFactory = new Ballot__factory(signer);
  const ballotContract = await ballotFactory.deploy(
    convertStringArrayToBytes32(proposals)
  );
  await ballotContract.deployTransaction.wait();
  console.log(
    `The Ballot contract was deployed at the address ${ballotContract.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});