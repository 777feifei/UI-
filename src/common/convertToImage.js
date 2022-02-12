import html2canvas from "html2canvas";

export default class convertToImage {
    constructor(element,imageType,imageName) {
    //   super() 继承的时候会必须要执行该函数，否则会报错
    //   useCORS 截图包括img图像截图，必须设置
    html2canvas(element, { useCORS: true })
        .then(canvas => {
          let dataURL = canvas.toDataURL(imageType);
          let creatDom = document.createElement("a");
          document.body.appendChild(creatDom);
          creatDom.href = dataURL;
          creatDom.download = imageName;
          creatDom.click();
        }).catch( err => {
            alert('图片生成失败')
        })
    }
}