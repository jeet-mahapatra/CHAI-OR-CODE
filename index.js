require('dotenv').config()

const express = require("express")
const app = express();

const port = 4000

const github = {
    "login": "jeet-mahapatra",
    "id": 149883188,
    "node_id": "U_kgDOCO8JNA",
    "avatar_url": "https://avatars.githubusercontent.com/u/149883188?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jeet-mahapatra",
    "html_url": "https://github.com/jeet-mahapatra",
    "followers_url": "https://api.github.com/users/jeet-mahapatra/followers",
    "following_url": "https://api.github.com/users/jeet-mahapatra/following{/other_user}",
    "gists_url": "https://api.github.com/users/jeet-mahapatra/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jeet-mahapatra/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jeet-mahapatra/subscriptions",
    "organizations_url": "https://api.github.com/users/jeet-mahapatra/orgs",
    "repos_url": "https://api.github.com/users/jeet-mahapatra/repos",
    "events_url": "https://api.github.com/users/jeet-mahapatra/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jeet-mahapatra/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Jeet Mahapatra ",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Exploring New Things.....\r\n",
    "twitter_username": null,
    "public_repos": 17,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-11-04T13:40:05Z",
    "updated_at": "2024-11-07T09:42:53Z"
  }
  

app.get("/",(req,res)=>{
    res.send(`hello World`)
})
app.get("/login",(req,res)=>{
    res.send(`Please Login `)
})
app.get("/github",(req,res)=>{
    res.json(github)
})

app.listen(process.env.PORT , () =>{
    console.log(`server is running in ${process.env.PORT}`)
})


