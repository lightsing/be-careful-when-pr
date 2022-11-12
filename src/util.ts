export const $ = (s: any): Element | null => document.querySelector(s);

// https://stackoverflow.com/a/61511955
export const waitForElm = (selector: string): Promise<Element> => {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector)!!);
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector)!!);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
};