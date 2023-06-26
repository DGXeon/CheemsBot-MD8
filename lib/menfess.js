let anonymous = {}

function createRoom(a, b) {
    let room = Object.values(anonymous).find(p => p.check(a))
    if (!!room) return !1
    let id = Date.now()
    anonymous[id] = {
        id: id,
        a: a,
        b: b,
        state: "CHATTING",
        check: function(p) {
            return [this.a, this.b].includes(p)
        },
        other: function(p) {
            return p == this.a ? this.b : p == this.b ? this.a : ""
        }
    }
    return Object.values(anonymous).find(p => p.check(a))
}

function leaveRoom(ab) {
    let room = Object.values(anonymous).find(p => p.check(ab))
    if (!room) return !1
    let other = room.other(ab)
    delete anonymous[room.id]
    return other
}

module.exports = { createRoom, leaveRoom, anonymous }