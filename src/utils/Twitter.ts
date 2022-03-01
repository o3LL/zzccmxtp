import {TwitterApi} from 'twitter-api-v2';
import NodeCache from 'node-cache';

const twitterClient = new TwitterApi(import.meta.env.PUBLIC_TWITTER_BEARER);
const roClient = twitterClient.readOnly;

const tweetCache = new NodeCache();

export async function getSingleTweet(id) {
    const cachedTweet = tweetCache.get(id);
    if (cachedTweet) {
        console.log('Cache hit!', id);
        return cachedTweet;
    }

    const response = await roClient.v2.singleTweet(id, {
        'expansions': ['attachments.media_keys', 'referenced_tweets.id', 'author_id', ],
        'media.fields': ['url', 'preview_image_url'],
        'tweet.fields': ['attachments', 'author_id', 'created_at', 'public_metrics', 'text', 'entities'],
        'user.fields': ['url', 'username', 'profile_image_url']
    });

    response.includes.users[0].profile_image_url = await twitterImageToLocal(response.includes.users[0].profile_image_url, id, true);
    if (response.includes?.media?.[0]?.preview_image_url) {
        response.includes.media[0].preview_image_url = await twitterImageToLocal(response.includes.media[0].preview_image_url, id, false);
    }

    tweetCache.set(id, response);
    return response;
}

async function twitterImageToLocal(url: string, id: string, isProfil: boolean) {
    const response = await fetch(url);
    const image = await response.blob();

    // TypeError [ERR_INVALID_ARG_TYPE]: The "obj" argument must be an instance of Blob. Received an instance of Blob
    return URL.createObjectURL(image);
}
