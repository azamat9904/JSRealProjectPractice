import "./slider";
import modals from './modules/modules';
import tabs from './modules/tabs';
import forms from './modules/forms';
import timer from './modules/timer';
import images from './modules/images';
window.addEventListener('DOMContentLoaded',()=>{
    "use strict";
    let deadline = '2020-08-24';

    modals();
    tabs('.glazing_slider','.glazing_block','.glazing_content','active');
    tabs('.decoration_slider','.no_click','.decoration_content > div > div','after_click');
    forms();
    timer('.container1',deadline);
    images();
});
