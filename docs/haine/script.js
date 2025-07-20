const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'duomi60pe',
  api_key: 'API_KEY_TAU',
  api_secret: 'API_SECRET_TAU'
});
const url= cloudinary.url('https://res.cloudinary.com/duomi60pe/image/upload/v1752220737/lv_vselmc.avif') 
cloudinary.uploader.upload('poza_ta.jpg')
  .then(result => console.log("URL:", result.secure_url))
  .catch(error => console.error(error));
