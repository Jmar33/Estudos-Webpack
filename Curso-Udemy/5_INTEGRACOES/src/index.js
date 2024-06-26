// Import Fonts
import './fonts.css'
import './index.scss'

// Import Jquery
import $ from 'jquery';

//Import font awesome
import {library, dom} from '@fortawesome/fontawesome-svg-core'
import { faBacon, faAnchor } from '@fortawesome/free-solid-svg-icons';

//Import bootstrap
import 'bootstrap'

library.add(faBacon);
library.add(faAnchor);

dom.watch(); //Substitui nossa fonte pelo respectivo ícone

const body = $('body');

const p = $('<p></p>').text('Inserindo texto').css('color', 'red');

body.append(p);