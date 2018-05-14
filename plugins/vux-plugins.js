import Vue from 'vue'
import { BusPlugin, AjaxPlugin, TransferDom, WechatPlugin, LoadingPlugin, ToastPlugin, AlertPlugin, ConfirmPlugin } from 'vux'

Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(WechatPlugin)
Vue.use(BusPlugin)

Vue.directive('transfer-dom', TransferDom)