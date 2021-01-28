
import { renderSocials } from './components/renderSocials.js';
import { socialsData } from './data/socialsData.js';

import {renderProgressBars} from './components/renderProgressBars.js';
import {progressBarData} from './data/progressBarData.js';

renderProgressBars('.left-column', progressBarData);
const socialsHTML = renderSocials('footer > .socials', socialsData);


