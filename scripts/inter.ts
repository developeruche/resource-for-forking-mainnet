require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

// import * as dotenv from "dotenv";

// import IMultiSig from "../typechain-types/Imultisig.sol"

async function main() {
  const _value = ethers.utils.parseEther("1");

  const CONTRACTADDRESS = "0x6e828b59fc799b6ef92e42d2f39e438a7477f469";
  const MULTISIG = await ethers.getContractAt("IMultiSig", CONTRACTADDRESS);

  let [valid1, valid2] = await ethers.getSigners();

  const bal = await MULTISIG.contractBalance();
  console.log("contractBalance", bal);

  
  let approval = "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C";
  await helpers.impersonateAccount(approval);
  const impersonatedSigner = await ethers.getSigner(approval);


//   Making the withdrawal waiting for approval
  await (
    await MULTISIG.connect(impersonatedSigner).withdrawEther(_value)
  ).wait();
  let impBal = await impersonatedSigner.getBalance();
  console.log("WITHDRAWER BALANCE", impBal);


// getting approvals from valid address
const validAddress = [
                      ,         
                      "0xB632cAf3119860599ce162Fad8753fc4198037b4",         
                      "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C",         
                      "0x85f20a6924A61904AB44243C7e2c771B3bE46734",         
                      "0x924843c0c1105b542c7e637605f95F40FD07b4B0",         
                      "0x2DBdd859D9551b7d882e9f3801Dbb83b339bFFD7",         
                      "0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf",         
                      "0x12896191de42EF8388f2892Ab76b9a728189260A",
                    ]; 

// This are the approving address
let approver1 = "0xB632cAf3119860599ce162Fad8753fc4198037b4";
let approver2 = "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C";
let approver3 = "0x85f20a6924A61904AB44243C7e2c771B3bE46734";
let approver4 = "0x924843c0c1105b542c7e637605f95F40FD07b4B0";
let approver5 = "0x2DBdd859D9551b7d882e9f3801Dbb83b339bFFD7";
let approver6 = "0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf";
let approver7 = "0x12896191de42EF8388f2892Ab76b9a728189260A";
let approver8 = "0x20497F37a8169c8C9fA09411F8c2CFB7c90dE5d1";


// Creating the imposter
await helpers.impersonateAccount(approver1);
const impersonatedSigner1 = await ethers.getSigner(approver1);

await helpers.impersonateAccount(approver2);
const impersonatedSigner2 = await ethers.getSigner(approver2);

await helpers.impersonateAccount(approver3);
const impersonatedSigner3 = await ethers.getSigner(approver3);

await helpers.impersonateAccount(approver4);
const impersonatedSigner4 = await ethers.getSigner(approver4);

await helpers.impersonateAccount(approver5);
const impersonatedSigner5 = await ethers.getSigner(approver5);

await helpers.impersonateAccount(approver6);
const impersonatedSigner6 = await ethers.getSigner(approver6);

await helpers.impersonateAccount(approver7);
const impersonatedSigner7 = await ethers.getSigner(approver7);

await helpers.impersonateAccount(approver8);
const impersonatedSigner8 = await ethers.getSigner(approver8);



// Now making the approval
await (
  await MULTISIG.connect(impersonatedSigner1).Approve(8)
).wait();

let impBal1 = await impersonatedSigner1.getBalance();
console.log("--1", impBal1);

// await (
//   await MULTISIG.connect(impersonatedSigner2).Approve(8)
// ).wait();

let impBal2 = await impersonatedSigner2.getBalance();
console.log("--2", impBal2);

await (
  await MULTISIG.connect(impersonatedSigner3).Approve(8)
).wait();

let impBal3 = await impersonatedSigner3.getBalance();
console.log("--3", impBal3);

await (
  await MULTISIG.connect(impersonatedSigner4).Approve(8)
).wait();

let impBal4 = await impersonatedSigner4.getBalance();
console.log("--4", impBal4);

await (
  await MULTISIG.connect(impersonatedSigner5).Approve(8)
).wait();

let impBal5 = await impersonatedSigner5.getBalance();
console.log("--5", impBal5);

await (
  await MULTISIG.connect(impersonatedSigner6).Approve(8)
).wait();

let impBal6 = await impersonatedSigner6.getBalance();
console.log("--6", impBal6);

// await (
//   await MULTISIG.connect(impersonatedSigner6).Approve(8)
// ).wait();

let impBal7 = await impersonatedSigner7.getBalance();
console.log("--7", impBal7);

await (
  await MULTISIG.connect(impersonatedSigner7).Approve(8)
).wait();

let impBal8 = await impersonatedSigner8.getBalance();
console.log("--8", impBal8);



let impBalNew = await impersonatedSigner.getBalance();
console.log("CURRENT BALANCE OF THE IMPERSONNATOR", impBalNew);
console.log("CURRENT CONTRACT BAL", bal);
}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});