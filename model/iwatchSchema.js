const mongoose = require('mongoose');

const WSchema = new mongoose.Schema({
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
    Color: {
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
    
    Display :
        {
            type:String
        },
        Feature :
        {
            type:String
        },
        AdvancedFunctions :
        {
            type:String
        },
        BatteryLife :
        {
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
    WearableDeviceType:
        {
            type:String
        },
        CompatibleDevices:{
            type:String 
        },
        IdealFor:
        {
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
        HealthTracker:
        {
            type:String
        },
        ActivityTracker:
        {
            type:String
        },
        SmartAssistanceControl:
        {
            type:String
        },
        CompatibleOS:
        {
            type:String
        },
        Sensors:
        {
            type:String
        },
        DialShape:
        {
            type:String
        },
        CompatibleOS:
        {
            type:String
        },
        DialSize:
        {
            type:String
        },
        OnDeviceControlType:
        {
            type:String
        },
        BandMakeType:
        {
            type:String
        },
        BandColor:
        {
            type:String
        },
        ScreenSizeinCM:
        {
            type:String
        },
        Resolution:
        {
            type:String
        },
        ProcessorName:
        {
            type:String
        },
        InternalStorage:
        {
            type:String
        },
        SpeakerType:
        {
            type:String
        },
        WiFiSpecifications:
        {
            type:String
        },
        WiFiSupported:
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
        Technology:
        {
            type:String
        },
        BodyMaterial:
        {
            type:String
        },
        IPRating:
        {
            type:String
        },
})

const IWatchSchema = new mongoose.model('iwatches', WSchema);

module.exports = IWatchSchema;
