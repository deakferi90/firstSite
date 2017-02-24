 function getTarget(e) {
   if (!e) {
     e = window.event;
   }
   return e.target || e.scrElement
 }

 function itemDone(e) {
   var target, elParent, elGrandParent;
   target = getTarget(e);
   elParent = target.parentNode;
   elGrandParent = target.parentNode.parentNode;
   elGrandParent.removeChild(elParent);
 }

 if (e.preventDefault) {
   e.preventDefault();
 } else {
   e.returnValue = false;
 }

 var el = document.getElementById('shoppingList');

 if (el.addEventListener) {
   el.addEventListener('click' function(e) {
     itemDone();
   }, false);
 } else {
   el.attachEvent('onclick' function(e) {
     itemDone();
   })
 }
