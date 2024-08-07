const express=require('express');
const app=express();
const PORT=process.env.PORT || 3001;    

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hola mundo2 HOLA MUNDO')
});


app.get('/hola',(req,res)=>{
    res.send('Api desde ruta hola')
});

app.get('/api',(req,res)=>{
    const data={
        message:'Api desde ruta api'   
    }
    res.json(data)
});

app.get('/api/usuario/:userID/:nombre',(req,res)=>{

    const id=req.params.userID;
    let saludo='HOLA '+req.params.nombre;
    if(id==='1'){
        saludo='HOLA AMIGO '+req.params.nombre
    }

    const jsonData={
        saludo:saludo
    }

    res.json(jsonData)
});  

app.post('/parametrospost',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
});
