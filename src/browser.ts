import Runtime from './index'

document.addEventListener('DOMContentLoaded', () => {
    let scripts = document.getElementsByTagName('script')

    for (let script of <any>scripts) {
        if (script.getAttribute('type') === 'application/origami') {
            let div = document.createElement('div')
            script.parentNode.insertBefore(div, script)

            let runtime = new Runtime()
            runtime.render(div)
            break
        }
    }
})
