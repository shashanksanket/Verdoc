import Web3 from 'web3';

export default {
  data() {
    return {
      web3: null,
    };
  },
  created() {
    this.initWeb3();
  },
  methods: {
    initWeb3() {
      if (typeof window.ethereum !== 'undefined') {
        this.web3 = new Web3(window.ethereum);
        this.enableMetaMask();
      } else {
        console.error('MetaMask not found');
      }
    },
    async enableMetaMask() {
      try {
        await window.ethereum.enable();
        console.log('Connected to MetaMask');
        // You can now use web3 and interact with the Ethereum blockchain
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    },
  },
};
