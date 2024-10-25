// import mongoose from 'mongoose';

// const listingSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         description: {
//             type: String,
//             required: true,
//         },
//         address: {
//             type: String,
//             required: true,
//         },
//         nearbyPlaces: {
//             type: String,
//             required: true,
//         },
//         price: {
//             type: Number,
//             required: true,
//         },
//         area: {
//             type: Number,
//             required: true,
//         },
//         bathrooms: {
//             type: Number,
//             required: true,
//         },
//         bedrooms: {
//             type: Number,
//             required: true,
//         },
        
//         options: {
//             type: String,
//             required: true,
//         },
        
//         imageUrls: {
//             type: Array,
//             required: true,
//         },
//         userRef: {
//             type: String,
//             required: true,
//         },
//     },
//     { timestamps: true }
// );

// const Listing = mongoose.model('Listing', listingSchema);

// export default Listing;

import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    address: { type: String },
    nearbyPlaces: { type: String },
    price: { type: Number },
    area: { type: Number },
    bathrooms: { type: Number },
    bedrooms: { type: Number },
    options: { type: String },
    imageUrls: { type: [String] },
    Threedmodel:{type:String},
    userRef: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const Listing = mongoose.model('Listing', listingSchema);
export default Listing;
