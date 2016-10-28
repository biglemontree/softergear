<template>
	<div class="page-header"><h1>软件中心</h1></div>
    <tab :index.sync='mainIndex'> </tab>
    <div class="tabContent" >
        <div class="hasInstall-con" v-show='mainIndex===0'>
            <div class="app" v-for='info in hasInstall' v-show='info.isInstall'
             >
                <a v-link="{name:'user1',activeClass:'active',params:{userId:$index}}" @mouseover= 'showMask($index,info)'>
                    <img class="alignCenter" :src="info.imgSrc"/>
                    <span class="alignCenter app-name">{{info.name}}</span>
                </a>
                <button class="app-update btn btn-sm btn-default">更新</button>
                <button class="app-uninstall btn-sm btn btn-danger">卸载</button>
                <div class="appDesc" v-show='info.ismaskShow' >
                    <div class="header">
                        <span class="left">{{info.name}}</span>
                        <span class="right">★★★☆☆</span>
                    </div>
                    <div class="header">
                        <span class="left">365次下载</span>
                        <span class="right">46kb</span>
                    </div>
                    <p href="">{{info.des}}</p>
                </div>
            </div>
        </div>
        
        <div class="noInstall-con" v-show='mainIndex===1'>
            <div class="app " v-for='info in noInstall'  v-on:mouseover= 'showMask($index,noInstall)'>
                <a v-link="{name:'user',activeClass:'active',params:{userId:$index}}"　 @mouseover= 'showMask($index,info)'>
                    <img class="alignCenter" v-bind:src="info.imgSrc"/>
                    <span class="alignCenter app-name">{{info.name}}</span>
                </a>
                <button class="app-update btn btn-sm btn-default">更新</button>
                <button class="app-uninstall btn-sm btn btn-danger">卸载</button>
                
                <div class="appDesc" v-show='info.ismaskShow'>
                    <div class="header">
                        <span class="left">{{info.name}}</span>
                        <span class="right">★★★☆☆</span>
                    </div>
                    <div class="header">
                        <span class="left">365次下载</span>
                        <span class="right">46kb</span>
                    </div>
                    <p href="">{{info.des}}</p>
                </div>
            </div>
        </div>
        <!-- <router-view></router-view> -->
        <!-- <info></info> -->
    </div>
</template>
<script>
import app from '../data/app.json'
import tab from './tab.vue'
	module.exports = {
		data () {
		  return {
		    infosData:app.infos,
		    hasInstall:'',//已安装数据 
		    noInstall:'',//过滤未安装
		    mainIndex:0,//0:显示已安装 1:未安装
		  };
		},
		components:{
			'tab':tab,
		},
		computed: {
		  hasInstall () {
		  	let arr = [];
		  	for (var i = 0; i < this.infosData.length; i++) {

		  		this.infosData[i].isInstall&&arr.push(this.infosData[i])
		  	}
		    return arr;
		  },
		  noInstall () {
		  	let arr = [];
		  	for (var i = 0; i < this.infosData.length; i++) {
		  		!this.infosData[i].isInstall&&arr.push(this.infosData[i])
		  	}
		    return arr;
		  },
		},
		methods: {
		  showMask (i,info) {
		  	info.ismaskShow=true;
		  	console.log(info);
		    // this.data[i].ismaskShow=true;
		  }
		}
	};
</script>