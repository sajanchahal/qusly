const checkRects = (rects: ClientRect, fileRects: ClientRect, horizontal = true) => {
  const sideA = horizontal ? 'left' : 'top';
  const sideB = horizontal ? 'right' : 'bottom';

  return rects[sideA] < fileRects[sideA] && rects[sideB] > fileRects[sideB] ||
    rects[sideA] > fileRects[sideA] && rects[sideB] < fileRects[sideB] ||
    rects[sideA] < fileRects[sideA] && fileRects[sideA] < rects[sideB] ||
    fileRects[sideB] > rects[sideA] && fileRects[sideB] < rects[sideB];
}

export const isElementInArea = (rects: ClientRect, el: HTMLElement) => {
  const elRects = el.getBoundingClientRect();
  return checkRects(rects, elRects) && checkRects(rects, elRects, false);
}

interface Style {
  [key: string]: string;
}

export const setStyle = (el: HTMLElement, style: Style) => {
  Object.assign(el.style, style);
}
