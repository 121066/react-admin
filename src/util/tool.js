//复制文本
export const copyToClipboard = (text) => navigator.clipboard.writeText(text)
// 获取某个日期位于当年的第几天
export const dayOfYear = (date) =>
    Math.floor(
        (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24,
    )
//dayOfYear(new Date(2022,10,27))
// 将rgb颜色灰度化
export const gray = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b
// gray(50,100,150)
//解析Url中的参数
export const parseQuery = (url) => {
    let q = {}
    url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v))
    return q
}
// 筛选对象中的属性
export const pick = (obj, ...props) =>
    Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes[k]))
pick({ a: 1, b: 2, c: 3 }, 'a', 'b')
// 产生一个随机的颜色
export const randomColor = () =>
    '#' +
    Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padEnd(6, '0')
// 产生一个随机的字符串
export const randomString = () => Math.random().toString(36).slice(2)
// 去除字符串中标签
export const removeTag = (fragment) =>
    new DOMParser().parseFromString(fragment, 'text/html').body.textContent ||
    ''
