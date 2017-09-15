var controllers = ["", ];
var n = 6;//prompt("Please enter number of controllers(1-6)", "");
for(var i = 1 ; i <= n; i++){
  var c = {};
  c.ip = '8.8.8.'+i;
  controllers.push(c);
}

$(document).ready(function(){
  /*for(var i = 1; i <= 6; i++){
    $('#cardHolder').append(
      $('<a>')
        .attr("href", "operation")
        .append(
          $('<div/>')
            .attr("class", "col s12 m4")
            .append(
              $('<div/>')
                .attr("class", "card-panel blue-grey darken-1")
                .append(
                  $('<span/>')
                  .attr("class", "white-text")
                  .text("Controller #"+i)
                )
              )
          )  
    )*/     
  $('.connect_btn').on({
    'click': function(
    )
  });

  for(var i = 1; i <= n; i++){
    $('#holder').append(
      $('<div>')
        .attr('class', 'card-panel blue-grey darken-1')
        .attr('id', 'controls')
        .append(
          $('<img>')
            .attr('src', 'public/images/gear_'+i+'.png')
            .attr('class', 'gears')
          ,
          $('<br/>')
          ,
          $('<br/>')
          ,
          $('<button>')
          .attr('id', i)
          .attr('class','btn connect_btn')
          .text('CONNECT')
        )  
    )     
  }

  $('.btn').on('click', connect);
});

function connect(){
  var ip = controllers[this.id].ip;
  $.get('/select?ip='+ip, {
    method: 'GET',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept':'application/json'
      }
  })
  .then((res) => {
    if(res.status == '200')
      window.location.href='operation';
    else
      Materialize.toast("Error  ", 3000, 'red lighten-1');
  });
}


