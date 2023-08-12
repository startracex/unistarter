<script setup>
import A from "@/components/Link.vue"
import { useUser } from '@/context/user'
const user = useUser()
</script>
<template>
	<uni-notice-bar v-if="notice.text" style="margin-bottom: .2em;" show-get-more show-icon :scrollable="notice.scrollable"
		:text="notice.text" @getmore="getMore" />

	<view class="content">

		<view class="link-pad" v-for="(item, index) in links" :key="index">
			<A :url="item.login && !user.data() ? `login` : `index${item.url}`" class="link">
				<view class="link-view">
					<image :src="'/static/icon' + item.url + '.png'" mode="scaleToFill" />
					<text class="text">{{ item.text }}</text>
				</view>
			</A>
		</view>
	</view>
</template>

<script>
import config from '@/config.js'
import { jump } from "@/utils/link"
export default {
	data() {
		return {
			title: 'Hello',
			notice: config.notice,
			links: [{
				url: '/me',
				text: '个人',
				login: true
			},
			{
				url: "/token",
				text: "令牌",
				login: true
			},
			{
				url: '/message',
				text: '消息'
			},
			{
				url: "/log",
				text: "公告"
			}
			]
		}
	},
	onLoad() {

	},
	methods: {
		getMore() {
			jump(config.notice.url)
		}
	},
	components: {

	}
}
</script>

<style scoped>
.content {
	display: flex;
	align-items: stretch;
	justify-content: center;
	flex-direction: column;
	padding: .75rem;
}


.link-view {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	min-height: 42px;
	background-color: #84d4bc;
	border-radius: .2rem;
	padding: .5em;
}

.link-view image {
	width: 1.5rem;
	height: 1.5rem;
	margin-right: .5rem;
	max-width: 40px;
	min-width: 32px;
	max-height: 40px;
	min-height: 32px;
	margin-right: .5rem;
}

.link-pad {
	padding: .25rem;
	min-width: 200px;
}

.link {
	height: 2.2rem;
}

@media (min-width: 540px) {
	.content {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0;
	}

	.link-pad {
		flex: 1 1 50%;
		max-width: 50%;
	}

	.link {
		height: 2rem;
	}
}
</style>
