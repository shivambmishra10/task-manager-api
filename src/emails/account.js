const sgMail=require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>
{
    sgMail.send(
        {
            to:email,
            from:'shivambmishra10@gmail.com',
            subject:'Thanks for joining in!',
            text:`Welcome to the app, ${name}.Let me know how you get along with the app.`
        }
    )
}
const sendCancelEmail=(email,name)=>
{
    sgMail.send(
        {
            to:email,
            from:'shivambmishra10@gmail.com',
            subject:'Cancellation of Account!',
            text:`${name} could you please tell why you cancelled the account.`
        }
    )
}
module.exports={
    sendWelcomeEmail,
    sendCancelEmail
}