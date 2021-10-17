# Fudge dashbaord backend API

backend for the fudge dashboard

# Steps

1. Clone the repository
2. Run command 'npm install'
3. Make necessary modification in .env file
4. Give proper Database URL, Port Number etc. Considered Mongodb is already configured in the system. If not get it for mac from here https://www.mongodb.com/try/download/community

# Api's

1. {base_url}/users (method-get) -> get all users
2. {base_url}/users (method-post)-> create new user(name,image field are required)
3. {base_url}/posts (method-get) -> get all posts
4. {base_url}/posts/{user_id} (method-post)-> create new post(title,body field are required)
5. {base_url}/commments (method-get) -> get all comments
6. {base_url}/comments/{user_id}/{post_id} (method-post)-> create new comment for a post(comment field are required)
