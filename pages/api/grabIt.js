let grabity = require("grabity");
export default (req, res) => {
  if (req.method === 'POST') {
      fetch(req.body.url, {
          method:"GET",
          headers: {
              "Content-Type": "application/json"
          }
      })
          .then(response => response.json())
          .then(data => {
              for (let i = 0; i < 2; i++) {
                  fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`, {
                      method: "GET",
                      headers: {
                          "Content-Type": "application/json"
                      }
                  }).then(response => response.json())
                      .then(data => {
                          res.setHeader('Content-Type', 'application/json');
                          res.end(JSON.stringify({ response: data }))
                      })
                      .catch(err => console.log(err))
              }
          })
          .catch(err => console.log(err))
        // grabity.grabIt(req.body.url).then(function(val){
        //     res.setHeader('Content-Type', 'application/json');
        //     res.end(JSON.stringify({ response: val }))
        // }).catch(function(err){
        //     res.setHeader('Content-Type', 'application/json');
        //     res.end(JSON.stringify({ response: 'Something broke' }))
        // });
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ response: 'Invalid Request Method' }))
  }
}
