const array = ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck','terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck','go out and eat', 'not read this', 'play more', 'trust no one']
const main= () => {
    const random_message = randomGenerator(array)
    console.log(`I don't know what it means but you have ${random_message}`)
}
const randomGenerator = array => {
    let len = array.length
    const randomIndex = Math.floor(Math.random()*len)
    return array[randomIndex]
}
main()