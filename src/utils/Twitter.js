import {TwitterApi} from 'twitter-api-v2';
const twitterClient = new TwitterApi(import.meta.env.PUBLIC_TWITTER_BEARER);
const roClient = twitterClient.readOnly;

export function getSingleTweet(id) {
    return roClient.v2.singleTweet(id, {
        'expansions': ['attachments.media_keys', 'referenced_tweets.id', 'author_id', ],
        'media.fields': ['url', 'preview_image_url'],
        'tweet.fields': ['attachments', 'author_id', 'created_at', 'public_metrics', 'text', 'entities'],
        'user.fields': ['url', 'username', 'profile_image_url']
    })
}
