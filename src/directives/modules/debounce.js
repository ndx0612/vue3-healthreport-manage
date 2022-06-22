// 【自定义指令】v-draggable  防抖

export default {
  inserted(el, binding, vnode) {
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