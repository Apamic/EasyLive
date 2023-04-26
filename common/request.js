//const baseUrl = "https://www.zzxh.vip"

const baseUrl = "http://10.10.2.150:8007"

import stroe from "storejs"
const request = (url, data, type,loading = true) => {
	return new Promise((resolve, reject) => {
		const token = stroe.get("easyLive-token") || ''
		const httpDefaultOpts = {
			url: baseUrl + url,
			data,
			method: type || "POST",
			dataType: "json",
			header: {
				"x-requested-with": "XMLHttpRequest",
				"content-type": "application/x-www-form-urlencoded",
				"token": token,
			},
			dataType: 'json'
		}
		
		if (loading) {
			uni.showLoading({
				icon: "loading",
				mask: true
			})
		}
		uni.request(httpDefaultOpts).then(res => {
			//console.log(res)
			
			if (res.statusCode == 200) {
				
				if(res.data.code == 1001) {
					resolve(res.data)
				} else if (res.data.code == 301) {
					uni.showToast({
						title: res.data.msg,
						duration: 2000,
						icon: "none"
					})
				} else if (res.data.code == 500) {
					uni.showToast({
						title: res.data.msg,
						duration: 2000,
						icon: "error"
					})
				} else {
					reject(res.data)
					uni.showToast({
						title: res.data.msg,
						duration: 2000,
						icon: "error"
					})
				}
			} else {
				resolve(res)
				uni.showToast({
					title: '请求异常!',
					duration: 1500,
					icon: "none"
				})
			}
			
			if (loading) {
				uni.hideLoading()
			}
			
			
			// if (res.data.code == 0) {  //请求成功
			// 	resolve(res.data)
			// } else if (res.data.code == -2) {  //登录失效
			// 	stroe.remove("easyLive-token")
			// 	uni.showToast({
			// 		title: res.data.msg,
			// 		duration: 1500,
			// 		icon: "none"
			// 	})
			// 	setTimeout(() => {
			// 		uni.navigateTo({
			// 			url: '../login/login'
			// 		})
			// 	}, 1500)
			// } else {  
			// 	resolve(res.data)
			// 	uni.showToast({
			// 		title: res.data.msg,
			// 		duration: 1500,
			// 		icon: "none"
			// 	})
			// }
		}).catch((response) => {
				uni.showToast({
					title: '请求失败!',
					duration: 1500,
					icon: "none"
				})
				reject(response)
				uni.hideLoading()
			}
		)
	})
}


export default request