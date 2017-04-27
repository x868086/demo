
// app.get('/hello', function(req, res) {
// 	var str//后台回参，传到前台的参数
// if(req.query.usInfo=="hunger"){  //前台请求.query.前台入参
// 		str=0;
// 	}else{
// 		str=1;
// 	}
// 	res.send({
// 		msg:str
// 	});
// });



app.get('/hello', function(req, res) {
	var products = [
			{
				img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
				name: '珂兰 黄金手 猴哥款',
				price: '￥405.00'
			},{
				img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
				name: '珂兰 黄金转运珠 猴哥款',
				price: '￥100.00'
			},{
				img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
				name: '珂兰 黄金手链 3D猴哥款',
				price: '￥45.00'
			}
		];
	var $html=""//后台回参，传到前台的参数
if(req.query.usInfo=="go"){  //前台请求.query.前台入参
		for(var key in products){
		console.log(key)
		$html +='<li class="pd-list">'
		$html +='<div class="cover"><a href="#">立即抢购</a></div>'
		$html +='<img src="'+products[key].img+'">'
		$html +='<p class="pd-dis">'+products[key].name+'</p>'
		$html +='<p class="pd-fee">'+products[key].price+'</p>'
		$html +='</li>'
}
	}
	res.send({
		msg:$html
	});
});
