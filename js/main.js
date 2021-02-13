import { Toastr } from './components/Toastr.js';
import { clock } from './components/clock.js';

import { form } from './components/form/form.js';

import { renderSocials } from './components/renderSocials.js';
import { socialsData } from './data/socialsData.js';

import { renderProgressBars } from './components/renderProgressBars.js';
import { progressBarData } from './data/progressBarData.js';

const toastr = new Toastr();

clock('.clock', '12-14 18:00:00');
form('.hero .form', toastr);
renderProgressBars('.left-column', progressBarData);
form('.right-column .form', toastr);
renderSocials('footer > .socials', socialsData);
