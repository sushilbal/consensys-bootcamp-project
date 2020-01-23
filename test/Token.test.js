const Token = artifacts.require('Token');
//const BN = web3.utils.BN;

contract('Testing the Token Deployemnt' ,()=>{
    let token;
    const name= "ConsenSys Token";
    const symbol= "ConsenSys";
    const totalSupply='10';
    const decimals='18';
    beforeEach(async ()=>{
        token= await Token.deployed();
    });

    it('Verify the contract is deployed in an address',async ()=>{
        assert(token.address !== '');
    });

    it('Verify the token has a name ' , async ()=>{
        const _name = await token.name();
        assert(_name === name);
    });

    it('Verify that the token has decimals', async()=>{
        var _decimals = await token.decimals();
        assert(_decimals.toString() === decimals);
    })

    it('Verify that the token has a total supply', async()=>{
        var _totalSupply = await token.totalSupply();
        assert(_totalSupply.toString() === totalSupply);
    })

    it('Verify that the token has a symbol', async()=>{
        const _symbol = await token.symbol();
        assert(_symbol === symbol);
    })

});