'use strict';

function getElementWidth(content,padding,border) { 
    const totalContent = Number.parseFloat(content);
    const totalPadding = Number.parseFloat(padding);
    const totalBorder = Number.parseFloat(border);
    const totalSize = totalContent + totalPadding * 2 + totalBorder * 2
    
    return totalSize

}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200