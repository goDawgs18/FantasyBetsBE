// import { MongoClient } from 'mongodb';
// import { Double } from 'mongodb';
import mongoose, { Mongoose } from 'mongoose';

interface IbetOffering {
    type: string;       // Player, game winner, total game points, etc
    odds: Number;       // odds for payout
    subject: string;    // warriors, steph curry, Cooper Kupp
    objective: string;  // win, over, under
    valid: boolean;
}

interface betOfferingInterface extends mongoose.Model<BetOfferingDoc> {
    build(attr: IbetOffering): BetOfferingDoc
}

interface BetOfferingDoc extends mongoose.Document {
    type: string;       // Player, game winner, total game points, etc
    odds: Number;       // odds for payout
    subject: string;    // warriors, steph curry, Cooper Kupp
    objective: string;  // win, over, under
    valid: boolean;
}

const betOfferingSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    odds: {
        type: Number,
        required: true
    }, 
    subject: {
        type: String,
        required: true
    },
    objective: {
        type: String,
        required: true
    },
    valid: {
        type: Boolean,
        requred: true,
        default: true
    }
});

module.exports = mongoose.model('BetOffering', betOfferingSchema);
// module.exports = BetOffering;
// betOfferingSchema.statics.build = (attr : IbetOffering) => {
//     return new BetOffering(attr)
// }


// const BetOffering = mongoose.model<BetOfferingDoc, betOfferingInterface>('BetOffering', betOfferingSchema);

// BetOffering.build({
//     type: "Default type",
//     odds: 1.0,
//     subject: "Default subject",
//     objective: "Default objective",
//     valid: false
// })

// // betOffering.build()
// function testFunc(stringVal: string) {
//     // await mongoose.connect(url);
//     return "testFunctionRan";
// }


