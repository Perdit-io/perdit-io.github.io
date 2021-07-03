/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* Credit from ManticoreGamesInc (Stanzilla)*/
// Manticore JavaScript Helpers

window.onscroll = function() {
    var pageOffset = document.documentElement.scrollTop || document.body.scrollTop,
        btn = document.getElementById('noH');
    if (btn) btn.style.visibility = pageOffset > 450 ? 'visible' : 'hidden';
};

document$.subscribe(function() {
  var tables = document.querySelectorAll("article table")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})

/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* Credit from ManticoreGamesInc (Stanzilla)*/

document.addEventListener("DOMContentLoaded", event => {

  // Scroll-to-Top button
  const btn = document.getElementById("to-top-button")
  btn.addEventListener("click", e => {
    e.preventDefault()
    e.stopImmediatePropagation()
    window.scroll({ top: 0, left: 0, behavior: "auto" })
  })

  // Add an icon to all external links
  const links = document.querySelectorAll(".md-content a")
  for (let i = 0, length = links.length; i < length; i++) {
    if (links[i].hostname !== window.location.hostname && links[i].title !== "Edit this page" && links[i] !== btn) {
      links[i].target = "_blank"
      links[i].className = "external"
      links[i].rel = "noopener"
    }
  }

  // Transform special markdown into YouTube embeds
  const elements = document.querySelectorAll("img[alt=\"YOUTUBE\"]")

  Array.prototype.forEach.call(elements, (el, i) => {
    const id = el.getAttribute("title").split("/")[el.getAttribute("title").split("/").length - 1]
    const oldClass = el.getAttribute("class")
    const iframe = document.createElement("iframe")

    iframe.title = "YouTube"
    iframe.src = `https://www.youtube.com/embed/${id}?modestbranding=1&amp;`

    if (oldClass !== "null") {
      iframe.className = `video-embed ${oldClass}`
    } else {
      iframe.className = "video-embed"
    }

    el.replaceWith(iframe)
  })

  // Change browser tab title based on header title near scroll position
  window.addEventListener("scroll", event => {
    const yPos = window.pageYOffset || document.documentElement.scrollTop
    let currentTitle = document.title
    const headerlinks = document.getElementsByClassName("headerlink")

    if (document.documentElement.scrollTop > 300) {
      btn.classList.add("show")
    } else {
      btn.classList.remove("show")
    }

    Array.prototype.forEach.call(headerlinks, (el, i) => {
      const rect = el.getBoundingClientRect()
      if (yPos > rect.top + document.documentElement.scrollTop - 90) {
        currentTitle = el.parentElement.textContent.slice(0, -1)
      }
    })

    document.title = currentTitle
  })
})


  