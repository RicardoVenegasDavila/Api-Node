const express = require ('express')


const app = express ();


app.get('/', (req, res)=>{

res.json({
    ok: true,
    msg: 'todo bien',
    uid: 12345
})

})



app.listen(3000,()=>{

})
    console.log(`  servidor corriendo por el puerto ${3000} ` )