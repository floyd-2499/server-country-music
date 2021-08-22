const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const instruments = [

            {
                "id" : 1,
                "count": 1,
                "item": "Mini - 2",
                "company" : "AKAI",
                "price" : "6455",
                "mrp" : "8455",
                "discount": "15",
                "category": "Keyboard",
                "img" : "akai"
            }, 
            {
                "id" : 2,
                "count": 1,
                "item": "Mini - 3",
                "company" : "AKAI",
                "price" : "4995",
                "mrp" : "6000",
                "discount": "15",
                "category": "Keyboard",
                "img" : "mini3"
            },
            {
                "id" : 3,
                "count": 1,
                "item": "PSR F51",
                "company" : "YAMAHA ",
                "price" : "7199",
                "mrp" : "9620",
                "discount": "10",
                "category": "Keyboard",
                "img" : "f51"
            },
            {
                "id" : 4,
                "count": 1,
                "item": "PSR E463",
                "company" : "YAMAHA",
                "price" : "17189",
                "mrp" : "22790",
                "discount": "10",
                "category": "Keyboard",
                "img" : "e463"
            },
            {
                "id" : 5,
                "count": 1,
                "item": "Casio KS47",
                "company" : "Casio",
                "price" : "7595",
                "mrp" : "10550",
                "discount": "10",
                "category": "Keyboard",
                "img" : "ks47"
            },
            {
                "id" : 6,
                "count": 1,
                "item": "Casio  KH38",
                "company" : "Casio",
                "price" : "22298",
                "mrp" : "27950",
                "discount": "10",
                "category": "Keyboard",
                "img" : "KH38"
            },
            {
                "id" : 7,
                "count": 1,
                "item": "XPS30",
                "company" : "Roland",
                "price" : "62298",
                "mrp" : "71500",
                "discount": "10",
                "category": "Keyboard",
                "img" : "roland"
            },
            {
                "id" : 8,
                "count": 1,
                "item": "Electric Bass Guitar",
                "company" : "Kadence",
                "price" : "13999",
                "mrp" : "19200",
                "discount": "27",
                "category": "Bass-Guitar",
                "img" : "KBass"
            },
            {
                "id" : 9,
                "count": 1,
                "item": "Electric Bass Guitar",
                "company" : "YAMAHA",
                "price" : "16625",
                "mrp" : "18990",
                "discount": "12",
                "category": "Bass-Guitar",
                "img" : "ybass"
            },
            {
                "id" : 10,
                "count": 1,
                "item": "FG800",
                "company" : "YAMAHA",
                "price" : "13999",
                "mrp" : "15999",
                "discount": "13",
                "category": "Acoustic Guitar",
                "img" : "yauc"
            },
            {
                "id" : 11,
                "count": 1,
                "item": "Acoustic Guitar",
                "company" : "Juarez",
                "price" : "2499",
                "mrp" : "6990",
                "discount": "64",
                "category": "Acoustic Guitar",
                "img" : "JAuc"
            },
            {
                "id" : 12,
                "count": 1,
                "item": "Wanderer - Ukulele",
                "company" : "Kadence",
                "price" : "2199",
                "mrp" : "3500",
                "discount": "37",
                "category": "Acoustic Guitar",
                "img" : "KUki"
            },
            {
                "id" : 13,
                "count": 1,
                "item": "PACIFICA012 - Black",
                "company" : "YAMAHA",
                "price" : "16199",
                "mrp" : "17990",
                "discount": "6",
                "category": "Electric Guitar",
                "img" : "yblack"
            },
            {
                "id" : 14,
                "count": 1,
                "item": "PACIFICA012 - Blue",
                "company" : "YAMAHA",
                "price" : "16199",
                "mrp" : "17990",
                "discount": "6",
                "category": "Electric Guitar",
                "img" : "yblue"
            },
            {
                "id" : 15,
                "count": 1,
                "item": "Frontier",
                "company" : "Kadence",
                "price" : "4999",
                "mrp" : "7000",
                "discount": "29",
                "category": "Acoustic Guitar",
                "img" : "KAuc"
            },
            {
                "id" : 16,
                "count": 1,
                "item": "JRZ-ST01",
                "company" : "Juarez",
                "price" : "5450",
                "mrp" : "14990",
                "discount": "64",
                "category": "Electric Guitar",
                "img" : "JEle"
            },
            {
                "id" : 17,
                "count": 1,
                "item": "XD80USB",
                "company" : "Behringer",
                "price" : "42990",
                "mrp" : "70000",
                "discount": "39",
                "category": "Electric Drum Set",
                "img" : "BXDEl"
            },
            {
                "id" : 18,
                "count": 1,
                "item": "DTXM12 Multi Pad",
                "company" : "YAMAHA",
                "price" : "44953",
                "mrp" : "50490",
                "discount": "11",
                "category": "Electric Drum Set",
                "img" : "YPad"
            },
            {
                "id" : 19,
                "count": 1,
                "item": "RS525SCC91",
                "company" : "Pearl",
                "price" : "45990",
                "mrp" : "48325",
                "discount": "5",
                "category": "Drum Set",
                "img" : "Pearl"
            },
            {
                "id" : 20,
                "count": 1,
                "item": "TD-1DMK",
                "company" : "Roland",
                "price" : "62919",
                "mrp" : "89821",
                "discount": "30",
                "category": "Electric Drum Set",
                "img" : "RolandEl"
            },
            {
                "id" : 21,
                "count": 1,
                "item": "SG58H5",
                "company" : "Tama ",
                "price" : "38999",
                "mrp" : "42999",
                "discount": "9",
                "category": "Drum Set",
                "img" : "Tama"
            },
            {
                "id" : 22,
                "count": 1,
                "item": "HV522",
                "company" : "Havana ",
                "price" : "22499",
                "mrp" : "28990",
                "discount": "22",
                "category": "Drum Set",
                "img" : "Havana"
            }
]
app.get('/instruments', (req, res) => {
    res.json(instruments)
})


app.listen(port, ()=> {
    console.log(port)
})