import cssStr from './toolbox_style.css'

function styleInject(cssStr, styleElem) {
  const position = (styleElem = void 0 === styleElem ? {} : styleElem).insertAt;
  if (cssStr && "undefined" != typeof document) {
    const head = document.head || document.getElementsByTagName("head")[0];
    styleElem = document.createElement("style");
    styleElem.type = "text/css";
    "top" === position && head.firstChild ? head.insertBefore(styleElem, head.firstChild) : head.appendChild(styleElem);
    styleElem.styleSheet ? styleElem.styleSheet.cssText = cssStr : styleElem.appendChild(document.createTextNode(cssStr))
  }
}

styleInject(cssStr);