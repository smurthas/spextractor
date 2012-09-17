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

presentors.size = {

}
