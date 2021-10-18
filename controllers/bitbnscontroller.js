//

const CryptoJS = require("crypto-js");
const bitbnsApi = require('bitbns');

const bitbns = new bitbnsApi({
	apiKey :  '81289F0FA0C1DDFCAEFE0811CA2229CC',//'998DD97FE6C8AAFB1497187937A7899E',
	apiSecretKey : '4390B6943C2CA74E382C7BD7027BD1CF'//'4A488BEAA18BA8268178690E33FB3DD3'
});

exports.placeMarketOrderQuantity = async function (req, res) {
	let timeStamp_nonce = Date.now().toString();
	let bodystring = {"symbol": req.body.symbol,"entry_id":"2814697"}
	const body = JSON.parse(JSON.stringify(bodystring))
	const secret = "asdfghjkl"
	const obj = {
			timeStamp_nonce: timeStamp_nonce,
			body: JSON.stringify(body)
	};
	const payload = new Buffer.from(JSON.stringify(obj)).toString('base64');
	const signature = CryptoJS.enc.Hex.stringify(CryptoJS.HmacSHA512(payload, secret));
	console.log("Payload:", payload)
	console.log("\nSignature:",signature)


	bitbns.placeMarketOrderQnty(req.body.symbol,
																				req.body.currency,
																				req.body.buy,
																				req.body.quantity,
																				function(error,data){
			if (!error) {
				console.log('Data :: ', data);
				return res.json({
					message: 'success',
					data: data
				});
			}else {
				console.log('Error :: ', error);
				return res.json({
					status: "error",
					message: error,
				});
			}
		}
	)
}