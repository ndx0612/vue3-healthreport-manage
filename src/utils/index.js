const SIGN_REGEXP = /([yMdhsm])(\1*)/g
const DEFAULT_PATTERN = "yyyy-MM-dd"
// 个位日期补0
function padding(s, len) {
	len = len - (s + "").length
	for (var i = 0; i < len; i++) {
		s = "0" + s
	}
	return s
}

export default {
	/**
 * @description: 时间戳转日期对象 默认当前日期
 * @param {number} date 时间戳
 * @param {string} pattern 时间格式
 * @return {*}
 */
	formatDate(date, pattern) {
		if (!date) {
			return '-'
		}
		if (typeof date == "string") date = Number(date)
		if (typeof date == "string" || typeof date == "number") {
			date = new Date((date + "").length == 10 ? date * 1000 : date)
		}
		pattern = pattern || DEFAULT_PATTERN
		return pattern.replace(SIGN_REGEXP, function ($0) {
			switch ($0.charAt(0)) {
				case "y":
					return padding(date.getFullYear(), $0.length)
				case "M":
					return padding(date.getMonth() + 1, $0.length)
				case "d":
					return padding(date.getDate(), $0.length)
				case "w":
					return date.getDay() + 1
				case "h":
					return padding(date.getHours(), $0.length)
				case "m":
					return padding(date.getMinutes(), $0.length)
				case "s":
					return padding(date.getSeconds(), $0.length)
			}
		})
	},
	// 服务器资源-可能是本地服务器的相对路径，也可能是云服务器的绝对路径，统一处理
	convertImgUrl: function (url) {
		if (!url) return ""
		if (
			url &&
			url.length > 8 &&
			(url.substring(0, 7) == "http://" || url.substring(0, 8) == "https://")
		) {
			return url
		} else {
			return (process.env.VUE_APP_BASE_URL || 'http://wx.youxinedu.cn/health-report-java/') + url
		}
	},
}