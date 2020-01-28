module.exports = {
    getProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        db.get_product(+id).then(response => {
            const data = response[0];
            res.status(200).send(data);
        });
    },

    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(data => res.status(200).send(data));
    },

    addProduct: (req, res) => {
        console.log('req.body', req.body);
        const db = req.app.get('db');
        const {img, name, price} = req.body;

        db.add_product([img, name, price]).then(() => res.sendStatus(200));
    },


    updateProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {img, name, price} = req.body;

        db.update_product([id, img, name, price]).then(() => res.sendStatus(200));
    },
  

    deleteProduct: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

        db.delete_product(id).then(data => res.status(200).send(data))
    }
}