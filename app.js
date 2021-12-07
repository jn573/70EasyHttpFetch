const http = new EasyHTTP()

function run() {
    http.get('https://jsonplaceholder.typicode.com/users')
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

const data = {
    name: 'Jimmy',
    username: 'bleh',
    email: 'me@this.com'
}

http.get('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .then(err => console.log(err))