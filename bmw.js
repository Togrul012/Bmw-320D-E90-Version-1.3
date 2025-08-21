function toggleClickThrough(element, enable) {
    element.style.pointerEvents = enable ? 'none' : 'auto'; 
  }
  

  toggleClickThrough(document.getElementById('myElement'), true);

  toggleClickThrough(document.getElementById('myElement'), false);
