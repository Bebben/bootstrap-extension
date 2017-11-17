let w = window.innerWidth;
let bootstrapSize = [0, 0, 0, 0];

const formatBootstrap = ['XS', 'SM', 'MD', 'LG'];
const _ = el => console.log(el);

const modifyBootstrap = (n) => {
	if (n == -1) {return;}
	for (let i = 0; i < 4; i++) {
		if (i != n) {
			bootstrapSize[i] = 0;
		}
	}
	bootstrapSize[n] = 1;
	//Change this to a real mini popup in the corner
	_(`Boostrap Breakpoint : ${formatBootstrap[n]}`);
}

const refreshBoostrapSize = () => {
	n = (w <= 767 && bootstrapSize[0] == 0) ? 0 :
		(w > 767 && w <= 992 && bootstrapSize[1] == 0) ? 1 :
		(w > 992 && w <= 1199 && bootstrapSize[2] == 0) ? 2 :
		(w > 1199 && bootstrapSize[3] == 0) ? 3 :
		-1
	modifyBootstrap(n);
}

refreshBoostrapSize();

window.onresize = (event) => {
	w = window.innerWidth;
	refreshBoostrapSize();
}
