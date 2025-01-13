// Async Function 

// async function getData(){
//     return "Hello World"
// }
// const data = getData()


// data.then((res)=>{
//     console.log(res)
// })


// Async await combo



    const p =  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello World From P")
        }, 20000)
    })



   const p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello World From  P1")
        }, 40000)
    })


function helloWorld(){
    const promise = p1

    promise.then((res)=>{
        console.log(res)
    })

    console.log("Hello World")
}


// helloWorld()


// async function sayHelloWorld(){


//     console.log("Hello World")
   
//     const val = await p    // Javascript wait here to resolve promise


//     console.log(val)


//     const val1 = await p1

//     console.log(val1)

// }

// sayHelloWorld()


 async function dataFetch(){
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await data.json()
    console.log(result)


    // data.then((res)=> {
    //     return res.json()
    // }).then((data)=>{
    //     console.log(data)
    // })
}



dataFetch()