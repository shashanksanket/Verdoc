<template>
  <div>
    <h2>Upload Component</h2>
    <input type="file" @change="selectFile($event, 'upload')" />
    <button @click="uploadFile">Upload</button>
  </div>

  <div>
    <h2>Verify Component</h2>
    <input type="file" @change="selectFile($event, 'verify')" />
    <button @click="verifyFile">Verify</button>
    <p>{{ verificationStatus }}</p>
  </div>
</template>

<script>
import { create as ipfsClient } from 'ipfs-http-client';
import axios from 'axios';
import web3 from '@/web3';
import DocumentRegistryABI from '@/contracts/DocumentRegistry.json';

export default {
  data() {
    return {
      uploadedFile: null,
      verificationStatus: '',
    };
  },
  
  methods: {
    selectFile(event, type) {
      if (type === 'upload') {
        this.uploadedFile = event.target.files[0];
      } else if (type === 'verify') {
        this.verificationFile = event.target.files[0];
      }
    },
    async uploadFile() {
      console.log(this.uploadedFile);
      const documentHash = await generateSHA256Hash(this.uploadedFile);
      contract.methods.storeDocument(documentHash).send({ from: '<your Ethereum address>' })
      .on('receipt', (receipt) => {
        console.log('Document stored successfully');
        // Additional logic after storing the document
      })
      .on('error', (error) => {
        console.error('Error storing document', error);
      });
      
    },
    async verifyFile() {
      const documentHashToVerify = await generateSHA256Hash(this.uploadedFile);
      contract.methods.verifyDocument(documentHashToVerify).call()
      .then((result) => {
        if (result) {
          console.log('Document is verified');
          // Additional logic for verified document
        } else {
          console.log('Document is not verified');
          // Additional logic for unverified document
        }
      })
      .catch((error) => {
        console.error('Error verifying document', error);
      });
      const retrievedFileHash = await generateSHA256Hash(response.data);
      if (uploadedFileHash === retrievedFileHash) {
        this.verificationStatus = 'Verified';
      } else {
        this.verificationStatus = 'Not Verified';
      }
    },

    async generateSHA256Hash (file){
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const arrayBuffer = event.target.result;
          const crypto = window.crypto.subtle;
          crypto.digest('SHA-256', arrayBuffer).then((hash) => {
            const hashArray = Array.from(new Uint8Array(hash));
            const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
            resolve(hashHex);
          }).catch((error) => {
            reject(error);
          });
        };
        reader.readAsArrayBuffer(file);
      });
    }
  },
  async mounted() {
    
    
  },
};
</script>
