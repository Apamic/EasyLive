<template>
	<view>
		<view class="wrap">
			<u-subsection :list="list" :current="current" @change="sectionChange" fontSize="15" inactiveColor="#ADB1C0" activeColor="#000000"></u-subsection>
		</view>
		<scroll-view scroll-y class="scroll-wrap" :style="{height:navHeight+'px'}">
			
			<view class="list-wrap">
				<view class="column">
					<videoCard v-for="(item,index) in leftList" :key="index" :item="item"></videoCard>
				</view>
				<view class="column">
					<videoCard v-for="(item,index) in rightList" :key="index" :item="item"></videoCard>
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import scrollHeight from '@/mixis/scrollHeight.vue'
	import videoCard from '@/components/videoCard.vue'
	export default {
		mixins: [scrollHeight],
		
		props: {
			dataList: {
				type: Array,
				default: () => []
			}
		},
		
		
		data() {
			return {
				list: ['保洁', '餐厅', '客房', '厨师','司机'],
				current: 0,
				
				lists: [
					{
						text: '酒店保洁培训基础,酒店培训服务'
					},
					{
						text: '酒店保洁培训基础'
					},
					{
						text: '酒店保洁培训基础,酒店培训服务'
					},
					{
						text: '酒店保洁培训基础,酒店培训服务'
					},
					{
						text: '酒店保洁培训基础'
					},
					{
						text: '酒店保洁培训基础'
					},
					{
						text: '酒店保洁培训基础'
					},
					{
						text: '酒店保洁培训基础,酒店培训服务'
					},
					{
						text: '酒店保洁培训基础,酒店培训服务'
					},
					{
						text: '酒店保洁培训基础,酒店培训服务'
					},
					{
						text: '酒店保洁培训基础,酒店培训服务'
					},
					{
						text: '酒店保洁培训基础,酒店培训服务'
					}
				],
				
				
				leftList: [],
				rightList: [],
				
			}
		},
		
		
		mounted() {
			let i = 0;
			while (i < this.lists.length) {
			    this.leftList.push(this.lists[i++]);
			    if (i < this.lists.length) {
			        this.rightList.push(this.lists[i++]);
			    }
			}
		},
		
		methods: {
			sectionChange(index) {
				this.current = index
			}
		},
		
		components: {
			videoCard
		}
		
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 20rpx 10rpx;
		height: 120rpx;
	}
	
	.list-wrap {
		display: flex; // 设置为Flex容器
		flex-direction: row; 
		justify-content: space-between;
		padding: 0 10rpx;
	}
	
	.column {
	    display: flex; // 设置为Flex容器
	    flex-direction: column; // 主轴方向设置为垂直方向
	}
	
</style>