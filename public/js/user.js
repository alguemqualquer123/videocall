class User {
    constructor(id) {
        this.id = id;
    }
    
    selfDestroy() {
        if(this.player) {
            this.player.remove()
        }

        if(this.pc) {
            this.pc.close()
            this.pc.onicecandidate = null
            this.pc.ontrack = null
            this.pc = null
        }
    }

    sendMessage(message) {
        if(this.dc) {
            this.dc.send(message)
        }
    }
}