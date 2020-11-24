var app = require("../app")
var request = require("supertest")
var mongoose = require('mongoose')
var HoteModel = require('../bdd/SchemaHote');
var eventModel = require('../bdd/SchemaEvent')
var tourdevoteModel = require('../bdd/SchemaTourdevote')
var topModel = require('../bdd/SchemaTop');
var playlistModel = require('../bdd/SchemaPlaylistTitresProposes');
const { TestScheduler } = require("jest");

//  --------------------TEST INITIAL de mise en place de jest  --------------------
// describe('pack', function(){
  
//   test('demo somme', function(){
//     const somme = 5 + 2
//     expect(somme).toBe(7)
//   })
//   test('demo somme', function(){
//     const somme = 5 + 2
//     expect(somme).toBe(8)
//   })


// })

// -------------------- TEST de la route INDEX  --------------------
// describe('test route /', function (){
//   test('test get ok', async(done) => {
//     await request(app).get("/")
//     .expect(200)
//     .expect({title: 'Express'})
//    done()
//   })
//   test('test get non ok', async(done) => {
//     await request(app).get("/")
//     .expect(200)
//     .expect({title: 'Non Express'})
//    done()
//   })
//   test('erreur page', async(done) => {
//     await request(app).get("/efgerf")
//     .expect(404)
//    done()
//   })
// })

//-------------------- TEST SignUP  --------------------

  //   beforeAll(async () => {
  //   var options = {
  //     connectTimeoutMS: 5000,
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  // }
  //   mongoose.connect('mongodb+srv://admin:30094561@cluster0.xutoc.mongodb.net/EveryOneIsTheDJ?retryWrites=true&w=majority', 
  //   options,
  //   function(err){
  //     console.log(err)
  // }
  //   )
  // })
  
  //   describe( 'test de la route signup', function () {
  //      test("enregistrement d'un nouvel user en base de donnée s'il est inexistant", async (done) => {
  //     const res = await request(app).post("/sign-up")
    
  //     .send({
  //       username: 'fgg',
  //       email: 'fgg'
  //     })
    
  //       const user = await User.findOne({ email: 'fgg' })
    
  //       expect(user.body.username).resolves.toBeTruthy()
  //       expect(user.body.email).resolves.toBeTruthy()
    
  //     done()
      
  //     })

  //  })
   


    //-------------------- TEST SignIN  --------------------

    // beforeAll(async () => {
    //   var options = {
    //     connectTimeoutMS: 5000,
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // }
    //   mongoose.connect('mongodb+srv://admin:30094561@cluster0.xutoc.mongodb.net/EveryOneIsTheDJ?retryWrites=true&w=majority', 
    //   options,
    //   function(err){
    //     console.log(err)
    // }
    //   )
    // })

    // afterAll(async() => {
    //   await mongoose.connection.close()
    // })

    // describe('test route /sign-in', function (){
    //   test('verification de user dans bdd sign-in', async(done) => {
    //       await request(app).post("/sign-in")
    
    //   .send({
    //     email: 'fgg',
       
    //   })
    
    //     const user = await User.findOne({ email: 'fgg' })
    
    //     expect(user.body.email).resolves.toBeTruthy()
  
    
    //   done()
      
    //   })
    //      test('verification de user non existant dans bdd sign-in', async(done) => {
    //         await request(app).post("/sign-in")
      
    //     .send({
    //       email: 'ze@ze',
          
    //     })
      
    //       const user = await User.findOne({ email: 'ze@ze' })
      
    //   expect(user.body.email).resolves.toBeUndefined()
    
      
    //     done()
        
    //     })

    // })


//  -------------------- TEST Event Ceation   --------------------


    beforeAll(async () => {
      const url = `mongodb+srv://admin:30094561@cluster0.xutoc.mongodb.net/EveryOneIsTheDJ?retryWrites=true&w=majority`
      await mongoose.connect(url, { useNewUrlParser: true })
    })
  
  describe ('test de la route eventCreation', function(){
   test("eventCreation non existant", async (done) => {
      var test = await request(app).post("/eventCreation")

      .send({
        nameEvent: 'Test',
        password: 'Test'
      })

        const user = await User.findOne({ nameEvent: 'Test', password: "Test" })
        
        expect(user.nameEvent).toBeTruthy()
        expect(user.password).toBeTruthy()

      done()
      
      })
      test("eventCreation  existant", async (done) => {
        var test = await request(app).post("/eventCreation")
  
        .send({
          nameEvent: 'Anniv',
          password: 'Anniv'
        })
  
          const user = await User.findOne({ nameEvent: 'Anniv', password: "Anniv" })
          
          expect(user.nameEvent).toBeTruthy()
          expect(user.password).toBeTruthy()
  
        done()
        
        })
})
   


