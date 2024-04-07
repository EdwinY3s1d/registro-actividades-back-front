const express = require('express');
const cors = require('cors');
const Service = require('./src/service');

const app = express();
app.use(cors());
const port = 5500;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Lista de Actividades',
        body: Service.getActvities(),
    })
    });

app.get('/:id', (req, res) => {
    let {params : {id}} = req
    let user=Service.getUser(id)
    res.json({
        message: `usuario ${id}`,
        body: user,
        })
    });

app.post('/', (req, res) => {
    let {body:newUser} = req
    res.status(201).json({
        message: 'Personaje creado',
        body: Service.createUser(newUser),
    })
    });

    app.put('/:id', (req, res) => {
        let { params: { id }, body: updatedUser } = req;
        let user = Service.updateUser(id, updatedUser);
        
        if (user) {
            res.json({
                message: `Personaje ${id} actualizado`,
                body: user,
            });
        } else {
            res.status(404).json({
                message: `Personaje ${id} no encontrado`,
            });
        }
    });

    app.delete('/:id', (req, res) => {
        let { params: { id } } = req;
        let user = Service.deleteUser(id);
        
        if (user) {
            res.json({
                message: `Personaje ${id} eliminado`,
                body: user,
            });
        } else {
            res.status(404).json({
                message: `Personaje ${id} no encontrado`,
            });
        }
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    });