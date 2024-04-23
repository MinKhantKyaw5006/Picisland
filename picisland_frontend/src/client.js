// Import the named export createClient instead of the default export
import { createClient } from '@sanity/client';  
import imageUrlBuilder from '@sanity/image-url';

// Use createClient to instantiate the client
export const client = createClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-07',
    useCdn: true,   
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
