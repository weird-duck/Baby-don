const boot=`ACCESSING CAMP HALF-BLOOD ARCHIVES...
IDENTITY DETECTED
FREYA
STATUS: DEMIGOD`;

let i=0;

function type(){

    if(i<boot.length){

        bootText.textContent+=boot[i++];

        setTimeout(type,30);

    }else{

        startBtn.classList.remove('hidden');

    }

}

type();

function nextScreen(id){

    document
        .querySelectorAll('.screen')
        .forEach(s=>s.classList.remove('active'));

    document
        .getElementById(id)
        .classList.add('active');

}

startBtn.onclick=()=>nextScreen('oracle');

const lines=[

"Welcome, Freya.",

"A sacred artifact has vanished.",

"Many heroes have tried.",

"They all failed.",

"Mostly because they were stupid.",

"I'm sincerely hoping you are not.",

"Good luck."

];

let d=0;

nextDialogue.onclick=()=>{

    if(d===0)
        dialogue.innerText=lines[0];

    else if(d<lines.length)
        dialogue.innerText=lines[d];

    else
        nextScreen('camp');

    d++;

};

let visited=new Set();

let coins=0;

function reward(name,msg){

    if(!visited.has(name)){

        visited.add(name);

        coins++;

        document
            .getElementById('coins')
            .innerText=coins;

    }

    eventBox.innerText=msg;

    if(coins>=5){

        olympusBtn.classList.remove('hidden');

    }

}

function visit(x){

    if(x==='bighouse')
        reward(
            x,
            "DOSSIER: Freya | POWERS: Pretty, Funny, Dangerous when hungry.",
            
        );

    if(x==='pine')
        reward(
            x,
            "THE PINE WHISPERS: A babi has gone free",
           
        );

    if(x==='amphi')
        reward(
            x,
            "Campfire stories unlocked. +1 Drachma."
        );

}

function startHellhound(){

    nextScreen('hellhound');

}

function hellhound(choice){

    hellhoundLog.innerText={

        attack:
        "You defeat the Hellhound.",

        rizz:
        "The Hellhound is confused and leaves.",

        run:
        "Chiron is disappointed."

    }[choice];

    if(!visited.has('hellhound')){

        visited.add('hellhound');

        coins++;

        document
            .getElementById('coins')
            .innerText=coins;

    }

    setTimeout(()=>{

        nextScreen('camp');

    },1500);

    if(coins>=5){

        olympusBtn.classList.remove('hidden');

    }

}

function startEmpusa(){

    nextScreen('empusa');

}

function empusa(choice){

    empusaLog.innerText={

        flirt:
        "GODDAMIT FREYA YOU'RE TRYING TO SEDUCE SOMEONE WHEN YOU'RE DATING ME",

        attack:
        "Smart. You survive.",

        chiron:
        "CHIRON: THAT IS LITERALLY AN EMPUSA."

    }[choice];

    if(!visited.has('empusa')){

        visited.add('empusa');

        coins++;

        document
            .getElementById('coins')
            .innerText=coins;

    }

    setTimeout(()=>{

        nextScreen('camp');

    },1500);

    if(coins>=5){

        olympusBtn.classList.remove('hidden');

    }

}

let floors=[100,250,400,550,600];

let fi=0;

function elevator(){

    floor.innerText='FLOOR '+floors[fi];

    fi++;

    if(fi>=floors.length){

        setTimeout(()=>{

            nextScreen('baby');

        },1000);

    }

}

let awake=100;

const msgs={

    hug:[

        "NOOOO NOT THE HUGS",

        "I AM BEING TRICKED INTO NINU",

        "I WILL NOT FALL TO NINU"

    ],

    kiss:[

        "The prophecy did not mention kisses",

        "I shall report this to .... Snort ",

        "Baby Don yawns"

    ],

    cuddle:[

        "Impossible... a cuddle combo",

        "My power weakens",

        "NINUUU"

    ],

    story:[

        "Once upon a time... wait no",

        "I have the power of naps",

        "mother I crave boobie"

    ]

};

function boss(type){

    let damage={

        hug:25,

        kiss:20,

        cuddle:30,

        story:35

    }[type];

    awake=Math.max(
        0,
        awake-damage
    );

    document
        .getElementById('sleep')
        .style.width=
        (100-awake)+'%';

    document
        .getElementById('awake')
        .innerText=
        'Awake: '+awake;

    let arr=msgs[type];

    bossLog.innerText=

        arr[
            Math.floor(
                Math.random()*arr.length
            )
        ];

    if(awake===0){

        bossLog.innerText=`
BABY DON:
okay maybe one more cuddle...

zzzzzz
`;

        setTimeout(()=>{

            nextScreen('ending');

        },2000);

    }

}