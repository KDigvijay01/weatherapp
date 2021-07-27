const express=require('express')

const request =require("request")

const app=express()

app.use(express.json())



app.get('/api/weather/city/:name',(req, res)=>{

    const url=`http://api.openweathermap.org/data/2.5/weather?q=${req.params.name}&appid=7a3a697f5bd64e14c41e138a9f0ba418`
    
    request(url,(err, response,body)=>{
        const bodydata=JSON.parse(body)
        

        
        // res.status(200).send(orgData)
        console.log(bodydata.main.temp)
        const inttemp=JSON.stringify(bodydata.main.temp)
        res.send(inttemp)


    });
});

app.get('/',(req, res)=>{
    res.send("<h1>Hello</h1>")
})



// const url=`http://api.openweathermap.org/data/2.5/weather?q=Patna&appid=7a3a697f5bd64e14c41e138a9f0ba418`
    
//     request(`http://api.openweathermap.org/data/2.5/weather?q=Patna&appid=7a3a697f5bd64e14c41e138a9f0ba418`,(err, response,body)=>{
//         // const data=JSON.parse(response)
//         console.log(response)
//         console.log(body)
//         console.log(err)
//     })



const port=process.env.PORT ||8000;



app.listen(port,()=>{
    console.log(`Listenini TO Port No. ${port}...`)
});



// git add README.md
// git commit -m "first commit"

// git push -u origin main