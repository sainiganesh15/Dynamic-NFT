const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmZDU0NWRlLTZhODEtNDI5Mi1hODE2LWM5NmNjZDA3OWE0NSIsImtleSI6InF4Nm56Z3hwIiwiaWF0IjoxNjc4ODYyNjkwfQ.yMyIBPPdD9Blrd-MSl2cECYejjzQtyzUuMEaYjeCQSI"

// creating the instance of Revise and saving it into the revise variable
const revise = new Revise({auth : AUTH_TOKEN});

const API = async function(){
    const options = [
        {
            mood: 'Angry',
            image: 'https://ipfs.io/ipfs/QmYkA9TMGeb9CJ4QV7ngJgBQWDZGqpebTSvXuQWXPcXobh?filename=AngryShn.jpg'
        },
        {
            mood: 'Shy',
            image: 'https://ipfs.io/ipfs/QmZECa7MJPihnGUv1GEWqaYgnpzVzEECcT85ra4bxzjc8f?filename=ShyShn.jpg'
        },
        {
            mood: 'Denying',
            image: 'https://ipfs.io/ipfs/QmXZbpJsuWKM9Ctg8a4nhxviWJGqqeH96i8SMrSX8gkEGZ?filename=DenyingShn.jpg'
        },
        {
            mood: 'Loving',
            image: 'https://ipfs.io/ipfs/QmR5CA4TRb68UkiWz4xMvQoWpbgG49cowoUvyjcBXNbzmd?filename=lovingShn.png'
        }
    ]
    // we can return a random variable from there for that we can make use of math random function and generate a random number b/w 1 to 4
    const randomIndex = Math.floor(Math.random() * 4)
    return options[randomIndex]
}

// As we r not running the server there should be something that should be keep running and update the mood of Shinchan

async function run() {
    revise
      .every('2m')
      .listenTo(API)
      .start(async (data) => {
        const prajwal = await revise.fetchNFT(
          '_add your nft id here',
        )
  
        revise
          .nft(prajwal)
          .setProperty('mood', data.mood)
          .setImage(data.image)
          .save()
  
        console.log('Curernt mood of Shinchan is', data.mood)
      })
  }
  
  run()