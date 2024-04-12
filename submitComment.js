
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const { Script } = require('vm');

// Configure the transporter using your Gmail account credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'magsayokennyrey30@gmail.com',
    pass: 'iloveuall14'
  }
});

// HTTPS function to handle form submission
exports.submitComment = functions.https.onRequest(async (req, res) => {
  const { name, comment } = req.body;

  try {
    // Send email
    await transporter.sendMail({
      from: 'yourgmail@gmail.com',
      to: 'magsayokennyrey30@gmail.com',
      subject: 'New Comment from Your Portfolio',
      text: `Name: ${name}\nComment: ${comment}`
    });

    res.status(200).send('Comment submitted successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error submitting comment. Please try again later.');
  }
});


