import swal from '@sweetalert/with-react'

const Metamask = () =>{
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
   else{
    swal({
      title: "Metamask wallet not found!",
      text: "Metamask is necessary to perform any opertaion on the page. ",
      icon: "https://cdn.dribbble.com/users/2574702/screenshots/6702374/metamask.gif",
      buttons: "Install Metamask!",
      dangerMode:true,
      
    }).then(()=>{
      window.open('https://metamask.io/', '_blank');
    });
    }
    // else{alert("Please Install Metamask!")}
  }

  export default Metamask;