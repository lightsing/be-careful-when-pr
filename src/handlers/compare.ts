import { $, waitForElm } from "../util";

// capture groups: 1. target org/user; 2. source org/user
export const isCompareRegex = /^https:\/\/github\.com\/([^/]+)\/[^/]+\/compare\/[^.]+\.{3}([^:]+):[^:]+:[^?#]+([?#]\S+)?$/mi;

export const handleCompare = () => {
  const [_, target, source, ] = window.location.href.match(isCompareRegex)!!;
  if (target === source) return;

  waitForElm('#new_pull_request div.Layout-main div.BtnGroup > button[type=submit]').then((e) => {
    (e as HTMLElement).style.backgroundColor = "var(--color-danger-fg)";
    const dropDown = $('#new_pull_request div.Layout-main div.BtnGroup > details.select-menu > summary') as HTMLElement;
    dropDown.style.backgroundColor = "var(--color-danger-fg)";
  });
};