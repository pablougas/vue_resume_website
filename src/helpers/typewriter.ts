let aText: string[] = [];
let iSpeed: number = 60; // time delay of print out
let iIndex: number = 0; // start printing array at this posision
let iArrLength: number; // the length of the text array
let iScrollAt: number = 20; // start scrolling up at this many lines

let iTextPos: number = 0; // initialise text position
let sContents: string = ""; // initialise contents variable
let iRow: number | undefined; // initialise current row

const typewriter = (el: HTMLElement, content?: string[]) => {
  if (content) { 
    aText = content as string[] // save string to existing variable - recursion
    iArrLength = aText[0].length;
  } 

  sContents = " ";
  iRow = Math.max(0, iIndex - iScrollAt);
  while (iRow < iIndex) {
    sContents += aText[iRow++] + "<br />";
  }
 
  el.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if (iTextPos++ == iArrLength) {
    iTextPos = 0;
    iIndex++;
    if (iIndex != aText.length) {
      iArrLength = aText[iIndex].length;
      setTimeout(() => typewriter(el), 500);
    }
  } else {
    setTimeout(() => typewriter(el), iSpeed);
  }
};

export default typewriter;
