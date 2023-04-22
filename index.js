const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmZDU0NWRlLTZhODEtNDI5Mi1hODE2LWM5NmNjZDA3OWE0NSIsImtleSI6InF4Nm56Z3hwIiwiaWF0IjoxNjc4ODYyNjkwfQ.yMyIBPPdD9Blrd-MSl2cECYejjzQtyzUuMEaYjeCQSI";

// creating the instance of Revise and saving it into the revise variable
const revise = new Revise({auth : AUTH_TOKEN});

async function AddNFT(){

    const collection  =  await revise.addCollection     // addCollection method is provided by Revise
     ({
          name : "Shinchan",
          uri : "GaNaSa1502"                    //uri is very important as to fetch the meyadata of dynamic NFT, this uri will help to generate baseuri string which we r going to declare in smart contract
      })                                                // can't include special characters
                                                // base rui : https://GaNaSa1502.revise.link/

    const nft = await revise.addNFT({
        image : "https://ipfs.io/ipfs/Qmc3UzytDatJ5G8Rp6ebTU5GVjCBGT4DQUgq6DhRsXWHCr?filename=Shinchan.jpg", //!change here
        name : "shn_01",
        tokenId : '1',
        description : "All time favourite Character"
    },[
        {mood : 'Happy', stamina : 100}
    ], collection.id)

    console.log("Created NFT successfully, ID:", nft)
    
}

AddNFT()




















