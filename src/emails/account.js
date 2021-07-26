const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'feliciaroman2@gmail.com',
        subject: 'Welcome to the App',
        text: `Welcome to the App, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'feliciaroman2@gmail.com',
        subject: 'Goodbye',
        text: `Goodbye, ${name}. We are sorry to see you leave.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}