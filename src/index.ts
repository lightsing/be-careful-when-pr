import { handleRepo, isRepoRegex  } from "./handlers/repo";
import { handleCompare, isCompareRegex } from "./handlers/compare";

const current = window.location.href;
if (isRepoRegex.test(current)) handleRepo()
else if (isCompareRegex.test(current)) handleCompare();