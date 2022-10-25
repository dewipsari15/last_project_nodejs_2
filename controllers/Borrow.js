import borrow from "../models/BorrowModel";
const db = require("../models"); 
const Borrow = db.borrow; 
 
// add Borrow 
const addBorrow = async (req, res) => { 
  const id = req.params.id; 
 
  let data = { 
    id: id, 
      userid: req.body.userid, 
      balance: req.body.balance, 
      date: req.body.date,  
  }; 
 
  const Borrow = await Borrow.create(data); 
  res.status(200).send(Borrow); 
}; 
 
// get all Borrow 
const getAllBorrows = async (req, res) => { 
  const Borrows = await Borrow.findAll({ 
    order: [["created_at", "DESC"]], 
    include: [ 
        { 
            model: Borrow, 
            as: "Borrow", 
          }, 
    ], 
  }) 
  res.status(200).send(Borrows); 
}; 
 
// get by id Borrow 
const getOneBorrow = async (req, res) => { 
    let id = req.params.id; 
    let Borrow = await Borrow.findByPk(id, { 
      include: [ 
        { 
          model: Borrow, 
          as: "Borrow", 
        }, 
      ], 
    }); 
    res.status(200).send(Borrow); 
  }; 
 
  // update Borrow 
  const updateBorrow = async (req, res) => { 
    let id = req.params.id; 
   
    const Borrow = await Borrow.update(req.body, { where: { id: id } }); 
    if (Borrow.affectedRows === 1) { 
      return res.json({ success: true }); 
    } 
   
    res.status(200).send(Borrow); 
  }; 
 
  // delete Borrow 
const deleteBorrow = async (req, res) => { 
  let id = req.params.id; 
 
  await Borrow.destroy({ where: { id: id } }); 
 
  res.status(200).send("Borrow is deleted !"); 
}; 
 
module.exports = { 
    addBorrow, 
  getAllBorrows, 
  getOneBorrow, 
  updateBorrow, 
  deleteBorrow, 
};
