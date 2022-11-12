const $ = document.querySelector.bind(document);

const handleRepo = () => {
  $('.octicon-repo-forked')
};

const handleCompare = () => {

};

const isRepoRegex = /https:\/\/github\.com\/[^/]+\/[^/?#\s]+([?#]\S+)?/i;
// capture groups: 1. upstream org; 2. source org
const isCompareRegex = /https:\/\/github\.com\/([^/]+)\/[^/]+\/compare\/[^.]+\.{3}([^:]+):[^:]+:[^?#]+([?#]\S+)?/i;

const current = window.location.href;
if (isRepoRegex.test(current)) handleRepo()
else if (isCompareRegex.test(current)) handleCompare();