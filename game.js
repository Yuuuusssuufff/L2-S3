const body = document.body
body.style.background = 'yellow'
let wrapper = document.createElement('main')
wrapper.style.background = 'blue'
wrapper.style.height = '80vh'
wrapper.style.width = '60vw'
wrapper.innerText = 'Hello World'
wrapper.style.display = 'flex'
wrapper.style.justifyContent = 'center'
wrapper.style.alignItems = 'center'
wrapper.style.margin = 'auto'
body.appendChild(wrapper)

