(function() {
    var getTextColor = function(color) {
        if (color.length === 3) {
            color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
        }

        var r = parseInt(color.substr(0, 2), 16),
            g = parseInt(color.substr(2, 2), 16),
            b = parseInt(color.substr(4, 2), 16)

        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000

        return yiq >= 192 ? 'black' : 'white'
    }

    var addClass = function(node, name) {
        node.className += ' ' + name
    }

    var removeClass = function(node, name) {
        let classes = node.className.split(' ')

        classes.forEach(function(className, index) {
            if (className === name) {
                classes.splice(index, 1)
            }
        })

        node.className = classes.join(' ')
    }

    var main = document.getElementsByTagName('main')[0]

    themes.forEach(function(theme) {
        var section = document.createElement('section')

        var header = document.createElement('h2')

        var heading = document.createElement('span')

        heading.textContent = theme.name
        heading.title = 'Added on ' + theme.added.toDateString()

        header.appendChild(heading)

        if (theme.link) {
            var link = document.createElement('a')

            link.href = theme.link
            link.textContent = 'link'
            link.target = '_blank'

            header.appendChild(link)
        }

        if (theme.addedBy) {
            var author = document.createElement('a')

            author.href = theme.addedBy.link
            author.textContent = theme.addedBy.name.toLowerCase()
            author.target = '_blank'

            header.appendChild(author)
        }

        main.appendChild(header)

        for (x in theme.colors) {
            var color = theme.colors[x]

            var box = document.createElement('figure')

            box.style.backgroundColor = '#' + color
            box.textContent = '#' + color

            box.setAttribute('data-clipboard-text', box.textContent)

            box.onclick = function() {
                var node = this

                clearTimeout(node.timer)

                node.textContent = 'Copied'

                node.timer = setTimeout(function() {
                    node.textContent = '#' + color
                }, 2000)
            }

            box.className = getTextColor(color)

            section.appendChild(box)
        }

        main.appendChild(section)
    })
})()

window.onload = function() {
    new Clipboard('figure')
}
