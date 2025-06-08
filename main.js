window.location.href = "bearbots-bhs.github.io";

document.getElementById("logoMain").onclick = function () {
  window.location.href = "index.html";
};
document.getElementById("linkTO-about").onclick = function () {
  window.location.href = "about.html";
};
document.getElementById("linkTO-fundraisers").onclick = function () {
  window.location.href = "fundraisers.html";
};
document.getElementById("linkTO-contact").onclick = function () {
  window.location.href = "contact.html";
};
document.getElementById("linkTO-resources").onclick = function () {
  window.location.href = "resources.html";
};

document.getElementById("linkTO-aboutMOB").onclick = function () {
  window.location.href = "about.html";
};
document.getElementById("linkTO-fundraisersMOB").onclick = function () {
  window.location.href = "fundraisers.html";
};
document.getElementById("linkTO-contactMOB").onclick = function () {
  window.location.href = "contact.html";
};
document.getElementById("linkTO-resourcesMOB").onclick = function () {
  window.location.href = "resources.html";
};
document.getElementById("linkTO-insta").onclick = function () {
  window.location.href = "https://www.instagram.com/bhsbearbots/";
};

document.getElementById("sitemapLINK").onclick = function () {
  window.location.href = "sitemap.html";
};

document.getElementById("menu").onclick = function () {
  console.log("=-enabled-=");
  const mobBAR = document.getElementById("mobileNAVBAR");
  if (mobBAR.classList.contains("hidebar")) {
    mobBAR.classList.remove("hidebar");
    if (document.getElementById("announcement") != null) {
      document.getElementById("announcement").classList.add("hide");
    }
  } else {
    mobBAR.classList.add("hidebar");
    if (document.getElementById("announcement") != null) {
      document.getElementById("announcement").classList.remove("hide");
    }
  }
};
