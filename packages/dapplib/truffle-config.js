require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender trip bike dash screen plastic coral light army general'; 
let testAccounts = [
"0xf643df41ef8053b4c76ba86a46d1a0dd28e0e118255a8eb35b92e904d106d945",
"0x3df6ceb025b23438423e15be3d3896ab5f07f01bb7b01b890ac2968b062eee2c",
"0x8da666fd46bcb61456fde4fb502e5a165ff0ae93cb5f277549e2b4b82bc73463",
"0x1fb1059fcfc85485061a11a9f98a6319e755c5161f5e28540eec327ed667f3ac",
"0xd5c6511f5c6a3c31f67bcba2eb64ca23784d7ecd6f53da41c93425724cd38809",
"0x5aa9928af724dd7e2fc40dae0bf9f674380b681d95f4e46d786eef6708cd75ab",
"0x43e9d32db4bbf0d25c28e59e1d61a619a761a652379caba142f9e113e6b8953b",
"0xc3326a187a24cf721e62ff983b057bbbb7655c7d18db623656b2432ff18d3af3",
"0xec6e362926a01f2641048a3a4b0783b4803a6f095df131d6b39314c32a6fc612",
"0x8f06621bb54de727e181cc24e92ae44334bf1b8d0c40d0ba340a506f46dffc30"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
