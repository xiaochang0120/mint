import request from 'axios';
export function getSort() {
    return request({
        url: 'http://localhost:5050/sort',
        method: 'GET',
    })
}