<template>
	<view class="padding-row20">
		<navTop :title="'我的投稿'" bgColor="#F3F4F5"></navTop>
		<scroll-view scroll-y class="scroll-wrap" :style="{height:navHeight+'px'}">
			<view v-for="(item,index) in myBbsList" :key="item.id" style="margin-bottom: 20rpx;" @click.stop="$tools.jump(`./postDetails?self=${1}&id=${item.id}`)"> 
				<commentCard :item="item">
					<!-- <image src="@/static/community/delete.png" mode="widthFix" style="width: 74rpx;" @click.stop="onDelete()"></image> -->
				</commentCard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import navTop from '@/components/navTop.vue'
	import scrollHeight from "@/mixis/scrollHeight.vue"
	import commentCard from "@/components/commentCard.vue"
	export default {
		mixins: [scrollHeight],
		data() {
			return {
				myBbsList: []
			}
		},
		
		
		onLoad() {
			this.getMyBbsList()
		},
		
		
		methods: {
			onDelete() {
				console.log('onDelete')
			},
			
			async getMyBbsList() {
				let data =  await this.$request('/content/bbs/showMyBbsList',{},'GET')
				
				if (data) {
					console.log(data.data)
					this.myBbsList = data.data
				}
				
			}
			
		},
		
		components: {
			navTop,
			commentCard
		}
		
	}
</script>

<style lang="scss" scoped>

</style>