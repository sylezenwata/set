import Set from '../src/index.js';

Set(document).ready(() => {
  Set('body').prepend(`<button>Load data</button>`)
  let ex = function() {
    Set('div').html('Fetching data...')
    Set.ajax(
      {
        url:    'https://jsonplaceholder.typicode.com/todos/1',
        method: 'GET',
        headers: {
          'Accept': false
        },
        // responseType: 'json'
      }
    )
    .then(
      res => Set('div').text(res)
    )
    .catch(
      e => console.log(e)
    )
    .finally(() => {
      Set('button').off('click', ex)
    })
  }
  Set('button').on('click', ex);
})