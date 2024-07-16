const useSendEmail = () => {

    const sendEmail = async( email, fullname ) =>{
      try{
          const res = await fetch(`/api/gmail/send/${email}`,{
              method : "POST",
              body : JSON.stringify({ fullname }),
              headers : { "Content-Type": "application/json"},
          });
  
      }
      catch(e){
        //   toast.error(e.message);
      }
    };
    return { sendEmail };
}

export default useSendEmail;