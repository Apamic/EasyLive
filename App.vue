<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import 'style/base.css';
	@import 'style/flex.css';
	@import 'style/position.css';
	@import 'style/text.css';
	
	
	body {
		background: #F3F4F5;
		min-height: calc(100vh - var(--window-bottom) - var(--window-top))
	}
</style>
