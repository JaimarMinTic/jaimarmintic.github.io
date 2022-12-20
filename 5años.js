document.body.addEventListener('mousemove', (e) => {
    const element = document.createElement('span')
    element.className= 'circle'

    element.style.left = e.clientX - 5 + 'px'
    element.style.top = e.clientY - 5 + 'px'

    document.body.append(element)

    setTimeout(() => {
        element.remove()
    }, 500)
    })

