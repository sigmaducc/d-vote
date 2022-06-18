const connect = () =>{
    let provider = window.ethereum;
    if(typeof provider !=  'undefined'){
      console.log("I can See Metamask")
      provider.request({
        method:'eth_requestAccounts'}).then(accounts=>{
          console.log(accounts);
        }).catch(err=>{
          console.log(err);
        });
    }
    else{alert("Please Install Metamask!")}
  }