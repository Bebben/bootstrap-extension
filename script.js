let w = window.innerWidth;
let bootstrapSize = [0, 0, 0, 0];

const _ = el => console.log(el);

const modifyBootstrap = (n) => {
	for (let i = 0; i < 4; i++) {
		if (i != n) {
			bootstrapSize[i] = 0;
		}
	}
}

const refreshBoostrapSize = () => {
	if (w <= 767 && bootstrapSize[0] == 0) {
		_('Bootstrap BreakPoint : XS');
		bootstrapSize[0] = 1;
		modifyBootstrap(0);
	} else if (w > 767 && w <= 992 && bootstrapSize[1] == 0) {
		_('Bootstrap BreakPoint : SM');
		bootstrapSize[1] = 1;
		modifyBootstrap(1);
	} else if (w > 992 && w <= 1199 && bootstrapSize[2] == 0) {
		_('Bootstrap BreakPoint : MD');
		bootstrapSize[2] = 1;
		modifyBootstrap(2);
	} else if (w > 1199 && bootstrapSize[3] == 0) {
		_('Bootstrap BreakPoint : LG');
		bootstrapSize[3] = 1;
		modifyBootstrap(3);
	}
}

refreshBoostrapSize();

window.onresize = (event) => {
	w = window.innerWidth;
	refreshBoostrapSize();
}