import request from "axios"
export function getFood() {
    return request({
        url: 'http://localhost:5050/food',
        method: 'GET',
    })
}