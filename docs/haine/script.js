const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'duomi60pe',
  api_key: '164132897979116',
  api_secret: 'HpvmjDxFVStTwFqkNAqUJiUtacI'
  
});

const images = [
 
];

(async function run () 

{

  for(const image of images) 
  {const result = await cloudinary.uploader.upload(image);
    console.log(`Image uploaded: ${result.secure_url}`);

  }
      

   
     
 
  
})();


