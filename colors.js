var themes = [
    {
        name: 'Facebook Messenger',
        link: 'https://www.messenger.com',
        colors: '1787FB,689ACA,31CEF3,4BBEC6,27CD2B,6AB76B,FDC22D,FD7E37,D3A88E,F73F51,E48687,FD5FA1,D597BA,764FFB,A696C5'.split(','),
        added: new Date(2017, 1, 6),
        addedBy: {
            name: 'Ali Zahid',
            link: 'http://alizahid.net'
        }
    }, {
        name: 'iOS',
        link: 'https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/',
        colors: 'FF3B30,FF9500,FFCC00,4CD964,5AC8FA,007AFF,5856D6,FF2D55'.split(','),
        added: new Date(2017, 1, 6),
        addedBy: {
            name: 'Ali Zahid',
            link: 'http://alizahid.net'
        }
    }, {
        name: 'SkyAdventures',
        link: 'https://dribbble.com/shots/2066288-SkyAdventures-Iconset-Palette',
        colors: '0075FF,00B7D6,02D2B0,E79F00,FF7143'.split(','),
        added: new Date(2016, 2, 6),
        addedBy: {
            name: 'Ali Zahid',
            link: 'http://alizahid.net'
        }
    }, {
        name: 'Translateur',
        link: 'https://translateur.co',
        colors: 'd54400,949c27,367c86,3a9bc9,edb630,ee8360,367c86,ce4e92,a58162,8080b4,4d8300,9f0b35,633'.split(','),
        added: new Date(2015, 2, 6),
        addedBy: {
            name: 'Ali Zahid',
            link: 'http://alizahid.net'
        }
    }, {
        name: 'Grays',
        colors: 'f6f7f8,ecf0f1,e6e9e9,bdc3c7'.split(','),
        added: new Date(2014, 1, 13),
        addedBy: {
            name: 'Ali Zahid',
            link: 'http://alizahid.net'
        }
    }, {
        name: 'Stacking Order',
        colors: 'b377bf,8277bf,5081c2,54c3ac,a5c24d,e8953e,e74139'.split(','),
        added: new Date(2014, 8, 30),
        addedBy: {
            name: 'Ali Zahid',
            link: 'http://alizahid.net'
        }
    }, {
        name: 'Flat UI',
        link: 'https://designmodo.github.io/Flat-UI',
        colors: '1abc9c,16a085,2ecc71,27ae60,3498db,2980b9,9b59b6,8e44ad,34495e,2c3e50,f1c40f,f39c12,e67e22,d35400,e74c3c,c0392b,ecf0f1,bdc3c7,95a5a6,7f8c8d'.split(','),
        added: new Date(2014, 3, 29),
        addedBy: {
            name: 'Ali Zahid',
            link: 'http://alizahid.net'
        }
    }, {
        name: 'Origin of Common UI Symbols',
        link: 'https://readymag.com/shuffle/ui-symbols/',
        colors: '28a0a0,3a61e0,61523d,d37c39,8e8485,1e7c7f,228446,995d98,34495e'.split(','),
        added: new Date(2014, 3, 28),
        addedBy: {
            name: 'Ali Zahid',
            link: 'http://alizahid.net'
        }
    }, {
        name: 'Captain Icon',
        link: 'http://mariodelvalle.github.io/CaptainIconWeb/',
        colors: 'f6e5d0,e6c7b9,d3807b,c5e3c7,bfe1dd,8c4a62,594255,726873,bfb2a3,c0c0c0'.split(','),
        added: new Date(2014, 4, 2),
        addedBy: {
            name: 'Ali Zahid',
            link: 'http://alizahid.net'
        }
    }
]

window.onload = function() {
    for (i in themes) {
        var theme = themes[i]

        var section = document.createElement('section')

        var heading = document.createElement('h2')
        heading.textContent = theme.name
        heading.title = 'Added on ' + theme.added.toDateString()

        if (theme.link) {
            var link = document.createElement('a')
            link.href = theme.link
            link.textContent = 'link'
            link.target = '_blank'

            heading.appendChild(link)
        }

        if (theme.addedBy) {
            var author = document.createElement('a')
            author.href = theme.addedBy.link
            author.textContent = theme.addedBy.name.toLowerCase()
            author.target = '_blank'

            heading.appendChild(author)
        }

        document.body.appendChild(heading)

        for (x in theme.colors) {
            var color = theme.colors[x]

            var box = document.createElement('figure')
            box.style.backgroundColor = '#' + color
            box.textContent = '#' + color

            box.onclick = function() {
                prompt('Copy hex code', this.textContent.toUpperCase())
            }

            box.className = getTextColor(color)

            section.appendChild(box)
        }

        document.body.appendChild(section)
    }
}

var getTextColor = function(color) {
    if (color.length === 3) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2]
    }

    var r = parseInt(color.substr(0, 2), 16),
        g = parseInt(color.substr(2, 2), 16),
        b = parseInt(color.substr(4, 2), 16)

    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000

    return yiq >= 192
        ? 'black'
        : 'white'
}
