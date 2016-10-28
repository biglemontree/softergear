<template>
	<div class="footTab">
        <ul class="nav nav-tabs">
            <li class="choose-tab" :class='{"active":index==0}' @click='toggleTab(0)'><a href="javascript:;" data-toggle='tab'>已安装<span>({{hasInstallNum}}){{isActive}}</span></a></li>
            <li class="choose-tab" :class='{"active":index==1}' @click='toggleTab(1)'><a href="javascript:;">未安装<span>({{noInstallNum}}){{is1Active}}</span></a></li>
        </ul>
    </div>
    {{$props}}
</template>
<script>
	module.exports = {
		data () {
		  return {
		    hasInstallNum:2,//已安装数,
		    noInstallNum:25//未安装数
		  };
		},
		props: {
		  index:{
		    required: true,
		    default: 0
		  }
		},
		methods: {
		  showMask (i) {
		    this.infosData[i].ismaskShow=true;
		  },
		  toggleTab(i){
		  	this.index = i;
		  }
		}
	};
</script>