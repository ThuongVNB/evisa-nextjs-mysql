const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.USER_MAILER,
        pass: process.env.PASSWORD_MAILER,
    },
});

export const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: 'E-Vissa',
            to,
            subject,
            text,
        });
        console.log('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
