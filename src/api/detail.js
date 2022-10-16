import request from '@/service'
//增加浏览的人数
export function addPersonSee(params, id) {
  return request({
    method: 'patch',
    url: 'http://localhost:5050/foodLcl/' + id,
    data: {
      personSee: params
    }
  })
}
//增加保存套餐的人数
export function addCombo(params) {
  return request({
    method: 'post',
    url: 'http://localhost:5050/myCombo',
    data: {
      params
    }
  })
}
//拿到保存的套餐
export function getCombo() {
  return request({
    method: 'get',
    url: 'http://localhost:5050/myCombo'
  })
}
//增加保存的人数
export function addPersonSave(params, id) {
  return request({
    method: 'patch',
    url: 'http://localhost:5050/foodLcl/' + id,
    data: {
      personSave: params
    }
  })
}
