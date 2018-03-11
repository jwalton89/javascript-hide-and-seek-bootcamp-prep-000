function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML,10)+n
  }
}

function deespestChild() {
  let children = document.querySelectorAll('grand-node')
  for (let i = 0; i < children.length; i++) {
    return document.querySelectorAll('grand-note').innerHTML
  }
}
