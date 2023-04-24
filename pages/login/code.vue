<template>
	<view>
		<navTop></navTop>
		
		<view class="content-wrap">
			
			<view class="flex-column" style="padding-bottom: 50rpx;">
				<text style="margin-bottom: 20rpx; font-size: 42rpx;font-weight: 700;">请输入验证码</text>
				<text style="font-size: 26rpx;">Please Enter Verification Code</text>
				
			</view>
			
			<u-code-input v-model="code" bold  @finish="onFinish" space="16" :focus="true"></u-code-input>
			
			
			<view class="flex-end" style="margin-top: 50rpx;">
				<view class="align-center" v-if="sendState" @click="onSend()">
					<u-icon name="reload" color="#000000" style="margin-right: 10rpx;"></u-icon>
					<text style="font-size: 26rpx;">重新发送</text>
				</view>
				
				<view v-else>
					<text>{{second}}秒后重发</text>
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
				code: '',
				second: 60,
				timer: null,
				sendState: false,
				phone: ''
			}
		},
		
		
		onLoad(option) {
			if (option.phone) {
				this.phone = option.phone
			}
			
		},
		
		onReady() {
			this.setTime()
		},
		
		
		methods: {
			onFinish(e) {
				console.log(e)
				let {phone,code} = this
				
				let params = {
					phone,
					code
				}
				
				this.$request(`/user/empLogin${this.$u.queryParams(params)}`,{},'GET').then(res => {
					console.log(res.token)
					this.$store.set("easyLive-token", res.token)
					this.$tools.toast('登录成功')
					setTimeout(() => {
						uni.switchTab({
							url: '../index/index'
						})
					},1500)
				})
				
			},
			
			
			onSend() {
				this.$request('/user/sendmessage',{
					phone: this.phone
				}).then(res => {
					this.$tools.toast('发送成功')
					this.second = 60
					this.sendState = false
					this.setTime()
				})
			},
			
			setTime() {
				this.timer = setInterval(() => {
					this.second --
					
					if (this.second == 0) {
						clearInterval(this.timer)
						this.timer = null
						this.sendState = true
					}
					
				},1000)
			}
			
			
		},
		
		
		components:{
			navTop
		}
	}
</script>


<style>
	page {
		background: #fff;
	}
</style>

<style lang="scss" scoped>
	text {
		color: #000000;
	}
	
	
	.content-wrap {
		padding: 200rpx 60rpx 0;
	}
	
	
	/deep/ .u-code-input__item {
		width: 80rpx !important;
		height: 110rpx !important;
		background: #F7F8FA;
		border: none !important;
	}
	
</style>