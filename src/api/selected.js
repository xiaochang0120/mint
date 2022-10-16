import request from '@/service'

// 获取轮播图列表信息展示
export function getBannerList() {
    return request({
        url: 'http://localhost:5050/findbanners',
        method: 'get'
    })
}

// 获取小话题列表数据
export function getSubtitleList() {
    return request({
        url: 'http://localhost:5050/findsubtitle',
        method: 'get'
    })
}

// 获取动态列表数据
export function getSelectedDynamicList() {
    return request({
        url: 'http://localhost:5050/findselectedDynamic',
        method: 'get'
    })
}

// 获取某动态数据
export function getSelectedDynamic(id) {
    return request({
        url: 'http://localhost:5050/findselectedDynamic/' + id,
        method: 'get'
    })
}

// 修改动态列表isFollow数据
export function changeIsFollow(param, id) {
    return request({
        url: 'http://localhost:5050/findselectedDynamic/' + id,
        method: 'patch',
        data: {
            isFollow: param
        }
    })
}

// 修改动态列表isCollection数据
export function changeIsCollection(param, id, num) {
    return request({
        url: 'http://localhost:5050/findselectedDynamic/' + id,
        method: 'patch',
        data: {
            isCollection: param,
            collectionNum: num
        }
    })
}

// 修改动态列表isSupport数据
export function changeIsSupport(param, id, num) {
    return request({
        url: 'http://localhost:5050/findselectedDynamic/' + id,
        method: 'patch',
        data: {
            isSupport: param,
            supportNum: num
        }
    })
}

// 修改对应动态的评论数commentNum
export function changeCommentNum(num, id) {
    return request({
        url: 'http://localhost:5050/findselectedDynamic/' + id,
        method: 'patch',
        data: {
            commentNum: num
        }
    })
}

// 添加动态
export function addUserDynamic(dynamic) {
    return request({
        url: 'http://localhost:5050/findselectedDynamic',
        method: 'post',
        data: dynamic
    })
}

// 修改某动态里对应的评论数组内容
export function changeSelectedDynamic(newCommentContent, id) {
    return request({
        url: 'http://localhost:5050/findselectedDynamic/' + id,
        method: 'patch',
        data: {
            commentContent: newCommentContent
        }
    })
}
