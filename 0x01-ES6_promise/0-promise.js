#!/usr/bin/node
/**
*Returns a promise
*/

export default function getResponseFromAPI() {
   return new Promise((resolve, reject) => {
     resolve('Api response')
   });
}
