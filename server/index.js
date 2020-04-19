const express = require('express')
const Firestore = require('@google-cloud/firestore')

const db = new Firestore({
  projectId: 'zachdt',
  keyFilename: './gcp-key.json'
})

const app = express()

//get all posts
app.get('/', (req, res) => {
  console.log('--> GET req for all blog posts')

  let postArr = []

  db.collection('posts').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log('-->', doc.id, ':', doc.data());
      postArr.push([doc.id, doc.data()])
    });
    res.send(postArr)
    console.log(`GET req sucessful <---`)
  })
  .catch((err) => {
    console.log('--> ', err);
  })
});


//get a specific post
app.get('/:path', (req, res) => {
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