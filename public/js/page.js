function showLoading() {
    showPanel('loading')
    hidePanel('fail')
    hidePanel('connect')
    hidePanel('players')
}

function showFail() {
    hidePanel('loading')
    showPanel('fail')
    hidePanel('connect')
    hidePanel('players')
}

function showForm() {
    hidePanel('loading')
    hidePanel('fail')
    showPanel('connect')
    hidePanel('players')
}

function showPlayers() {
    hidePanel('loading')
    hidePanel('fail')
    hidePanel('connect')
    showPanel('players')
}

function addVideoPlayer(stream) {
    var template = new DOMParser().parseFromString('<div class="col"><div class="videoWrapper card"><video class="responsive-video" autoplay></video></div></div>', 'text/html')
    template.getElementsByTagName('video')[0].srcObject = stream
    var  divPlayer = template.body.childNodes[0]
    document.getElementById('players-row').appendChild(divPlayer)
    return divPlayer
}

function hidePanel(name) {
    document.getElementById(name).classList.add("hide")
}

function showPanel(name) {
    document.getElementById(name).classList.remove("hide")
}

function setLocalPlayerStream() {
    document.getElementById('local-player').srcObject = myStream
    document.getElementById('preview-player').srcObject = myStream
}

function removeAllMessages() {
    var parent = document.getElementById('message-printer')
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addMessage(message) {
    var parent = document.getElementById('message-printer')
    var p = document.createElement('p')
    p.innerHTML = message

    parent.appendChild(p)
}