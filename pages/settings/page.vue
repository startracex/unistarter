<script setup>
import A from "@/components/Link"
import config from '@/config';
import { useUser } from '@/context/user';
const user = useUser();

</script>
<template>
	<view class="container">
		<block v-if="user.data()">
			<view>
				登录为 <text>{{ user.data("name") || user.data("email") || user.data("email") }}</text>
			</view>
		</block>
		<block v-else>
			<A class="link" url="/login">
				<button style="margin: .5em;min-width: 5em;">登录</button>
			</A>
		</block>

		<view class="flex align-center">v{{ version }}
			<text class="gray" style="margin-left: .4em;" @click="checkUpdate">检查更新</text>
		</view>

		<view class="flex items-center">
			<uni-section title="" type="line"></uni-section>
			<uni-link href="https://github.com/startracex/" :text="`©${new Date().getFullYear()} ${author}`"
				showUnderLine="false">
			</uni-link>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			version: config.version,
			author: config.author
		}
	},
	methods: {
		checkUpdate() {
			console.log("检查更新");
		},

	}
}
</script>

<style>
.container {
	font-size: 18px;
}

.container view {
	margin: .2em 0;
}
</style>
