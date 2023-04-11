/** Reset <form> content *********************************************************************** **/

  /** IF <form> has content and you press [F5] to reset it **/
  if ( window.history.replaceState ) {
    window.history.replaceState( null, null, window.location.href );
  }


/** Copy element value ************************************************************************* **/

  function copyElement(current) {
    var target = current.target || current.srcElement;
    var text = target.innerHTML.replace('&amp;','&');
    console.log(text);
    navigator.clipboard.writeText(text);
  }

  // HTML element: <p onclick="copyElement(current)"> TEXT TO COPY </p>


/** Show content after scroll ****************************************************************** **/

  function showFooterButtons() {
    foo = document.getElementById('foo');
    var y = window.scrollY;
    if (y >= 200) {
      foo.className  = '';
    } else {
      foo.className  = 'hidden';
    }
  }
  window.addEventListener('scroll', showFooterButtons);

  // HTML element: <div id=""> ELEMENT TO SHOW </div>


/** Google Chrome Extension: JScript tricks ********************************************************
 * @author szamil
 * @link <https://chrome.google.com/webstore/detail/jscript-tricks/odialddippdmebbfbflcneemfdglimod>
 * **/

/** For website <coursetime.net> *************************************************************** **/

  function SiteScript() {
    setTimeout(function() {
      window.open(
        // document.getElementById("enroll-now").getElementsByTagName("a")[0].href, "_self"
        document.getElementsByClassName("wp-block-button__link")[0].href, "_self"
      );
    }, 2000);
  }
