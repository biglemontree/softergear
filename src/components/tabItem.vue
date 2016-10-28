<template>
<div>
	<div class="page-header" >
	  <h1>交换中心 <small>| {{noInstall[userId].name}}</small></h1>
	</div>
	<div class="jumbotron container">
		<div class="row">
			<div class="col-md-3 col-sm-3 ">
			<div class="img-wrap">
				<img class="app-img" :src="noInstall[userId].imgSrc" alt="">
			</div>
			</div>
			<div class="col-md-6 col-sm-6 des">
				<DIV class="item-title">{{noInstall[userId].name}}<span class="office">官方</span>	</DIV>
				<div class="comment">
					<span>★★★★☆   </span><span class="point">{{noInstall[userId].point}}</span>
				</div>
				<p >{{noInstall[userId].num}}次下载 • {{noInstall[userId].size}} • 无广告</p>
			</div>
			<div class="col-md-3 col-sm-3 install">
				<button class="btn btn-large btn-success">立即下载</button>
				<button class="btn btn-large btn-success">下载到手机</button>
			</div>
		</div>
		<div class="detail-intro">
			<h1>应用信息</h1>
		    <p>{{noInstall[userId].des}}</p>
		    <p><a class="btn btn-primary btn-lg" href="#" role="button">了解更多</a></p>
		</div>
	</div>
</div>		
</template>
<style scoped>
	.jumbotron{
		/* padding: 0 1rem; */
		box-sizing: border-box;
	}
	.img-wrap{
		background-color: #eee;
		margin: 0.8rem 1.4rem 0.8rem 0;
		border-radius: 0.6rem;
	}
	.app-img{
		margin: 1.4rem;
		width: 8rem;
	}
	.row{
		background-color: white;
		box-sizing: border-box;
		margin: 0 1.2rem;
	}
	.des{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 130px;
		margin: 0.8rem 0;
	}
	.install{
		height: 130px;
		display: flex;
		margin: 0.8rem 0;
		flex-direction: column;
		justify-content: space-around;
	}
	.des p{
		padding: 0;
		margin: 0;
		font-size: 0.8rem;

	}
	.item-title{
		font-size: 2.5rem;
	}
	.office{
		font-size: 1rem;
		border: 1px solid #237ded;
		color: #237ded;
		border-radius: 0.2rem;
		padding: 0.2rem 0.4rem;
	}
	.comment{
		font-size: 1.5rem;
	}
	.point{
		color: #666;
		margin-left: 0.5rem;
	}
	.detail-intro{
		margin: 0.8rem 0.8rem;
	}
	.detail-intro h1{
		font-size: 1.8rem;
	}
</style>
<script>
import app from '../data/app.json'
import tabContent from './tab-content.vue'
	
	export default{
		route:{
			data({to}){
				this.userId = to.params.userId
				this.infos = to.path
			}
		},
		data(){
			return {
				infosData:app.infos,
				infos:'',
				hasInstall:'',
				// [
				// {
				// 	"name":"",
				// 	"imgSrc":"./src/assets/img/com_3322.png",
				// 	"des":"去疗效看,看光光,小编推荐,居家必备",
				// 	"ismaskShow":false, 
				// 	"isInstall":true,
				// 	"num":15,
				// 	"size":"60kb",
				// 	"type":"办公",
				// 	"point":"3.5分"
				// }
				// ],
				noInstall:[{
					"name":"3222动态域名",
					"imgSrc":"./src/assets/img/com_3322.png",
					"des":"去疗效看,看光光,小编推荐,居家必备",
					"ismaskShow":false, 
					"isInstall":true,
					"num":15,
					"size":"60kb",
					"type":"办公",
					"point":"3.5分"
				}],
				userId:''
			}
		},
		computed: {
		  noInstall () {
		  	if (this.infos.indexOf('index')>-1) {
		  		console.log(this.infos.indexOf('index'));
		  		let arr = [];
			  	for (var i = 0; i < this.infosData.length; i++) {
			  		this.infosData[i].isInstall&&arr.push(this.infosData[i])
			  	}
			    return arr;
		  	}else{
		  		let arr1 = [];
			  	for (var i = 0; i < this.infosData.length; i++) {
			  		!this.infosData[i].isInstall&&arr1.push(this.infosData[i])
			  	}
			    return arr1;
		  	}
		  }
		},
	};
</script>