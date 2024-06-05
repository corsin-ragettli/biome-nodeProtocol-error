import querystring from 'querystring';


const test = querystring.encode({
    hello: 'world',
    isTrue: false,
})

console.log(test);