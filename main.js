var files = []
$(document).ready(function(){
  $('form input').change(function () {
    document.getElementById("files").innerHTML = "";
    files = Array.from(this.files);
    if(this.files.length == 0) {
      $('.text').text('No files Selected');
    }
    if(this.files.length == 1) {
      $('.text').text('One file Selected');
      var div = document.createElement("div");
      var node = document.createElement("p");
      var trash = document.createElement("i");
      trash.setAttribute("class", "fas fa-trash trash")
      node.setAttribute("class", "file");
      div.setAttribute("class", "file-wrapper");
      var textnode = document.createTextNode(this.files[0].name);
      node.appendChild(textnode);
      div.appendChild(node);
      div.appendChild(trash);
      document.getElementById("files").appendChild(div);
    }
    if(this.files.length > 1) {
      $('.text').text(this.files.length + ' files selected');
      Array.prototype.forEach.call(this.files, file => {
        var div = document.createElement("div");
        var node = document.createElement("p");
        var trash = document.createElement("i");
        trash.setAttribute("class", "fas fa-trash trash")
        node.setAttribute("class", "file");
        div.setAttribute("class", "file-wrapper");
        var textnode = document.createTextNode(file.name);
        node.appendChild(textnode);
        div.appendChild(node);
        div.appendChild(trash);
        document.getElementById("files").appendChild(div);
      })
    }
  });

  $('#files').click(function(e) { 
    var $target = $(e.target);
    if ($target.hasClass("file")) {
      console.log($target[0].innerHTML)
      console.log(files)
      var index = files.findIndex(file => file.name == $target[0].innerHTML)
      console.log(index);
      files.splice(index, 1)
      if(files.length == 0) {
        $('.text').text('No files Selected');
        document.getElementById("files").innerHTML = ''
      }
      if(files.length == 1) {
        $('.text').text('One file Selected');
        document.getElementById("files").innerHTML = ''
        var div = document.createElement("div");
        var node = document.createElement("p");
        var trash = document.createElement("i");
        trash.setAttribute("class", "fas fa-trash trash")
        node.setAttribute("class", "file");
        div.setAttribute("class", "file-wrapper");
        var textnode = document.createTextNode(files[0].name);
        node.appendChild(textnode);
        div.appendChild(node);
        div.appendChild(trash);
        document.getElementById("files").appendChild(div);
      }
      if(files.length > 1) {
        $('.text').text(files.length + ' files selected');
        document.getElementById("files").innerHTML = ''
        Array.prototype.forEach.call(files, file => {
          var div = document.createElement("div");
          var node = document.createElement("p");
          var trash = document.createElement("i");
          trash.setAttribute("class", "fas fa-trash trash")
          node.setAttribute("class", "file");
          div.setAttribute("class", "file-wrapper");
          var textnode = document.createTextNode(file.name);
          node.appendChild(textnode);
          div.appendChild(node);
          div.appendChild(trash);
          document.getElementById("files").appendChild(div);
        })
      }
    }
  });
});

function upload() {
  if(files.length == 0) {
    $('.message p').css('background', 'red')
    $('.message p').text('Please select files')
  }
  
  if(files.length >0) {
    $('.message p').css('background', 'green')
    $('.message p').text('Upload completed')
  }

  files = []
  if(files.length == 0) {
    $('.text').text('No files Selected');
    document.getElementById("files").innerHTML = ''
  }

  $('.message').css('visibility', 'visible')
  setTimeout(() => {
    $('.message').css('visibility', 'hidden')
  }, 3000)
}