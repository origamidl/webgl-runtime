import start from './index';

document.addEventListener('DOMContentLoaded', () => {
    let scripts = document.getElementsByTagName('script');
    
    for (let script of scripts) {
        if (script.getAttribute('type') === 'application/origami') {
            start();
            break;
        }
    }
});
