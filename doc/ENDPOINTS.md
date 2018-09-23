# Endpoints


## Table of Contents

* [GET /health](#get-health)
* [GET /api/v1/statistics](#get-statistics)
* [GET /api/v1/tweets](#list-tweets)


### GET /health

<a name="get-health"></a>

This endpoint is public and without API prefix.

### GET /api/v1/statistics

<a name="get-statistics"></a>

| Parameter     | In     | Required | Default |  Type    |
|---------------|--------|----------|---------|----------|
| topic         | query  | ✔        | ✘       | string   |


##### Example

Request: `GET ./api/v1/statistics?topic=Lady Gaga`

Response:

```javascript
{
    "status": 200,
    "message": "OK",
    "data": [
        {
            "month": 9,
            "day": 23,
            "year": 2018,
            "tweetsCount": 1743
        },
        {
            "month": 9,
            "day": 22,
            "year": 2018,
            "tweetsCount": 3176
        }
    ]
}
```

### GET /api/v1/tweets

<a name="list-tweets"></a>

| Parameter     | In     | Required | Default |  Type    |
|---------------|--------|----------|---------|----------|
| limit         | query  | ✘        | 20      | number   |
| offset        | query  | ✘        | 0       | number   |
| language      | query  | ✘        | ✘       | string   |
| topic         | query  | ✘        | ✘       | string   |

##### Notes

The total count of tweets is set on response 'x-total-count' header.

##### Example

Request: `GET ./api/v1/tweets?topic=Esports&language=en&limit=2`

Response:

```javascript
{
    "status": 200,
    "message": "OK",
    "data": [
        {
            "_id": "5ba641015960027f2839e0f1",
            "tweetId": "1043489463186468900",
            "topic": "Esports",
            "userId": "825789374486999000",
            "createdAt": "2018-09-22T13:17:29.000Z",
            "scrapedAt": "2018-09-22T13:17:53.369Z",
            "favoriteCount": 0,
            "retweetCount": 201,
            "language": "en",
            "text": "RT @CrystalKM: In a world of esports and high multiplayer demand, it’s so awesome to see games like God of War and Spider-Man become so suc…",
            "__v": 0
        },
        {
            "_id": "5ba641015960027f2839e0f5",
            "tweetId": "1043489400288493600",
            "topic": "Esports",
            "userId": "18051104",
            "createdAt": "2018-09-22T13:17:14.000Z",
            "scrapedAt": "2018-09-22T13:17:53.370Z",
            "favoriteCount": 0,
            "retweetCount": 0,
            "language": "en",
            "text": "@SPACEOW @HPforGamers Great to see esports pros getting proper support on more than just things that directly affec… https://t.co/GrepOUXAd9",
            "__v": 0
        }
    ]
}
```
