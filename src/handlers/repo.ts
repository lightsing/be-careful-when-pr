import { $, waitForElm } from "../util";

export const isRepoRegex = /^https:\/\/github\.com\/[^/]+\/[^/?#\s]+([?#]\S+)?$/mi;
const compareBtnHrefRegex = /^https:\/\/github\.com\/[^/]+\/[^/]+\/compare\/[^?#]+([?#]\S+)?$/mi;

export const handleRepo = () => {
  const isForked = $('#repository-container-header > div > div > div > svg.octicon-repo-forked') !== null;
  if (!isForked) return;

  waitForElm('div.js-socket-channel.js-updatable-content > div.flash-warn svg.octicon-git-branch')
    .then(() => {
      const btn = $('div.js-socket-channel.js-updatable-content > div.flash-warn > div > a')!! as HTMLAnchorElement;
      if (!compareBtnHrefRegex.test(btn.href)) return;
      btn.style.backgroundColor = "var(--color-danger-fg)";
    });
};
