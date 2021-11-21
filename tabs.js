// the Destination page
destinationsTab();
crewTab();
technology();

function destinationsTab() {
  const tabList = document.querySelector('[role="tablist"]');
  const tabItem = document.querySelectorAll('[role="tab"]');

  tabList.addEventListener("keydown", changeTabFocus);

  tabItem.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel);
  });

  let tabFocus = 0;

  function changeTabFocus(e) {
    // console.log(e.keyCode);
    const keyDownRight = 39;
    const keyDownLeft = 37;

    // If the tab move away from the current buttun, remove the tab from current tab
    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
      tabItem[tabFocus].setAttribute("tabindex", -1);

      // if it is the right buttun, then
      if (e.keyCode === keyDownRight) {
        // increase the tab focus and check if this is the last tab and restart from the beginning
        tabFocus++;

        if (tabFocus >= tabItem.length) {
          tabFocus = 0;
        }
      } else {
        tabFocus--;

        if (tabFocus < 0) {
          tabFocus = tabItem.length - 1;
        }
      }
    }

    tabItem[tabFocus].setAttribute("tabindex", 0);
    tabItem[tabFocus].focus();
  }

  function changeTabPanel(e) {
    // Get all variables
    const targetTab = e.target,
      targetPanel = targetTab.getAttribute("aria-controls"),
      tabContainer = targetTab.parentNode,
      mainContianer = tabContainer.parentNode,
      articleHeading = document.getElementById("article-heading"),
      articleParagraph = document.getElementById("article-p"),
      webpImage = document.getElementById("webp-src"),
      jpgImage = document.getElementById("img-src"),
      avgDistance = document.getElementById("distance-paragraph"),
      estTime = document.getElementById("time-paragraph");

    const xhr = new XMLHttpRequest();

    xhr.open("Get", "./data.json");
    xhr.onload = function () {
      if (this.status === 200) {
        const name = JSON.parse(this.responseText);

        mainContianer
          .querySelector('[aria-selected="true"]')
          .setAttribute("aria-selected", false);

        targetTab.setAttribute("aria-selected", true);

        // create a for loop -  I will work on this later when i have a better idea how to do it

        // check to see the tab that is selected and update items accordinginly
        if (targetPanel === "moon-tab") {
          updateUI(0);
        }

        if (targetPanel === "mars-tab") {
          updateUI(1);
        }
        if (targetPanel === "europa-tab") {
          updateUI(2);
        }
        if (targetPanel === "titan-tab") {
          updateUI(3);
        }

        function updateUI(number) {
          webpImage.setAttribute(
            "srcset",
            name.destinations[number].images.webp
          );
          jpgImage.setAttribute("src", name.destinations[number].images.jpg);
          articleHeading.textContent = name.destinations[number].name;
          articleParagraph.textContent = name.destinations[number].description;
          avgDistance.textContent = name.destinations[number].distance;
          estTime.textContent = name.destinations[number].travel;
        }
      }
    };
    xhr.send();
  }
}

function crewTab() {
  const tabList = document.querySelector('[role="tablist"]');
  const tabItem = document.querySelectorAll('[role="tab"]');

  tabList.addEventListener("keydown", changeIndicatorFocus);

  tabItem.forEach((tab) => {
    tab.addEventListener("click", changeIndicatorPanel);
  });

  let tabFocus = 0;

  function changeIndicatorFocus(e) {
    const keyDownRight = 39;
    const keyDownLeft = 37;

    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
      tabItem[tabFocus].setAttribute("tab-index", -1);

      if (e.keyCode === keyDownRight) {
        tabFocus++;
        if (tabFocus >= tabItem.length) {
          tabFocus = 0;
        }
      } else {
        tabFocus--;
        if (tabFocus < 0) {
          tabFocus = indicators.length - 1;
        }
      }
    }

    tabItem[tabFocus].setAttribute("tab-index", 0);
    // indicators[indicatorFocus].setAttribute("aria-selected", true);
    tabItem[tabFocus].focus();
  }

  function changeIndicatorPanel(e) {
    // get the elements from the dom
    const targetTab = e.target,
      targetPanel = targetTab.getAttribute("aria-controls");
    const webPImage = document.getElementById("img-webp"),
      pngImage = document.getElementById("img-png"),
      nameTitle = document.getElementById("name-title"),
      crewName = document.getElementById("name"),
      bio = document.getElementById("bio");

    const xhr = new XMLHttpRequest();

    xhr.open("Get", "./data.json");

    xhr.onload = function () {
      if (this.status === 200) {
        const outputData = JSON.parse(this.responseText);

        targetTab.parentNode
          .querySelector('[aria-selected="true"]')
          .setAttribute("aria-selected", false);

        targetTab.setAttribute("aria-selected", true);

        if (targetPanel === "douglas-hurley") {
          updateUI(0);
        }
        if (targetPanel === "mark-shuttleworth") {
          updateUI(1);
        }
        if (targetPanel === "victor-glover") {
          updateUI(2);
        }
        if (targetPanel === "anousheh-ansari") {
          updateUI(3);
        }
        function updateUI(number) {
          webPImage.setAttribute("srcset", outputData.crew[number].images.webp);
          pngImage.setAttribute("src", outputData.crew[number].images.png);
          nameTitle.textContent = outputData.crew[number].role;
          crewName.textContent = outputData.crew[number].name;
          bio.textContent = outputData.crew[number].bio;
        }
      }
    };

    xhr.send();
  }
}

function technology() {
  const tabList = document.querySelector('[role="tablist"]');
  const tabItem = document.querySelectorAll('[role="tab"]');

  tabList.addEventListener("keydown", changeTabFocus);

  tabItem.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel);
  });

  let tabFocus = 0;

  function changeTabFocus(e) {
    // console.log(e.keyCode);
    const keyDownRight = 39;
    const keyDownLeft = 37;

    // If the tab move away from the current buttun, remove the tab from current tab
    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
      tabItem[tabFocus].setAttribute("tabindex", -1);

      // if it is the right buttun, then
      if (e.keyCode === keyDownRight) {
        // increase the tab focus and check if this is the last tab and restart from the beginning
        tabFocus++;

        if (tabFocus >= tabItem.length) {
          tabFocus = 0;
        }
      } else {
        tabFocus--;

        if (tabFocus < 0) {
          tabFocus = tabItem.length - 1;
        }
      }
    }

    tabItem[tabFocus].setAttribute("tabindex", 0);
    tabItem[tabFocus].focus();
  }

  function changeTabPanel(e) {
    // get the elements from the dom
    const targetTab = e.target,
      targetPanel = targetTab.getAttribute("aria-controls"),
      landscapeImage = document.getElementById("tech-img-landscape"),
      portraiteImage = document.getElementById("tech-img-protraite"),
      defaultImage = document.getElementById("tech-img-portraite-default"),
      title = document.getElementById("text-article-title"),
      articleDetails = document.getElementById("text-article-paragraph");

    const xhr = new XMLHttpRequest();

    xhr.open("Get", "./data.json");

    xhr.onload = function () {
      if (this.status === 200) {
        const outputData = JSON.parse(this.responseText);

        targetTab.parentNode
          .querySelector('[aria-selected="true"]')
          .setAttribute("aria-selected", false);

        targetTab.setAttribute("aria-selected", true);

        if (targetPanel === "space-capsule") {
          updateUI(0);
        }
        if (targetPanel === "spacesport") {
          updateUI(1);
        }
        if (targetPanel === "lauch-vehicle") {
          updateUI(2);
        }

        function updateUI(number) {
          landscapeImage.setAttribute(
            "srcset",
            outputData.technology[number].images.landscape
          );
          portraiteImage.setAttribute(
            "srcset",
            outputData.technology[number].images.portrait
          );
          defaultImage.setAttribute(
            "src",
            outputData.technology[number].images.portrait
          );
          title.textContent = outputData.technology[number].name;
          articleDetails.textContent =
            outputData.technology[number].description;

          console.log(landscapeImage.getAttribute, "srcset");
        }
      }
    };

    xhr.send();
  }
}
