import request from '@/service'

// 获取可选图片列表信息展示
export function getOptionalImgList() {
    return request({
        url: 'http://localhost:5050/findoptionalImg',
        method: 'get'
    })
}
// 修改可选图片列表isOptioned数据
export function changeIsOptioned(param, id) {
    return request({
        url: 'http://localhost:5050/findoptionalImg/' + id,
        method: 'patch',
        data: {
            isOptioned: param
        }
    })
}

// 重置可选图片列表中isOptioned数据
export function resetIsOptioned(id) {
    return request({
        url: 'http://localhost:5050/findoptionalImg/' + id,
        method: 'patch',
        data: {
            isOptioned: false
        }
    })
}
