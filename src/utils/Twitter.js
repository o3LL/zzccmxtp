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

    tweetCache.set(id, response);
    return response;
}
