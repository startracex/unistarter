'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const email = event.email
	const password = event.password
	if (!email || !password) {
		return {
			code: 403,
			data: "No Params"
		}
	}
	const res = await db.collection('users').where({
		email: email,
		password: password
	}).get()
	if (res.data) {
		return {
			code: 200,
			data: res.data
		}
	}

	return {
		code: 404,
		data: "Not Found"
	} // 通过return返回结果给客户端
}
