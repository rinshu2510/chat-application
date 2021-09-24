const MyMessage =({message})=>{
    //checking if message is a text or an image

    if(message?.attachments?.length>0){
        // image
        return(
            <img 
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float :'right'}}
            />
        );

    }

    return (
        <div className='message' style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#3B2A50'}}>
        {message.text}
        </div>
    );
}

export default  MyMessage ;