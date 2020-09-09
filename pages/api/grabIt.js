let grabity = require("grabity");

export default async (req, res) => {
  if (req.method === 'POST') {
      let hackerArr = [];
      const response = await fetch(req.body.url);
      const data = await response.json();
      // console.log(data)
      for (let i = 0; i < req.body.count; i++) {
          const articleResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`);
          const articleData = await articleResponse.json();
          await hackerArr.push(articleData)
      }
      await hackerArr.length > 1 ? res.send(JSON.stringify({ response: hackerArr })) : null;
      // res.setHeader('Content-Type', 'application/json');


      // .then(response => response.json())
      // .then(data => {
      //     for (let i = 0; i < req.body.count; i++) {
      //         fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`, {
      //             method: "GET",
      //             headers: {
      //                 "Content-Type": "application/json"
      //             }
      //         })
      //         .then(response => response.json())
      //         .then(data => {
      //             hackerArr.push(data);
      //             // res.setHeader('Content-Type', 'application/json');
      //             // res.send(JSON.stringify({ response: hackerArr }))
      //         })
      //         .catch(err => console.log(err))
      //     }
      // })
      // .catch(err => console.log(err))
      // console.log(hackerArr);

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
