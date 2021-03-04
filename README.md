## Smart Contract NFT Example for Harmony One

## NFT Collectible Example

### Dependencies

1.  [yarn](https://yarnpkg.com/en/docs/install)
    - can be installed with `brew install yarn`
    
### Setting up for the first time

1. Run `yarn install` to install dependencies
1. In a terminal, run `cp dev.env .env` - please note, 
I did not take the time to setup a local blockchain with something like 
`ganache`.  
1. Install Metamask and setup a wallet with the Harmony One testnet - see
https://docs.harmony.one/home/network/wallets/browser-extensions-wallets/metamask-wallet
 I suggest using the mobile version.
1. In the `.env` file in the project, add the private key and mnemonic from your wallet.
https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-Reveal-Your-Seed-Phrase
https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key
1. You can fund your wallet by visiting https://faucet.pops.one/

### Compiling and deploying contracts

1. run `yarn truffle compile` - this will compile the contracts
to do so.
1. Run `truffle migrate --network testnet` to run migrations and deploy the contract
to testnet.
1. Run the truffle cli - `yarn truffle console --network testnet`
1. Type `ArtCollectibleToken` - this should dump the contents of the smart contract
1. Type `nft = await ArtCollectibleToken.deployed()` - we can now interact with our contract through `nft`.  
Typing `nft` will dump the entire object,
1. You will need to create a `tokenUri` for metadata and display - Example is in the project - `json/art-sample.json`
1. Now run `await nft.mint("address of recipient","image url","artist name", "tokenUri")` - this will mint the token and send it to
the intended recipient. Use your own address, and it is probably a good idea to have the image url match the metadata url.  Copy the address from
your metamask wallet, not in the `one` format.


### End result
You should able to see your NFT in Metamask mobile - you can add it to 
Metamask in Chrome but it will not render as a collectible. 
(https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-View-See-Your-Tokens-and-Custom-Tokens-in-Metamask)

Let me know if there are any issues!

