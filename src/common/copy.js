// import Clipboard from "clipboard";
// import {Message} from '@/utils/element'
// export default class MY_Copy {
//    constructor(btnID,textID){
//     let clipboard = new Clipboard(document.getElementById(btnID), {
//         target: function (trigger) {
//           return document.getElementById(textID);
//         },
//       });
//       console.log('clipboard',clipboard);
//       clipboard.on("success", e => {
//         Message.success("复制成功");
//         e.clearSelection() // 被复制文本是否显示背景色
//         clipboard.destroy(); // 释放内存
//       });
//       clipboard.on("error", e => {
//         Message.error("不支持复制");
//         clipboard.destroy(); // 释放内存
//       });
//    }
// }