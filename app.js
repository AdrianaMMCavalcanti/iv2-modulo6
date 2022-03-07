const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://api.github.com/users/ffavareto/repos')

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {

      const textResponse = xhr.responseText
      console.log(textResponse);  
    }
}
xhr.send()