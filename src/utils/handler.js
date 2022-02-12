// 赋值 copyToClipboard(text)
export const copyToClipboard = (text) => navigator.clipboard.writeText(text);

// 计算2个日期之间相差多少天 dayDif(new Date("2020-10-21"), new Date("2021-10-22"))
export const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

// 回到顶部 goToTop();
export const goToTop = () => window.scrollTo(0, 0);

// 校验数组是否为空 isNotEmpty([1,2])
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

// 