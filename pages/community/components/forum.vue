<template>
	<view>
		<scroll-view scroll-y class="scroll-wrap" :style="{height:navHeight+'px'}">
			<view style="padding: 10rpx 22rpx;" v-if="forumList && forumList.length > 0">
				<view v-for="(item,index) in forumList" :key="item.id" style="margin-bottom: 20rpx;" @click="$tools.jump(`./postDetails?id=${item.id}`)">
					<commentCard :item="item"></commentCard>
				</view>
			</view>
		</scroll-view>
		
		<view class="publish-wrap" @click="$tools.jump('./postMessage')">
			<u-icon name="plus-circle-fill" size="50" color="#F27738"></u-icon>
		</view>
		
	</view>
</template>

<script>
	import scrollHeight from "@/mixis/scrollHeight.vue"
	import commentCard from "@/components/commentCard.vue"
	export default {
		
		mixins:[scrollHeight],
		
		props: {
			// forumList: {
			// 	type: Array,
			// 	default: () => []
			// }
		},
		
		
		data() {
			return {
				
				forumList: [],
				
				
			}
		},
		
		mounted() { 
			this.getBbsList()
		},
		
		methods: {
			async getBbsList() {
				let data = await this.$request('/content/bbs/getBbsList',{},'GET')
				
				if (data) {
					this.forumList = data.data
					
				}
				
			},
			
		},
		
		components: {
			commentCard
		}
		
		
	}
</script>


<style>
	
</style>

<style lang="scss" scoped>
	.publish-wrap {
		position: fixed;
		right: 40rpx;
		bottom: 140rpx;
	}
	
</style>