// 【自定义指令】v-draggable  防抖
// 防抖：你不定的变换操作，只有当停止操作的时候才会发送请求

export default {
  mounted(el, binding, vnode) {
    let timer = {}
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 2000)
    })
  }
}