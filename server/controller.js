module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory().then(data => res.status(200).send(data));
    },

    addProduct: (req, res) => {
        const db = req.app.get('db');
        const {name, price, img} = req.body;

        db.add_product([name, price, img]).then(() => res.sendStatus(200));
    },

    

    // updateInventory: (req, res) => {
    //     const db = req.app.get('db');
    //     const {id} = req.params;
    //     const {name, price, img} = req.body;
    
    //     db.

    //     db.delete_inventory
        
    // },

    deleteInventory: (req, res) => {
        
    }
}