# Endpoints


## Table of Contents

* [GET /health](#get-health)
* [GET /api/v1/tweets](#list-tweets)


### GET /health

<a name="get-health"></a>

This endpoint is public and without API prefix.


### GET /api/v1/tweets

<a name="list-tweets"></a>

| Parameter     | In     | Required | Default |  Type    |
|---------------|--------|----------|---------|----------|
| limit         | query  | ✘        | 20      | number   |
| offset        | query  | ✘        | 0       | number   |
| topic         | query  | ✘        | ✘       | string   |
