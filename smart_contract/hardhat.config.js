// https://eth-goerli.g.alchemy.com/v2/UDlqj24g6RrVPQ5SQyCLtMhhnXhHaXaH

require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/UDlqj24g6RrVPQ5SQyCLtMhhnXhHaXaH',
      accounts: ['d8243c2ce6712b549d6c6bbefeee2d233f87ee04122ea1e7b1fe2674d8a8f70c'],
    },
  },
};