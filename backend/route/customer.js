const Customer = require('../model/customer')

const route = (app) => {
  app.post("/book", async (req, res) => {
    console.log("anything")
    const { name, surname, email, dietary } = req.body
    const customer = new Customer({
      name: name,
      surname: surname,
      email: email,
      dietary: dietary
    })
    try {
      const savedCustomer = await customer.save();
      res.send(savedCustomer);
    } catch (error) {
      res.send(error);
    }
  })
}

// router.get("/", async (req, res) => {
//     try {
//       const customer = await Customer.find();
//       res.send(customer);
//     } catch (error) {
//       res.send(error);
//     }
//   });

module.exports = { route }