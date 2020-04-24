const express = require('express')
const Firestore = require('@google-cloud/firestore')
const cors = require('cors')

const db = new Firestore({
  projectId: 'zachdt',
  keyFilename: './gcp-key.json'
})

const app = express()


app.use(cors())

app.options('*', cors())

//get all posts
app.get('/api/', (req, res) => {
  console.log('--> GET req for all blog posts')
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/")
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


//get a specific post
app.get('/api/:path', (req, res) => {
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

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log('--> zachdt.com API running on port: ', port);
});