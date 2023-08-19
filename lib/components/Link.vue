<template>
	<navigator v-if="url" :url="url" :open-type="openType" :hover-class="hoverClass">
		<slot></slot>
	</navigator>
</template>
<script>
	// 接受opentype,url,hoverclass参数
	import {
		parse
	} from '~/utils/link'
	export default {
		props: {
			openType: {
				type: String,
				default: 'navigate'
			},
			url: {
				type: String,
				default: '/'
			},
			hoverClass: {
				type: String,
				default: 'navigator-hover'
			}
		},
		computed: {
			url() {
				return parse(this.url)
			}
		}
	}
</script>
