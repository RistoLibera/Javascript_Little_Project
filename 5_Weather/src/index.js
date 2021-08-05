import { checkJSON } from "./app";

const searchForm = document.getElementById("search");

const canSubmitForm = (() => {
  searchForm.addEventListener("submit", checkJSON);
})();