import Invest from "../models/InvestModel";
const db = require("../models"); 
const Invest = db.Invest; 
 
// add Invest 
const addInvest = async (req, res) => { 
  const id = req.params.id; 
 
  let data = { 
    id: id, 
      userid: req.body.userid, 
      balance: req.body.balance, 
      date: req.body.date,  
  }; 
 
  const Invest = await Invest.create(data); 
  res.status(200).send(Invest); 
}; 
 
// get all Invest 
const getAllInvests = async (req, res) => { 
  const Invests = await Invest.findAll({ 
    order: [["created_at", "DESC"]], 
    include: [ 
        { 
            model: Invest, 
            as: "Invest", 
          }, 
    ], 
  }) 
  res.status(200).send(Invests); 
}; 
 
// get by id Invest 
const getOneInvest = async (req, res) => { 
    let id = req.params.id; 
    let Invest = await Invest.findByPk(id, { 
      include: [ 
        { 
          model: Invest, 
          as: "Invest", 
        }, 
      ], 
    }); 
    res.status(200).send(Invest); 
  }; 
 
  // update Invest 
  const updateInvest = async (req, res) => { 
    let id = req.params.id; 
   
    const Invest = await Invest.update(req.body, { where: { id: id } }); 
    if (Invest.affectedRows === 1) { 
      return res.json({ success: true }); 
    } 
   
    res.status(200).send(Invest); 
  }; 
 
  // delete Invest 
const deleteInvest = async (req, res) => { 
  let id = req.params.id; 
 
  await Invest.destroy({ where: { id: id } }); 
 
  res.status(200).send("Invest is deleted !"); 
}; 
 
module.exports = { 
    addInvest, 
  getAllInvests, 
  getOneInvest, 
  updateInvest, 
  deleteInvest, 
};
