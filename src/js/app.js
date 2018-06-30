import 'bootstrap';
import "../scss/custom.scss";
import {changeColor} from "./view/color.js"

document.querySelector(".change-color").addEventListener("click", e => {
    const colorClass = e.target.className;
    switch (colorClass) {
        case 'change-item':  
            changeColor('000');
            break;

        case 'change-item change-item__oliv':  
            changeColor('808000');
            break;

        case 'change-item change-item__mentol':
            changeColor('ADD8E6');
            break;
    }
});
