import { listContacts } from "./pages/page_1.js";
import "./css/style.css";

// const contentDiv = document.createElement("div");
// contentDiv.id = "content";
// document.body.appendChild(contentDiv);

const homePageButton = document.createElement("button");
homePageButton.textContent = "Home Page";
homePageButton.addEventListener("click", () => {
	listContacts();
});

document.body.prepend(homePageButton);

listContacts();

