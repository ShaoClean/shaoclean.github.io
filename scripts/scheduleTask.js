const fs = require("fs");
const path = require("path");
const os = require("os");
// 获取日期 年-月-日
function getDate() {
	let now = new Date();

	let year = now.getFullYear();
	let month = now.getMonth() + 1;
	let date = now.getDate();

	let formatDate = year + "-" + month + "-" + date;

	return formatDate;
}
// 邮件发送者
const senderOption = {
	service: "qq",
	auth: {
		user: "528823279@qq.com",
		pass: process.env["EMAIL_PSW"],
	},
};
// 邮件接收者
const receiverOption = {
	from: "528823279@qq.com",
	to: "1518136109@qq.com",
};
const clogPath = path.resolve(__dirname, "../clog");
const filePath = path.resolve(
	path.join(clogPath, "./demo/schedule-content.md")
);
const content = "日常推送";
const currentTime = getDate();
const data = content + ` --- ${currentTime}${os.EOL}`;

fs.appendFileSync(filePath, data);
const nodemailer = require("nodemailer");

/**
 * @param {Object} receiverConfig
 * @param {String} receiverConfig.subject 标题
 * @param {String} receiverConfig.text 内容
 * @param {String} [receiverConfig.from]
 * @param {String} [receiverConfig.to]
 */
function sendEmail(receiverConfig) {
	let transporter = nodemailer.createTransport(senderOption);
	let mailOptions = {
		...receiverOption,
		...receiverConfig,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log("邮件已发送 sent: %s", info.messageId);
	});
}

sendEmail(receiverOption);
