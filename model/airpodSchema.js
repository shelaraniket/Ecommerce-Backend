const mongoose = require('mongoose');

const PSchema = new mongoose.Schema({
    idnew: {
        type: Number,
        require:true
    },
    imageUrl: {
        type: String,
        require: true
    },
    imageUrl2: {
        type: String,
        require: true
    },
    imageUrl3: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    Rating: {
        type: String,
        require: true
    },
    
    Orientation :
        {
            type:String
        },
        Connectivity :
        {
            type:String
        },
        BatteryLife :
        {
            type:String
        },
        FastCharging :
        {
            type:String
        },
        NoiseCancellation :
        {
            type:String
        },
        VoiceAssistant:{
            type:String
        },
        Warranty:{
            type:String
        },
        ResistanceType:{
            type:String
        },
    tags: {
        type: Array,
    },
    DeviceType:
        {
            type:String
        },
        DeviceOrientation:{
            type:String 
        },
        Brand:
        {
            type:String
        },
        ModelSeries:
        {
            type:String
        },
        ModelNumber:
        {
            type:String
        },
        AudioType:
        {
            type:String
        },
        AudioQuality:
        {
            type:String
        },
        AudioTechnology:
        {
            type:String
        },
        EarpieceAdjustment:
        {
            type:String
        },
        DiaphragmFeatures:
        {
            type:String
        },
        CushionMaterial:
        {
            type:String
        },
        CompatibleOS:
        {
            type:String
        },
        CompatibleDevices:
        {
            type:String
        },
        MicrophoneAvailability:
        {
            type:String
        },
        NoofMicrophones:
        {
            type:String
        },
        VoiceGuidance:
        {
            type:String
        },
        AdditionalSmartFunctions:
        {
            type:String
        },
        BluetoothSupported:
        {
            type:String
        },
        BluetoothSpecifications:
        {
            type:String
        },
        StandardBatteryLife:
        {
            type:String
        },
        ChargingFeatures:
        {
            type:String
        },
})

const AirPodsSchema = new mongoose.model('airpods', PSchema);

module.exports = AirPodsSchema;
