<template>
	<view>
		<navTop :title="'培训课程'"></navTop>
		
		<view>
			<view>
				<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
					@error="videoErrorCallback" style="width: 100%;height: 750rpx;"  controls></video>
			</view>
			
			<view class="content-wrap">
				<view class="flex-column" style="padding: 0 40rpx;">
					<text class="title">客房服务生的自我修养</text>
					<text class="txt">
						用户自主管理私钥,资产一手掌握 安全隔离,数据加密等
						获多项安全专利技术用户自主管理私钥,资产一手掌握 
						安全隔离,数据加密等获多项安全专利技术..
					</text>
				</view>				
			</view>
		</view>
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	export default {
		data() {
			return {
				
			}
		},
		
		
		methods: {
			
		},
		
		
		components: {
			navTop
		}
	}
</script>

<style lang="scss" scoped>
	.content-wrap {
		.title {
			padding: 20rpx 0;
			color: #000000;
			font-size: 34rpx;
			font-weight: 700;
		}
		
		.txt {
			font-size: 28rpx;
			color: #333333;
		}
		
	}
	
	
	
</style>