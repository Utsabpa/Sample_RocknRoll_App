# Rock and Roll App
This application is use to display all the artist and their songs. User can also filter the artists based on category like pop, rock.

## Instructions to run and test the application
* Required installations- 
     a-Install the node.js if not installed 
     b-Install the mongodb if not installed

* 1- For rock-and-roll  server  code->
    
    a- Create a mongodb database with name rockandroll.
    b- restore the rockandroll dump into the rockandroll mongodb database.
    c- Open the terminal Go to the project directory
    d- Run command  npm install 
    e- After npm install run the command node bin/www
    f- Now rock-and-roll  node server will start on port 3000.
    g- there are couple of api's like get the list of artists, get the list of songs on to the basis of artist name.Also there is an api to create a artist . All the details you can find on app.js file. below are the urls to check the api's 
       Example ->
      1- Get the songs list on to the basis of artist-  
         http://localhost:3000/api/songs?name=Jon Bon Jovi
         Response-
		{
            "song": {
                "_id": "5e4d9a383cffde35a33a808a",
                "name": "Jon Bon Jovi",
                "image": "https://www.thefamouspeople.com/profiles/images/jon-bon-jovi-9.jpg",
                "songs": [{
                    "name": "In These Arms",
                    "image": "https://upload.wikimedia.org/wikipedia/tr/1/1a/Bon_jovi-in_these_arms_s.jpg"
                }, {
                    "name": "Have a Nice Day",
                    "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcps-static.rovicorp.com%2F3%2FJPG_500%2FMI0001%2F933%2FMI0001933191.jpg%3Fpartner%3Dallrovi.com&f=1&nofb=1"
                }, {
                    "name": "It’s My Life",
                    "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F_rJSiOlpWe_o%2FTObmx5WpEbI%2FAAAAAAAAAPY%2FDOBBtX5Q4GA%2Fs320%2FBon%2BJovi-Its%2BMy%2BLife1.jpg&f=1&nofb=1"
                }]
            }
        }
            
      2- Get the list of artists
        http://localhost:3000/api/artists/
        Response-
		{
       "artist": [{
          "_id": "5e4d94093cffde35a33a8088",
          "name": "Justin Bieber",
          "image": "https://images-production.global.ssl.fastly.net/uploads/posts/image/53909/justin-bieber.jpg",
          "songs": [{
             "name": "All Around The World",
             "image": "https://upload.wikimedia.org/wikipedia/en/1/16/All_Around_the_World_%28Justin_Bieber_song%29.jpg"
          }, {
             "name": "All I Want Is You",
             "image": "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.freeprintableonline.com%2Fassets%2Fimage%2Fprintable%2F1238%2Fmedium%2F&f=1&nofb=1"
          }, {
             "name": "All That Matters",
             "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QW12yPM010KBjGFBitwHkgHaHa%26pid%3DApi&f=1"
          }],
          "category": "POP"
       }]
    } 
      

* 2- Rock and roll ui->
  a- Go to the rock-and-roll-ui dir
  b- Run the command npm install and bower install 
  c- After installation run the command - ember server
  d- Ember app will start on port 4200
  e-Open the browser and hit the below url
   http://localhost:4200/artists
  f- you will get the list of artists