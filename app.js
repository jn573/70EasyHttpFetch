const http = new EasyHTTP()

const data = {
    "id": 2,
    name: 'Evan Badass',
    username: 'Glock19x',
    email: 'cuteness@gmail.com'
}

// http.get('users.json', data)
//     .then(data => console.log(data))
//     .then(err => console.log(err))

http.post('users.json', data)
    .then(data => console.log(data))
    .then(err => console.log(err))

// http.get('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .then(err => console.log(err))

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .then(err => console.log(err))

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .then(err => console.log(err))

// http.delete('https://jsonplaceholder.typicode.com/users/2')
//     .then(data => console.log(data))
//     .then(err => console.log(err))

