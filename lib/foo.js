const bar = require("./bar");
window.foo = {};
window.foo.bar = async () => await console.log("hello world");
window.foo.init = function() {
    document.getElementById('go').addEventListener('click', function() {
        document.getElementById('result').innerHTML = "foo";
    });
};