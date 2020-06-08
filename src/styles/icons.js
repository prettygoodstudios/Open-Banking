import { library, icon} from '@fortawesome/fontawesome-svg-core';
import { faUniversity, faMobileAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';
library.add(faUniversity, faMobileAlt, faBookOpen);

const style = {
    transform: {
        size: 6,
        x: -5,
        y: -5
    }
}

const smallStyle = {
    transform: {
        size: 4,
        x: -6,
        y: -6.5
    }
}

let university = icon(faUniversity, {
    ...style
});
let mobile = icon(faMobileAlt, {
    ...style
});
export const book = icon(faBookOpen, {
    transform: {
        size: 5,
        x: -7, 
        y: -6
    }
});

const adjustSizes = (e) => {
    console.log("hello")
    if(window.innerWidth < 800){
        university = icon(faUniversity, {
            ...smallStyle
        });
        mobile = icon(faMobileAlt, {
            transform: {
                ...smallStyle.transform,
                x: -4
            }
        });
    }else{
        university = icon(faUniversity, {
            ...style
        });
        mobile = icon(faMobileAlt, {
            ...style
        });
    }
}

export {university, mobile};


adjustSizes();

window.addEventListener("resize", (e) => adjustSizes(e));

