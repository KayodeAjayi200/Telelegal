// all our socketServer stuff happens here

const io = require('./server').io;
const app = require('./server').app;

// const professionalAppointments = app.get('professionalAppointments)

const allKnownOffers = {};
//uniqueid
//offer
//proferssionalsfullnaem
//clientName
//apptDate
//offererIceCandidates
//answer
//amswererIceCAndidates

io.on('connection', socket=>{
    console.log(socket.id, "has connected")
    socket.on('newOffer',({offer, apptInfo})=>{
        //offer = sdp/type, apptInfo has the uuid that we can add to allKnownOffers
        //so that, the professional can find exactly the right allKnownOffers

        console.log(offer);
        console.log(apptInfo)
    })
})