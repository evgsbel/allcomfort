// JS
import * as $ from 'jquery'
import 'bootstrap'
import 'owl.carousel';
import '@fancyapps/fancybox'
import 'select2/dist/js/select2.min'
import './js/app'

// SCSS
import './assets/sass/app.sass'
import './assets/sass/media.sass'

// svg sprite
function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('./assets/img/svg/', true, /\.svg$/));

fetch(`./assets/img/svg/sprite.svg`).then(res => {
    return res.text();
}).then(data => {
    document.getElementById('svg-icons').innerHTML = data;
});