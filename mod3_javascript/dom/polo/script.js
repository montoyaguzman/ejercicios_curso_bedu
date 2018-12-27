function onDocumentLoaded(event) {
  const div = document.getElementById('div_p_root')
  const div2 = document.getElementById('p_root')
  const root = document.getElementById('root')

  const elements = [div,div2,root,document,window]

  elements.forEach(element => {
    element.addEventListener('click', function(event){console.log(event.currentTarget)})
  })
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded)
