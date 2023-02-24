import { ethers } from "hardhat";
import * as dotenv from 'dotenv';
import { Ballot__factory } from "../typechain-types";
dotenv.config();

async function main() {
  // Get command line args
  console.log("Getting comand line args");
  const args = process.argv;
  const argOptions = args.splice(2);
  if (argOptions.length < 2) throw new Error("Missing parameters: contract address, voter address");
  console.log(`Args: ${argOptions}`);

  // Get addresses
  console.log("Getting addresses");
  const contractAddress = argOptions[0];
  const voterAddress = argOptions[1];
  console.log(`Contract address: ${contractAddress}`);
  console.log(`Voter address: ${voterAddress}`);
  
  // Get provider
  console.log("Getting provider");
  const provider = ethers.getDefaultProvider("goerli");
  console.log(`Provider: ${provider.network.name}`);

  // Get mnemonic
  console.log("Getting mnemonic");
  const mnemonic = process.env.MNEMONIC;
  if (!mnemonic || mnemonic.length <= 0) throw new Error("Missing mnemonic");
  console.log("Mnemonic set");

  // get wallet
  console.log("Getting wallet");
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  console.log(`Wallet address: ${wallet.address}`);

  // Get you signer from .env
  console.log("Connecting to wallet");
  const signer = wallet.connect(provider);
  console.log("Wallet connected");

  // Get contract
  console.log("Building from contract");
  const ballotFactory = new Ballot__factory(signer);
  const ballot = ballotFactory.attach(contractAddress);
  console.log("Contract built");

  // Give right to vote
  console.log("Giving voter right to vote");
  await ballot.giveRightToVote(voterAddress);
  console.log(`Voter ${voterAddress} now has the right to vote`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});