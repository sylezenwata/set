import { set as $ } from '../dist/set.min.js';

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
      $('button').off('clcick', ex)
    })
  }
  $('button').on('click', ex);
})