let w = window.innerWidth;
let bootstrapSize = [0, 0, 0, 0];

const formatBootstrap = ['XS', 'SM', 'MD', 'LG'];
const _ = el => console.log(el);

const modifyBootstrap = (n) => {
	for (let i = 0; i < 4; i++) {
		if (i != n) {
			bootstrapSize[i] = 0;
		}
	}
	bootstrapSize[n] = 1;
	$('#popup-bstrp').css('z-index', '50000');
	$('#popup-bstrp').fadeIn(0);
	$('#popup-bstrp').html(formatBootstrap[n]);
	setTimeout(() => {
		$('#popup-bstrp').fadeOut('slow', () => {
			$('#popup-bstrp').css('z-index', '-1');
		});
	}, 3000);
}

const refreshBoostrapSize = () => {
	modifyBootstrap(n = (w <= 767 && bootstrapSize[0] == 0) ? 0 :
		(w > 767 && w <= 992 && bootstrapSize[1] == 0) ? 1 :
		(w > 992 && w <= 1199 && bootstrapSize[2] == 0) ? 2 :
		(w > 1199 && bootstrapSize[3] == 0) ? 3 :
		-1)
}

$('body').append('<div id="popup-bstrp"></div>');
$('#popup-bstrp').css('z-index', '50000');
refreshBoostrapSize();

window.onresize = (event) => {
	w = window.innerWidth;
	refreshBoostrapSize();
}
