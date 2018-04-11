import Vue from 'vue'
import Router from 'vue-router'
import MyTree from './views/MyTree'
import MyCascader from './views/MyCascader'
import MyTable from './views/MyTable'

Vue.use(Router); 

export default new Router({
    routes : [
	  	{ 
	  		path: '/my-tree', 
	  		component: MyTree
	  	},
	  	{ 
	  		path: '/my-cascader', 
	  		component: MyCascader
	  	},
	  	{ 
	  		path: '/my-table', 
	  		component: MyTable
	  	}
    ]
})