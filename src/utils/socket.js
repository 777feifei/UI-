 let websocketUrl = "wss://wg.fxgkpt.com/hdPush?uuid="
 /** 心跳,重连机制,强制退出
  * @param {JSON} json  连接建立立即发送,如果想不发送就传' ',
  * @param {String} url  
  * @param {Function} callback 接收服务端数据时触发的回调
  * @param {Object} protocol  第二个参数 protocol 是可选的，指定了可接受的子协议。
  */

 function WS(json, url, callback) {
   this.json = json;
   this.url = url;
   //  this.protocol = typeof (protocol) == 'undefined' ? null : protocol || ''
   this.reconnect_time = 0; //重连的时间
   this.reconnect_count = 0; //重连次数
   this.is_reconnect = false; // 是否重连过  
   this.reconnect_timer; // 重连操作
   this.is_destroy = false //强制关闭
   this.last_health_time = -1; //上一次心跳时间
   this.keep_alive_timer; //心跳定时发送
   this.socket; //socket对象
   this.initWs();

   // 连接成功后的回调函数。
   this.onopen = e => {
     if (this.socket) {
       this.socket.send(json);
       this.reconnect_count = 0; //重连上把重连次数清空
       this.reconnect_time = 0; //重连的时间清空
       if (this.socket.readyState === 1) {
         //保持心跳函数 30s发送一次
         this.keep_alive_timer = setInterval(() => {
           this.keepAlive();
         }, 30000);
       }
     }
   }
 }

 //  export const WS = (websocketUrl) => {
 //    console.log('WS', websocketUrl);
 //    let ws = null;
 //    if (typeof WebSocket == "undefined") {
 //      alert("遗憾：您的浏览器不支持WebSocket");
 //    } else {
 //      // wss://wg.fxgkpt.com/hdPush?uuid=c147d6f5-fcc2-4ec1-095e-9fe2f12874e8&areaCode=3401&enterpriseId=3693
 //      ws = new WebSocket(
 //        websocketUrl +
 //        "c147d6f5-fcc2-4ec1-095e-9fe2f12874e8" +
 //        "&areaCode=3401" +
 //        "&enterpriseId=3693"
 //      );
 //      // 连接成功！
 //      ws.onopen = function () {
 //        heartCheck.start();
 //        // console.log("Socket 连接成功！")
 //        // document.write("Socket 连接成功！");
 //        // socket.send("消息发送测试(From Client)");
 //      };
 //      //收到消息事件
 //      ws.onmessage = function (msg) {
 //        console.log("this.socket", msg);
 //        heartCheck.start()
 //      };
 //      //连接关闭事件
 //      ws.onclose = function () {
 //        // document.write("Socket已关闭");
 //      };
 //      //发生了错误事件
 //      ws.onerror = function () {
 //        // document.write("Socket发生了错误");
 //      };
 //      //窗口关闭时，关闭连接
 //      window.unload = function () {
 //        ws.close();
 //      };

 //      // 心跳
 //      var heartCheck = {
 //        timeout: 30000, //每隔30秒发送心跳 
 //        severTimeout: 5000, //服务端超时时间 
 //        timeoutObj: null,
 //        serverTimeoutObj: null,
 //        start: function () {
 //          var _this = this;
 //          this.timeoutObj && clearTimeout(this.timeoutObj);
 //          this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
 //          this.timeoutObj = setTimeout(function () {
 //            //这里发送一个心跳，后端收到后，返回一个心跳消息， 
 //            //onmessage拿到返回的心跳就说明连接正常 
 //            ws.send('{"type":3}'); // 心跳包 
 //            //计算答复的超时时间 
 //            _this.serverTimeoutObj = setTimeout(function () {
 //              ws.close();
 //            }, _this.severTimeout);
 //          }, this.timeout)
 //        }
 //      }
 //    }
 //  }
