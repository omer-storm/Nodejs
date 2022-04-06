function doLog(){
    console.log('This is traditional function');
}
doLog();
// (doLog)();
// (function(){})();

(function(){
    console.log('This is anonymous function');
})();

let fn = () => {
    console.log('This is arrow function');
}
fn();

// function name(){}
// (function(){})
// (()=>{})
