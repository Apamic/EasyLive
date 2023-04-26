<template>
	<view class="card">
		<view class="title">
			面试预约
		</view>
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">行驶类型</text>
			</view>
			
			<view class="input-wrap flex-between" style="padding: 0 20rpx;" @click="selectShow = true">
				<!-- <u--input
				    placeholder="选择交通工具"
				    v-model="form.driveType"
					disabled
				></u--input> -->
				
				<text>
					{{columns[0][form.driveType].label}}
				</text>
				
				<u-icon name="arrow-right" size="20"></u-icon>
				
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">上传车票信息 (自驾无需上传)</text>
			</view>
			
			<u-upload
				:fileList="fileList1"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				multiple
				:maxCount="1"
			></u-upload>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">预约地址</text>
			</view>
			
			<view class="input-wrap">
				<u--input
				    placeholder="请填写一个具体地址"
				    v-model="form.appointmentAddress"
				></u--input>
			</view>
		</view>
		
		<view class="row">
			<view style="margin-bottom: 16rpx;">
				<text class="label">选择预约时间</text>
			</view>
			
			<view class="item-wrap">
				<view class="item flex-between align-center" @click="calendarShow = true">
					<text style="color: #333;">{{calendar}}</text>
					<u-icon name="arrow-right" size="20"></u-icon>
				</view>
				<view class="item flex-between align-center" @click="dateShow = true">
					<text style="color: #333;">{{time}}</text>
					<u-icon name="arrow-right" size="20"></u-icon>
				</view>
			</view>
		</view>
		
		<view class="flex-between align-center">
			
			<view class="back flex-center align-center" @click="back()">
				<u-icon name="arrow-leftward" size="20"></u-icon>
			</view>
			
			<u-button class="but" text="下一步" size="large" @click="onSubmit()"></u-button>
		</view>
		
		
		<u-picker :show="selectShow" :columns="columns" keyName="label" @confirm="confirm" @cancel="cancel"></u-picker>
		
		<u-calendar :show="calendarShow" @confirm="calendarConfirm" @close="cancel"></u-calendar>
		
		<u-datetime-picker :show="dateShow" v-model="time" mode="time" @confirm="datetimeConfirm" @cancel="cancel"></u-datetime-picker>
		
		
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: Number,
				default: ''
			}
		},
		
		data() {
			return {
				form: {
					type: this.type,
					driveType: 0,
					ticket: '',
					appointmentTime: '',
					appointmentAddress: '',
				},
				
				calendar: '',
				time: '10:00',
				
				fileList1: [],
				
				selectShow: false,
				calendarShow: false,
				dateShow: false,
				
				columns: [
					[{
                        label: '自驾',
                        id: 0
                    },{
						label: '火车',
						id: 1
					},{
						label: '高铁',
						id: 2
					},{
						label: '飞机',
						id: 3
					}]
				]
			}
		},
		
		mounted() {
			this.calendar = this.result(Number(new Date()),'date')
		},
		
		
		methods: {
			
			result(time, mode) {
				const timeFormat = uni.$u.timeFormat,
					toast = uni.$u.toast
				switch (mode) {
					case 'datetime':
						return timeFormat(time, 'yyyy-mm-dd hh:MM')
					case 'date':
						return timeFormat(time, 'yyyy-mm-dd')
					case 'year-month':
						return timeFormat(time, 'yyyy-mm')
					case 'time':
						return time
					default:
						return ''
				}
			},
			
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
			},
			
			
			async afterRead(event) {
				
				console.log(event)
				
				// 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
				let lists = [].concat(event.file)
				let fileListLen = this[`fileList${event.name}`].length
				lists.map((item) => {
					this[`fileList${event.name}`].push({
						...item,
						status: 'uploading',
						message: '上传中'
					})
				})
				
				for (let i = 0; i < lists.length; i++) {
					const result = await this.uploadFilePromise(lists[i].url)
					let item = this[`fileList${event.name}`][fileListLen]
					this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
						status: 'success',
						message: '',
						url: result
					}))
					fileListLen++
				}
			},
			
			
			uploadFilePromise(url) {
				return new Promise((resolve, reject) => {
					let a = uni.uploadFile({
						url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
						filePath: url,
						name: 'file',
						formData: {
							user: 'test'
						},
						success: (res) => {
							setTimeout(() => {
								resolve(res.data.data)
							}, 1000)
						}
					});
				})
			},
			
			
			confirm(e) {
				console.log('confirm', e)
				
				this.form.driveType = e.value[0].id

				
				this.selectShow = false
			},
			
			cancel() {
				this.selectShow = false
				this.dateShow = false
				this.calendarShow = false
			},
			
			back() {
				this.$emit('back',0)
			},
			
			async onSubmit() {
				
				//console.log(this.form)
				
				let {appointmentAddress} = this.form
				
				this.form.appointmentTime = `${this.calendar} ${this.time}`
				
				if (!appointmentAddress) return this.$tools.toast('请填写一个具体地址')
				 
				let data = await this.$request('/checkIn/saveCheckIn',this.form)
				
				if (data) {
					
					this.$emit('next',2)
				}
			},
			
			datetimeConfirm(e) {
				
				this.dateShow = false
			},
			
			calendarConfirm(e) {
				console.log('calendarConfirm', e[0])
				
				this.calendar = e[0]
				
				
				this.calendarShow = false
				
			}
		},
		
		components: {
			
		}
		
	}
</script>

<style lang="scss" scoped>
	.card {
		padding: 30rpx 38rpx 30rpx;
		background: #fff;
		border-radius: 10rpx;
	}
	
	.title {
		margin-bottom: 30rpx;
		color: #000000;
		font-size: 30rpx;
	}
	
	.row {
		padding-bottom: 40rpx;
		.label {
			font-size: 22rpx;
			color: #7A8393;
		}
		.input-wrap {
			display: flex;
			align-items: center;
			padding: 10rpx;
			min-height: 100rpx;
			line-height: 100rpx;
			background: #F6F8FC;
			border-radius: 13rpx;
		}
		
		.item-wrap {
			display: flex;
			justify-content: space-between;
			.item {
				padding: 0 40rpx;
				width: 310rpx;
				height: 100rpx;
				background: #F6F8FC;
				border-radius: 13rpx;
				
				text {
					color: #ADB1C0;
					font-size: 28rpx;
				}
				
				image {
					width: 40rpx;
				}
				
			}
		}
		
	}
	
	
	.but {
		margin: 0;
		width: 240rpx;
		color: #fff;
		background: #1250E5;
	}
	
	.back {
		width: 76rpx;
		height: 76rpx;
		border-radius: 50%;
		box-shadow: 4rpx 6rpx 10rpx 1rpx #DAE5FF;
	}
</style>