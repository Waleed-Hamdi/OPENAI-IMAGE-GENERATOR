import express from "express";


import OpenAI from 'openai';


const openai = new OpenAI({
  apiKey: "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" // This is also the default, can be omitted
});



const generateImage = async (req: express.Request, res: express.Response) => {

  const { prompt, size} = req.body;
  console.log(req.body)
 const imageSize = size === 'small' ? '256x256': size === 'medium' ? '512x512' : '1792x1024' ; 

  try {
    await openai.images.generate(	
        {
          model: "dall-e-3",
           prompt: prompt,
            n: 1,
            size: imageSize
        
        }).then((data) => {
            res.send(data.data[0].url)
        });
        
  } catch (error) {
    console.log(error);
  }
};

export default generateImage;
