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


Response data example:


```javascript
{
    "status": 200,
    "message": "OK",
    "data": [
        {
            "month": 9,
            "day": 23,
            "year": 2018,
            "totalCount": 7453
        },
        {
            "month": 9,
            "day": 22,
            "year": 2018,
            "totalCount": 3176
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
| topic         | query  | ✘        | ✘       | string   |
