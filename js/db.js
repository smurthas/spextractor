function saveInfo(id, info, callback) {
  localStorage[id] = JSON.stringify(info);
  if (callback) return callback();
}

function getMulti(ids, callback) {
  var infos = {};
  for(var i in ids) {
    var id = ids[i];
    var val = localStorage[id];
    if (val) {
      val = JSON.parse(val);
      infos[id] = val;
    }
  }
  callback(null, infos);
}

function getInfo(id, callback) {
  callback(null, localStorage[id]);
}

spexDB = {
  set: saveInfo,
  get: getInfo,
  getMulti: getMulti
}
