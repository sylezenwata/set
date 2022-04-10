import { set as $ } from '../src/index.js';

$(document).ready(() => {
  $('body').prepend(`<button>Load data</button>`)
  let ex = () => {
    $('div').html('Fetching data...')
    $.ajax(
      {
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        method: 'GET',
        headers: {
          'Accept': false
        },
        // responseType: 'json'
      }
    )
    .then(
      res => $('div').text(res)
    )
    .catch(
      e => console.log(e)
    )
    .finally(() => {
      $('button').off('click', ex)
    })
  }
  $('button').on('click', ex);
})