export const debounce = {
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