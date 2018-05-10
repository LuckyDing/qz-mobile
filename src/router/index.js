import Vue from 'vue'
import Router from 'vue-router'

import DySearch from '@/components/common/DySearch'
import DyPanel from '@/components/common/DyPanel'
// 商户中心
import MerchantCenter from '@/components/Merchant/MerchantCenter'
import Withdraw from '@/components/Merchant/Withdraw'
import WithdrawSuccess from '@/components/Merchant/WithdrawSuccess'
import MerchantGoods from '@/components/Merchant/MerchantGoods'
import MerchantOrders from '@/components/Merchant/MerchantOrders'
import MerchantOrderSearch from '@/components/Merchant/MerchantOrderSearch'
import MerchantOrderInfo from '@/components/Merchant/MerchantOrderInfo'
import MerchantApply from '@/components/Merchant/MerchantApply'
import MerchantArea from '@/components/Merchant/MerchantArea'
import MerchantApplyDetail from '@/components/Merchant/MerchantApplyDetail'
import MerchantApplySuccess from '@/components/Merchant/MerchantApplySuccess'
import MerchantApplyProgress from '@/components/Merchant/MerchantApplyProgress'
import MerchantApplyCity from '@/components/Merchant/MerchantApplyCity'
import MerchantApplyCitySuccess from '@/components/Merchant/MerchantApplyCitySuccess'
// 用户登录注册
import Login from '@/components/Login'
import Register from '@/components/Register'
import ChangePassword from '@/components/ChangePassword'
// 商城
import Menu from '@/components/Menu.vue'
import Index from '@/components/Index.vue'
import Goods from '@/components/Goods.vue'
import SaleInstructions from '@/components/SaleInstructions'
import OrderPay from '@/components/OrderPay'
import PaySuccess from '@/components/PaySuccess'
import Order from '@/components/Order'
import RefundsApply from '@/components/RefundsApply'
import RefundsSuccess from '@/components/RefundsSuccess'
import Refunds from '@/components/Refunds'
import AfterSaleApply from '@/components/AfterSaleApply'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/DySearch',
      name: 'DySearch',
      component: DySearch
    },
    {
      path: '/DyPanel',
      name: 'DyPanel',
      component: DyPanel
    },
    {
      path: '/MerchantCenter',
      name: 'MerchantCenter',
      component: MerchantCenter
    },
    {
      path: '/Withdraw',
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/WithdrawSuccess',
      name: 'WithdrawSuccess',
      component: WithdrawSuccess
    },
    {
      path: '/MerchantGoods',
      name: 'MerchantGoods',
      component: MerchantGoods
    },
    {
      path: '/MerchantOrders/:pageType',
      name: 'MerchantOrders',
      component: MerchantOrders
    },
    {
      path: '/MerchantOrderSearch',
      name: 'MerchantOrderSearch',
      component: MerchantOrderSearch
    },
    {
      path: '/MerchantOrderInfo',
      name: 'MerchantOrderInfo',
      component: MerchantOrderInfo
    },
    {
      path: '/MerchantApply',
      name: 'MerchantApply',
      component: MerchantApply
    },
    {
      path: '/MerchantArea',
      name: 'MerchantArea',
      component: MerchantArea
    },
    {
      path: '/MerchantApplyDetail',
      name: 'MerchantApplyDetail',
      component: MerchantApplyDetail
    },
    {
      path: '/MerchantApplySuccess',
      name: 'MerchantApplySuccess',
      component: MerchantApplySuccess
    },
    {
      path: '/MerchantApplyProgress',
      name: 'MerchantApplyProgress',
      component: MerchantApplyProgress
    },
    {
      path: '/MerchantApplyCity',
      name: 'MerchantApplyCity',
      component: MerchantApplyCity
    },
    {
      path: '/MerchantApplyCitySuccess',
      name: 'MerchantApplyCitySuccess',
      component: MerchantApplyCitySuccess
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/ChangePassword',
      name: 'ChangePassword',
      component: ChangePassword
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu,
      children: [
        {
          path: 'Index',
          name: 'Index',
          component: Index
        }
      ]
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/SaleInstructions',
      name: 'SaleInstructions',
      component: SaleInstructions
    },
    {
      path: '/OrderPay',
      name: 'OrderPay',
      component: OrderPay
    },
    {
      path: '/PaySuccess',
      name: 'PaySuccess',
      component: PaySuccess
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/RefundsApply',
      name: 'RefundsApply',
      component: RefundsApply
    },
    {
      path: '/RefundsSuccess',
      name: 'RefundsSuccess',
      component: RefundsSuccess
    },
    {
      path: '/Refunds',
      name: 'Refunds',
      component: Refunds
    },
    {
      path: '/AfterSaleApply',
      name: 'AfterSaleApply',
      component: AfterSaleApply
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
