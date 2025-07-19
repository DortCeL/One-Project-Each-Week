# start: 
19 July saturday
# end: 
25 july friday



### Key takeaways

* First day of building:
    * 1
    init(){} in game.js is a common game dev pattern where constructor() sets up initial properties and objects, update() runs every frame and draw() renders everything on the screen

    so in main.js   notice how  requestAnimationFrame(update) AKA the game loop is called after init(){}

    inside init there's usually : 
    init() { 
        // this.setupAudio();
        // this.setupUI();
        etc....
    }

    * 2
    multiple input key for same thing er jonno array ['ArrowLeft', 'a']

    