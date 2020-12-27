var a = document.getElementById("a")
var s = document.getElementById("s")
var d = document.getElementById("d")
var f = document.getElementById("f")
var g = document.getElementById("g")
var h = document.getElementById("h")
var j = document.getElementById("j")
var k = document.getElementById("k")
var l = document.getElementById("l")

var aSound = new Audio("./sounds/clap.wav")
var sSound = new Audio("./sounds/boom.wav")
var dSound = new Audio("./sounds/hihat.wav")
var fSound = new Audio("./sounds/kick.wav")
var gSound = new Audio("./sounds/openhat.wav")
var hSound = new Audio("./sounds/ride.wav")
var jSound = new Audio("./sounds/snare.wav")
var kSound = new Audio("./sounds/tink.wav")
var lSound = new Audio("./sounds/tom.wav")

document.body.addEventListener("keydown", function(e){
    var keyCode = e.keyCode
    if(keyCode == 65){
        aSound.play()
        a.classList.add("yellow")
    }
    if(keyCode == 83){
        sSound.play()
        s.classList.add("yellow")
    }
    if(keyCode == 68){
        dSound.play()
        d.classList.add("yellow")
    }
    if(keyCode == 70){
        fSound.play()
        f.classList.add("yellow")
    }
    if(keyCode == 71){
        gSound.play()
        g.classList.add("yellow")
    }
    if(keyCode == 72){
        hSound.play()
        h.classList.add("yellow")
    }
    if(keyCode == 74){
        jSound.play()
        j.classList.add("yellow")
    }
    if(keyCode == 75){
        kSound.play()
        k.classList.add("yellow")
    }
    if(keyCode == 76){
        lSound.play()
        l.classList.add("yellow")
    }
})
document.body.addEventListener("keyup", function(e){
    var keyCode = e.keyCode
    if(keyCode == 65){
        aSound.play()
        a.classList.remove("yellow")
    }
    if(keyCode == 83){
        sSound.play()
        s.classList.remove("yellow")
    }
    if(keyCode == 68){
        dSound.play()
        d.classList.remove("yellow")
    }
    if(keyCode == 70){
        fSound.play()
        f.classList.remove("yellow")
    }
    if(keyCode == 71){
        gSound.play()
        g.classList.remove("yellow")
    }
    if(keyCode == 72){
        hSound.play()
        h.classList.remove("yellow")
    }
    if(keyCode == 74){
        jSound.play()
        j.classList.remove("yellow")
    }
    if(keyCode == 75){
        kSound.play()
        k.classList.remove("yellow")
    }
    if(keyCode == 76){
        lSound.play()
        l.classList.remove("yellow")
    }
})