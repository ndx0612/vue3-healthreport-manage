import color from "./modules/color"
import draggable from "./modules/draggable"
import debounce from "./modules/debounce"
import waves from "./modules/waves/index"

export default function (app) {
  app.directive('draggable', draggable)
  app.directive('debounce', debounce)
  app.directive('color', color)
  app.directive('waves', waves)
}
