// 原理：在持续触发事件时，在一定时间内只调用一次函数，，如果在规定时间内，再次触发此事件，则直接忽略不管。
export default {
  inserted(el, delay) {
    Doms.push(el) // 使用el这个dom对象
    el.addEventListener('click', () => {
      // 禁用这个指令的DOM结构点击事件
      Doms.forEach(item => {
        item.style.pointerEvents = 'none';
      });
      setTimeout(() => {
        // 启动这个指令的DOM结构点击事件
        Doms.forEach(item => {
          item.style.pointerEvents = 'auto';
        });
      }, delay.value || 1000); // 默认1秒
    });
  }
}