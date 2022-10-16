// import request from '../mock/data.json'
import request from 'axios'

// 获取单餐
export function getFood() {
    return request({
        url: "http://localhost:5050/one",
        method: 'get'
    })
}
// 获取薄荷生活优选
export function getLife() {
    return request({
        url: "http://localhost:5050/two",
        method: 'get'
    })
}
// 获取流行减肥
export function getReduce() {
    return request({
        url: "http://localhost:5050/three",
        method: 'get'
    })
}
export function getHealthy() {
    return request({
        url: "http://localhost:5050/five",
        method: 'get'
    });
}
// 获取人体营养
export function getNutrition() {
    return request({
        url: 'http://localhost:5050/five',
        method: 'get'
    })
}