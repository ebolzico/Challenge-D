# Login Drixit challenge

### Instructions to run it:
1st: npm install, both api and client 
2nd: 
  In the api .env: 
      BACKEND_PORT= the port you run it
      CONNECTION_STRING= your mongo connection string
      PASSWORD= yourMongoDbPassword
      secret= yourSecret
      
  In the client .env:
      BACKEND= your local host
      
  In the "proxy" property of the client json= your local host
  
3rd: npm start both api and client

## IF YOU RUN IT MORE THAN ONCE: 
  There's a function in the 36th line in app.js, which fills the database every time it starts. If you want to run it multiple times,
  you'll need to comment that line, so that your data base won't fill with repeated data.

