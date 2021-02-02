import { clock } from './components/clock.js'
import { renderSocials } from './components/renderSocials.js';
import { socialsData } from './data/socialsData.js';

import {renderProgressBars} from './components/renderProgressBars.js';
import {progressBarData} from './data/progressBarData.js';

clock('.clock', 'pomi');
renderProgressBars('.left-column', progressBarData);
const socialsHTML = renderSocials('footer > .socials', socialsData);


