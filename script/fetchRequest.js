const baseUrl = 'http://192.168.1.94:3000/'

export const myFetch = ({
    url,
    method,
    data,
}) => {
    return new Promise((resolve, reject) => {
        if (method && method === 'POST') {
            fetch(
                baseUrl + url,
                {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }
            )
            .then(res => res.json())
            .then(res => {
                if (res.status === 0) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch(error => {
                reject(error)
            })
        } else if (method && method === 'GET') {
            fetch(baseUrl + url)
            .then(res => res.json())
            .then(res => {
                if (res.status === 0) {
                    resolve(res.message)
                } else {
                    reject(res)
                }
            })
            .catch(error => {
                reject(error)
            })
        }
    })
}