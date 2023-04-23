<template>
	<view class="card-wrap">
		<view class="title">
			岗位说明
		</view>
		<view class="row">
			<text class="label">起始日期:</text>
			<text class="val">
				客房服务员 收拾客房内宿，服从酒店领导
				管理安排
			</text>
		</view>
		<view class="row">
			<text class="label">上班时间:</text>
			<text class="val">
				2023/03/01 -  2023/02/22
			</text>
		</view>
		<view class="row">
			<text class="label">岗位类型:</text>
			<text class="val">
				兼职
			</text>
		</view>
		<view class="row">
			<text class="label">名称:</text>
			<text class="val">
				酒店客房服务生
			</text>
		</view>
		<view class="row">
			<text class="label">岗位职责:</text>
			<text class="val">
				客房服务员 收拾客房内宿，服从酒店领导
				管理安排
			</text>
		</view>
		<view class="row">
			<text class="label">工作薪资:</text>
			<text class="val">
				30元/小时
			</text>
		</view>
		<view class="row">
			<text class="label">性别:</text>
			<text class="val">
				不限
			</text>
		</view>
		<view class="row">
			<text class="label">年龄:</text>
			<text class="val">
				50岁以下
			</text>
		</view>
		<view class="row">
			<text class="label">身高:</text>
			<text class="val">
				不限
			</text>
		</view>
		<view class="row">
			<text class="label">工作福利:</text>
			<text class="val">
				包食宿
			</text>
		</view>
		<view class="row">
			<text class="label">要求:</text>
			<text class="val">
				健康证
			</text>
		</view>
		<view class="row">
			<text class="label">工作经验:</text>
			<text class="val">
				不限
			</text>
		</view>
		<view class="row">
			<text class="label">其他要求:</text>
			<text class="val">
				无
			</text>
		</view>
	</view>
</template>

<script>
	export default {
		
		props: {
			
		},
		
		data() {
			return {
				
			}
		},
		
		methods: {
			
		}
		
	}
</script>

<style lang="scss" scoped>
	.card-wrap {
		padding: 24rpx;
		background: #fff;
		border-radius: 22rpx;
	}
	
	.title {
		padding: 10rpx 0;
		color: #161D26;
		font-size: 24rpx;
		font-weight: 700;
	}
	
	
	.row {
		display: flex;
		padding: 15rpx 0;
		.label {
			flex: 0 0 150rpx;
			width: 150rpx;
			font-size: 24rpx;
			color: #606570;
		}
		
		.val {
			flex: 1;
			font-size: 24rpx;
			color: #000000;
		}
	}
</style>