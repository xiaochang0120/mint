import request from 'axios';
export function AllList() {
    return request({
        url: 'http://localhost:5050/AllList',
        method: 'GET',
    })
}