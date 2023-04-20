<template>
	<view>
		<navTop :title="'我的简历'">
			<view>上传简历</view>
		</navTop>
		
		
		
		
		
		<scroll-view scroll-y class="scroll-wrap" :style="{height:navHeight+'px'}">
			<view class="grid" style="padding: 30rpx 20rpx;">
				<template v-for="(item,index) in 6">
					<resumeCard :key="index"></resumeCard>
				</template>
			</view>
			
		</scroll-view>
		
		
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import resumeCard from './components/resumeCard.vue'
	
	
	export default {
		data() {
			return {
				pH:0, //窗口高度
				navHeight:0, //元素的所需高度
			}
		},
		
		
		onReady() {
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
			
		},
		
		
		components: {
			navTop,
			resumeCard
		}
		
	}
</script>

<style lang="scss" scoped>
	.grid {
		display: grid;
		grid-template-columns:repeat(2, 1fr);
		grid-row-gap: 20rpx;
		// grid-column-gap: 20rpx;
		// align-items: center;
		justify-items:center;
	}
	
	
	
</style>