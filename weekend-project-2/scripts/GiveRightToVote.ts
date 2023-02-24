import { ethers } from "hardhat";
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  // Get command line args
  const args = process.argv;
  const argOptions = args.splice(2);
  if (argOptions.length < 2) throw new Error("Missing parameters: contract address, voter address");
  
  // Get addresses
  const contractAddress = argOptions[0];
  const voterAddress = argOptions[1];
  
  // Get provider
  const provider = ethers.getDefaultProvider("goerli");

  // Get mnemonic
  const mnemonic = process.env.MNEMONIC;
  if (!mnemonic || mnemonic.length <= 0) throw new Error("Missing mnemonic");

  // get wallet
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);

  // Get you signer from .env
  const signer = wallet.connect(provider);

  // Get contract
  const balletContract = await ethers.getContractFactory('Ballot');
  const ballot = balletContract.attach(contractAddress);

  // Give right to vote
  await ballot.giveRightToVote(voterAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});