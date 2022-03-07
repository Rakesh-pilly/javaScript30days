

window.addEventListener('keydown', (e)=> {

        const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`);
        const key =  document.querySelector(`.key[data-key ="${e.keyCode}"]`);
        if(!audio) return null;
        audio.currentTime = 0;
        audio.play();

        key.classList.add('playing');



        console.log(audio)

})


const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', function(e) {

    if(e.propertyName !== 'transform') return ;

    console.log(this)

    this.classList.remove('playing');

}));
