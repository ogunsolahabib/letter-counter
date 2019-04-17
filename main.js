function check() {
  var full = document.querySelector('.field').value;
  var fullArray = full.split('');
  var list = [];
  for (var i = 0; i < fullArray.length; i++) {
    var count = 0;
    for (var j = 0; j < fullArray.length; j++) {
      if (fullArray[i] === fullArray[j]) {
        count++;
      }
    }

    console.log(fullArray[i] + ' has ' + count + 'Occurrence');

    if (
      !list.includes(
        `"<b>${fullArray[i].toUpperCase()}</b>" : ${count} Occurrence`
      )
    ) {
      list.push(`"<b>${fullArray[i].toUpperCase()}</b>" : ${count} Occurrence`);
    }
    console.log(list);
  }
  for (var k = 0; k < list.length; k++) {
    var html = '<li class="item"> <span> %item%</li>';
    var newHTML = html.replace('%item%', list[k]);
    document.querySelector('.list').insertAdjacentHTML('beforeend', newHTML);
  }
}

document.addEventListener('keypress', event => {
  if (event.keyCode === 13) {
    document.querySelector('.list').innerHTML = '';
    check();
  }
});
