import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID || '6ftkr3mq',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN || 'sk9CTleyO8uLso9E5hWXMah4HRRbq0nxTznrJElTeUwWUNYR8oDnyKlCpHyZbvH5f4gyG18tNzfo7KTprttF0ewLCaMJZmPwBr8tFkOOkZLNzOFbOti86xzMyBRfu0VIjQ9wIvYdKJ61zD4l5EooIrMkfVxLmi4QzJ3GWGq8cK2B1iUjEeXt'
})

const builder = imageUrlBuilder(client)
export const urlFor= (source)=>builder.image(source);