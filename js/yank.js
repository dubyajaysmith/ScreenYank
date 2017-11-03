
const getId = (x) => document.getElementById(x)

getId('yank').onclick = (e) => getYanked(e)

console.dir(chrome)

const getYanked = (event) => {

    chrome.tabs.captureVisibleTab(null, {}, function (image) {
        // You can add that image HTML5 canvas, or Element.
        console.dir(image)
        getId('results').innerHTML = '<img src="'+image+'" />'
        
    });
    
    
    


}