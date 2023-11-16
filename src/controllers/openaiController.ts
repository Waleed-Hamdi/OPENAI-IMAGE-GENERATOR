import express from "express";
import dotenv from 'dotenv';
import OpenAI from 'openai';


dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});



const generateImage = async (req: express.Request, res: express.Response) => {

  const { prompt, size} = req.body;

 const imageSize = size === 'small' ? '256x256': size === 'medium' ? '512x512' : '1792x1024' ; 

  try {

    await openai.images.generate(	
        {
          model: "dall-e-3",
           prompt: prompt,
            n: 1,
            size: imageSize
        
        }).then((data) => {
          res.send(data.data[0].url);
        });
        
  } catch (error) {
    console.log(error);
  }
};

export default generateImage;
