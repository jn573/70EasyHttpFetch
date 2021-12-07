class EasyHTTP {
    async get(url){
        const response = await fetch(url)

        const resData = await response.json()
        return resData
    }

    // post(url,data) {
    //     return new Promise((resolve, reject) =>
    //     {
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify()
    //         })
    //             .then(res => res.json)
    //             .then(data => resolve(data))
    //             .catch(err => reject(err))
    //     }
    // )
    // }
}

