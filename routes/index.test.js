var app = require("../app")
var request = require("supertest")
var mongoose = require('mongoose')
var HoteModel = require('../bdd/SchemaHote');
var eventModel = require('../bdd/SchemaEvent')
var tourdevoteModel = require('../bdd/SchemaTourdevote')
var topModel = require('../bdd/SchemaTop');
var playlistModel = require('../bdd/SchemaPlaylistTitresProposes');
const { TestScheduler } = require("jest");
const { ExpectationFailed } = require("http-errors");

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

// -------------------- TEST Event Ceation   --------------------


// beforeAll(async () => {
//   const url = `mongodb+srv://admin/30094561@cluster0.xutoc.mongodb.net/EveryOneIsTheDJ?retryWrites=true&w=majority`
//   await mongoose.connect(url, { useNewUrlParser: true })
// })

// test("eventCreation", async (done) => {
//   var test = await request(app).post("/eventCreation")

//   .send({
//     "name": 'Test',
//     "email": 'testing@gmail.com'
//   })

//     const user = await User.findOne({ email: 'testing@gmail.com' })

//     expect(user.name).toBeTruthy()
//     expect(user.email).toBeTruthy()

//   done()
  
//   })

//-------------------- TEST SignUP  --------------------
    beforeAll(async () => {
      const url = `mongodb+srv://admin/30094561@cluster0.xutoc.mongodb.net/EveryOneIsTheDJ?retryWrites=true&w=majority`
      await mongoose.connect(url, { useNewUrlParser: true })
    })
    
    test("timer", async (done) => {
      const res = await request(app).post("/sign-up")
    
      .send({
        name: 'f',
        email: 'f'
      })
    
        const user = await User.findOne({ email: 'f' })
    
        expect(user.body.name).resolves.toBeTruthy()
        expect(user.body.email).resolves.toBeTruthy()
    
      done()
      
      })


  // -------------------- TEST Affiche Timer   --------------------

  // beforeAll(async () => {
  //   const url = `mongodb+srv://admin/30094561@cluster0.xutoc.mongodb.net/EveryOneIsTheDJ?retryWrites=true&w=majority`
  //   await mongoose.connect(url, { useNewUrlParser: true })
  // })
  
  // test("timer", async (done) => {
  //   const res = await request(app).post("/getEventName")
  
  //   .send({
  //     idUserFromFront: '5fa427a454f33488340d2432'
  //   })
  //   .expect(200)
  //   .expect({result: "Anniv"})
  
  //   done()
    
  //   })

