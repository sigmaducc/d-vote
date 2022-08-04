import React from "react";
import { blockchain } from "../../images";

const Blockchain = () => {
  return (
    <div className="gradient-bg-blockchain w-full flex justify-center items-center ">
      <div className="max-w-[1800px] flex1 flex lg:flex-row flex-col items-center justify-between px-6 md:p-20">
        <img src={blockchain} className="max-h-72" alt="Blockchain" />
        <div className="pl-20 text-lg text-slate-200">
          <div className="text-5xl py-2 text-gradient">What is Blockchain?</div>
          <div className="mt-8  text-slate-200 font-light w-11/12 text-lg whitespace-wrap">
            Blockchain is a system of recording information in a way that makes
            it difficult or impossible to change, hack, or cheat the system.
            <br />
            <br />A blockchain is essentially a digital ledger of transactions
            that is duplicated and distributed across the entire network of
            computer systems on the blockchain. Each block in the chain contains
            a number of transactions, and every time a new transaction occurs on
            the blockchain, a record of that transaction is added to every
            participant's ledger. The decentralised database managed by multiple
            participants is known as Distributed Ledger Technology (DLT).
            {/* <br />
            <br />
            Blockchain is a type of DLT in which transactions are recorded with
            an immutable cryptographic signature called a hash. */}
            {/* <br />
            <br />
            The Properties of Distributed Ledger Technology (DLT) | Blockchain
            Explained | Euromoney Learning This means if one block in one chain
            was changed, it would be immediately apparent it had been tampered
            with. If hackers wanted to corrupt a blockchain system, they would
            have to change every block in the chain, across all of the
            distributed versions of the chain.
            <br />
            <br />
            Blockchains such as Bitcoin and Ethereum are constantly and
            continually growing as blocks are being added to the chain, which
            significantly adds to the security of the ledger. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockchain;
