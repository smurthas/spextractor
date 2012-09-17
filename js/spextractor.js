$(function() {
  var ubodydiv = $('#userbody');
  var images = ubodydiv.find('.iw');
  var userbody = ubodydiv.text();
  var title = $('h2').text();
  var commentStart = userbody.indexOf('<!--');
  if ( commentStart > -1) userbody = userbody.substring(0, commentStart);
  var listing = {
    title: title,
    body: userbody
  };
  var size = extractors.sizeCM.value(listing);
  var info = {};
  if (size) {
    info.size = {
      value: size,
      units: 'cm'
    }
  }
  insertInfo(size+'cm');
  spexDB.set(getID(), info, function(){});
});


function getID() {
  return location.href;
}

function insertInfo(size) {
  var sizeInfo =
    '<div class="spextractor">' +
     '<form id="spextractor-info">' +
       '<label for="size">Size:</label>' +
       '<input name="size" type="text" value="' + size + '" />' +
      '</form>' +
    '</div>';
  sizeInfo = $(sizeInfo);
  sizeInfo.insertBefore('#userbody');
}

var extractors = {};

extractors.sizeCM = {
  type: 'size',
  value: function(listing) {
    var val;
    if (listing.title) val = this._.find(listing.title);
    if (!val && listing.body) val = this._.find(listing.body);
    return val;
  },
  units: 'cm',
  _: {
    regexp: /([4-6][0-9])\s?cm/i,
    find: function(text) {
      var matches = this.regexp.exec(text);
      if (matches && matches.length > 1) return parseInt(matches[1]);
    }
  }
}
