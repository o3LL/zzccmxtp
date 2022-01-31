// import React, { useState, useEffect } from 'react'
// import { fetchTweetAst } from 'static-tweets'
// import { Tweet } from 'react-static-tweets'

// export default function TweetAST({ tweetId }) {
//   const [data, updateData] = useState();

//   useEffect(() => {
//     const getData = async () => {
//         const ast = await fetchTweetAst(tweetId);
//         updateData(ast);
//     }
//     getData();
//   }, []);

//   return data && <Tweet id={tweetId} ast={ast.tweetAst} />
// }
