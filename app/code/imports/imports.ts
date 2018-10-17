import { loader } from 'backappjh';
import { LanguageSettings } from '../view/languageSettings';
try { require('./../../style/app.css'); } catch (e) { console.log('Error CSS'); };

let w: any = window;
w.FontAwesomeConfig = {
    searchPseudoElements: true
}

export {
    loader,
    LanguageSettings
};
