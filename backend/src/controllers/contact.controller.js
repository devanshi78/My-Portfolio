export const contactForm = (req,res) => {
    const { name, email, message } = req.body;

    if(!name || !email || !message){
        return res.status(400).json({
            success : false,
            message : "All fields are required"
        });
    }

    return res.status(200).json({
        success : true,
        message : "Message received Successfully.",
        data : {name,email,message}
    });
};