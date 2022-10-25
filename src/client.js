import * as contentful from 'contentful'

export const client = contentful.createClient({
    // space: process.env.APP_SPACE_ID,
    // accessToken: process.env.APP_ACCESS_TOKEN
    space: 'd608cqxcd02b',
    accessToken: '8-pPEMtOnQgmB8HgnmhQWdlWeRPnuXWXrj4UItYIu5A'
})