// import "./src/styles/global.scss"
require('./src/styles/global.scss')

exports.onRouteUpdate = ({location}) => {
    if (window.MathJax !== undefined) {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    }
};