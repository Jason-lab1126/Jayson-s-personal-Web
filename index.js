/*
 * Name: Jayson Xu
 * Date: October 17, 2024
 * Section: CSE 154 AB
 * This script adds interactivity to my portfolio website by responding to events such as
 * theme toggling, reordering class items, and dynamically displaying project details.
 * It uses event listeners to handle user interactions and updates the DOM accordingly.
 */

"use strict";

(function() {
  /**
   * Toggles between light and dark themes by adding/removing the 'light-mode' class.
   */
  function toggleTheme() {
    document.body.classList.toggle("light-mode");
  }

  /**
   * Moves the list item up in the class ranking.
   * @param {Event} event - The event triggered by clicking the 'move-up' button.
   */
  function moveUp(event) {
    const listItem = event.target.closest("li");
    const prevItem = listItem.previousElementSibling;
    if (prevItem) {
      listItem.parentNode.insertBefore(listItem, prevItem);
    }
  }

  /**
   * Moves the list item down in the class ranking.
   * @param {Event} event - The event triggered by clicking the 'move-down' button.
   */
  function moveDown(event) {
    const listItem = event.target.closest("li");
    const nextItem = listItem.nextElementSibling;
    if (nextItem) {
      listItem.parentNode.insertBefore(nextItem, listItem);
    }
  }

  /**
   * Toggles the visibility of project details in the portfolio.
   * @param {Event} event - The event triggered by clicking the 'toggle-details' button.
   */
  function toggleProjectDetails(event) {
    const article = event.target.closest("article");
    let details = article.querySelector(".project-details");
    if (details) {
      details.classList.toggle('hidden');
    } else {
      details = document.createElement("p");
      details.className = "project-details";
      details.textContent = "This is the dynamically added project detail.";
      article.appendChild(details);
    }
  }

  /**
   * Adds event listeners after the window has loaded.
   */
  function init() {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", toggleTheme);
    }

    document.querySelectorAll(".move-up").forEach(button => {
      button.addEventListener("click", moveUp);
    });
    document.querySelectorAll(".move-down").forEach(button => {
      button.addEventListener("click", moveDown);
    });

    document.querySelectorAll(".toggle-details").forEach(button => {
      button.addEventListener("click", toggleProjectDetails);
    });
  }

  window.addEventListener("load", init);
})();

