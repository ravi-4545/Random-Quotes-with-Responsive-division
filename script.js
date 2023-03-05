const quotes=[
    {
        quote:`I try to take one day at a time, but sometimes several days attack me at once.`,
        auth:`- Ashleigh Brilliant`
    },
    {
        quote:`Laughter is a wonderful way to add years to your life, and life to your years.`,
        auth:`- Joel Goodman`
    },
    {
        quote:`Blessed are we who can laugh at ourselves, for we shall never cease to be amused.`,
        auth:`- Joel Goodman`
    },
    {
        quote:`Time is the great teacher, but unfortunately it kills all of it's students.`,
        auth:`- Hector Berlioz`
    },
    {
        quote:`Reality is the leading cause of stress amongst those in touch with it.  I can take it in small doses, but as a lifestyle I find it too confining.`,
        auth:`- Lily Tomlin`
    },
    {
        quote:`Love may make the world go around, but it's laughter that keeps us from getting dizzy.`,
        auth:`- Donald  Zochert`
    },
    {
        quote:`Fear is that little darkroom where negatives are made.`,
        auth:`- Micheal Pritchard`
    },
    {
        quote:`You don't stop laughing because you grow old, you grow old because you stop laughing.`,
        auth:`- Micheal Pritchard`
    }

]


const displayele=document.querySelector('.display')
const authorele=document.querySelector('#author')
const btn=document.querySelector('#generate')

const randomq=()=>{
    let index= Math.floor(Math.random()*(quotes.length))
    displayele.innerHTML=quotes[index].quote
    authorele.innerHTML='~'+quotes[index].auth
}

btn.addEventListener('click',randomq)