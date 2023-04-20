<template>
	<view class="content-wrap">
		
		<view style="padding-top: 500rpx;">
			<view class="flex-column" style="margin-bottom: 40rpx;">
				<text class="name">welcome</text>
				<text class="txt">欢迎来到天天好活</text>
			</view>
			
			<view class="input-wrap">
				<image src="../../static/login/user.png" mode="widthFix" style="width: 80rpx;"></image>
				<u--input
				    placeholder="请输入手机号"
					type="number"
					v-model="phone"
					style="margin-left: -20rpx;"
				  ></u--input>
			</view>
		</view>
	
		
		<view class="fixed" style="right: 60rpx;bottom: 100rpx;">
			
			<view style="margin-bottom: 40rpx;">
				<u-button text="发送验证码" class="but" size="large" @click="code()"></u-button>
			</view>
			
			<view class="flex align-center">
				<view>
					<u-radio-group >
						<u-radio @change="radioChange" :name="allow" size="mini"></u-radio>
					</u-radio-group>
				</view>
				
				
				<text style="color: #000000;font-size: 24rpx;">
					我已经同意
					<text style="color: #F27738;">《软件服务协议》</text>
				</text>
			</view>
			
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				
				
				allow: false
			}
		},
		
		methods: {
			
			radioChange(n) {
				console.log(n,this.allow)
				this.allow = !this.allow
				console.log(n,this.allow)
			},
			
			
			code() {
				
				if (this.allow) {
					this.$tools.jump('./code')
				}
				
			}
		}
	}
</script>

<style>
	page {
		/* background: url('@/static/login/bj.png') no-repeat;
		background-size: 100% 100%; */
		background: #fff;
	}
</style>


<style lang="scss" scoped>
	.content-wrap {
		padding: 0 60rpx;
		height: 100vh;
		background: url('@/static/login/bj.png') no-repeat;
		background-size: 100% 100%;
	}
	
	.input-wrap {
		display: flex;
		background: #F7F8FA;
	}
	
	.name {
		font-weight: 700;
		font-size: 60rpx;
		color: #000;
	}
	
	.txt {
		font-size: 26rpx;
		color: #000;
	}
	
	.but {
		background: #004CFF;
		color: #fff;
	}
	
</style>