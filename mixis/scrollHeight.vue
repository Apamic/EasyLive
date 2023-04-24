<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pH:0, //窗口高度
				navHeight:0, //元素的所需高度
			}
		},
		
		mounted() {
			let that=this;
			uni.getSystemInfo({ //调用uni-app接口获取屏幕高度
				success:(res) => { //成功回调函数
					that._data.pH=res.windowHeight //windoHeight为窗口高度，主要使用的是这个
					let titleH=uni.createSelectorQuery().select(".scroll-wrap"); //想要获取高度的元素名（class/id）
					titleH.boundingClientRect(data=>{
						let pH=that._data.pH; 
						that._data.navHeight = pH-data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
					}).exec()
				}
			})
		},
		
		
		methods: {
			
		}
		
	}
	
</script>

<style>
</style>