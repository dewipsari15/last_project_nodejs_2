const borrow = require("../controllers/Borrow"); 
 
const router = require("express").Router(); 
 
router.get("/", borrows.getAllBorrow); 
router.post("/:id", borrow.addBorrow); 
router.get("/:id", borrow.getOneBorrow); 
router.put("/:id", borrow.updateBorrow); 
router.delete("/:id", borrow.deleteBorrow); 
 
module.exports = router;
