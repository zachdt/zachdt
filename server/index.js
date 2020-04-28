const express = require('express')
const Firestore = require('@google-cloud/firestore')

const fs = require('fs')
const postDir = './posts/'

const db = new Firestore({
  projectId: 'zachdt',
  keyFilename: './gcp-key.json'
})

const app = express()

//get all posts
app.get('/api/', (req, res) => {
  console.log('--> GET req for all blog posts')
  res.header("Access-Control-Allow-Origin", "https://zachdt.com")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  let postArr = []

  db.collection('posts').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log('-->', doc.id, ':', doc.data());
      postArr.push({id: doc.id, data: doc.data()})
    });
    res.send(postArr)
    console.log(`GET req sucessful <---`)
  })
  .catch((err) => {
    console.log('--> ', err);
  })
});

//get the most recent post
app.get('/api/recent/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://zachdt.com")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  console.log('--> GET req for most recent post')
  db.collection('posts').orderBy("index", "desc").get()
    .then((snapshot) => {

      if(!snapshot.empty) {
        let recent = snapshot.docs[0]
        console.log('-->', recent.id)
        let string = recent.id
        res.send(string)
        
        console.log(`GET req sucessful <---`)
      }

    })
    .catch((err) => {
      console.log('--> ', err)
    })
})

//get a specific post
app.get('/api/:path', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://zachdt.com")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  console.log('--> GET req for post', req.params.path)

  db.collection('posts').doc(req.params.path).get()
  .then((doc) => {
    if (!doc.exists) {
      res.send(null)
      console.log('--> post does not exist!')
    } else {
      console.log('-->', doc.id, ':', doc.data());
      res.send(doc.data())
      console.log(`GET req sucessful <---`)
    }
  })
  .catch((err) => {
    console.log('--> ', err);
  })
})

app.post('/update/', (req, res) => {
  console.log('---> UPDATING POSTS ...')
  let mar = 0
  fs.readdir(postDir, (err, files) => {
    files.forEach(file => {
      let fileName = file.slice(0, -3)
      console.log('/ ' + fileName)
      db.collection('posts').doc(fileName).update({
          content: fs.readFileSync(postDir + '/' + file).toString()
        })
        .then(() => console.log('Updated Complete for ' + file))
        .catch(err => console.log('---> ', err))
      mar++
    })
    console.log('Updated ' + mar + ' files! <-----')
    res.send('Updated ' + mar + ' file(s)!')
  })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('--> zachdt.com API running on port: ', port);
});