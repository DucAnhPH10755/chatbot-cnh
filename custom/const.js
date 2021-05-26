module.exports = {
	DEBUG : false,

	//FACEBOOK TOKEN
	FB_APP_SECRET : 'd54a74fa8466102989602be9fe58fd5f',
	FB_PAGE_VERIFY_TOKEN : 'donganhchatbot', // đặt 1 mã bất kỳ
	FB_PAGE_ACCESS_TOKEN : 'EAADpd8FDaucBAOOdpu9vqQ3GMXf5TeobWkAc2mcyPff3e75y0zSz9a5X1b24orItUAQ9KnGd9DD5hFiSo3PVtZB3gRiZBZCrbms3CZCxAE8YbOfVB39MqZBxVyfkTIhpUZCCyrjb5GOPnn1c5PTZAEMVAC5pPFhVx6lGOCUQpqCAxkNE6ZBZB0bwh3dw00hGfQSMZD',

	//HEROKU STUFFS
	APP_NAME : 'donganhchatbot',
	HEROKU_API_KEY : '8404fad9-1f18-4e9a-92b1-f49319168ca5',
	KEEP_APP_ALWAYS_ON : false, // đổi thành true nếu đã thêm credit card vào heroku

	//MONGODB SETUP
	DB_CONFIG_URI : 'mongodb+srv://DongAnhChatbot:a5k18thptda@donganhchatbot.hccrm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',

	//ANALYTICS
	HAS_POST_LOG : false,
	POST_LOG_ID : '',
	POST_LOG_ENTRY1 : '',
	POST_LOG_ENTRY2 : '',

	//GOOGLE FORMS
	REPORT_LINK : "https://goo.gl/forms/FlqtshjdI9bMesSN2",

	//OTHERS
	//(không bắt buộc) Cách bật tính năng hiện đã xem (seen): https://goo.gl/xjw9nP
	MAX_PEOPLE_WAITROOM : 7, //Số người tối đa trong phòng chờ
	MAX_WAIT_TIME_MINUTES : 60, //Số phút tối đa 1 người đc phép trong phòng chờ.
	                            //Đặt 0 để cho phép đợi bao lâu cũng đc

	//ADMIN UI
	ADMIN_PASSWORD : "anhddph10755" //password để login vào trang admin
};
