$(function() {
  var rows = $('.row');
  var ids = [];
  rows.each(function(i, row) {
    var id = $(row).find('a').first().attr('href');
    ids.push(id);
  });
  spexDB.getMulti(ids, function(err, infos) {
    console.log(infos);
    for(var id in infos) {
      insertInfo(id, infos[id]);
    }
  });
});


function insertInfo(id, info) {
  if (!info) return;
  var br  = $('.row a[href$="' + id + '"]').first().parent().find('.itempn');
  if (info.size) {
    var infospan = '<span class="spex-info"> - ' +
                    info.size.value + ' ' + info.size.units + '</span>';
    $(infospan).insertBefore(br);
  }
  console.log(br);
}
