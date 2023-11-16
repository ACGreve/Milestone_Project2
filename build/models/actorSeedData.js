"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a = require("express"), json = _a.json, response = _a.response;
//const Actor = require('../models/actor')
// async function actorSeed() {
//     await Actor.deleteMany()
//     let i = 1
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg0ZTQ0ZTFiNjJmMGU4MGFjY2VlOTVkOWE5MWNkMCIsInN1YiI6IjY0ZTY3OWJiN2Q1ZGI1MDBhY2VjNDk0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9wIi5b1fNA1B0_GBB8ZA6ubup9GpKgx0qYeyVx8-OE'
//         }
//       };
//       const response = await  fetch(`https://api.themoviedb.org/3/person/${i}?api_key=8a84e44e1b62f0e80accee95d9a91cd0`, options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));
//     const data = await response.json()
//     let nextUrl = `https://api.themoviedb.org/3/person/${(i + 1)}?api_key=8a84e44e1b62f0e80accee95d9a91cd0` 
//     const promises = actorUrl.map((actorUrl) => processActors(actorUrl))
//     const actor = await Promise.all(promises)
//     while(data.id != null){
//     const response = await fetch(`https://api.themoviedb.org/3/person/${i}?language=en-US`, options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
//         const data = await response.json()
//     const actors = await Actor.insertMany(data)
//     const actorIds = actors.map(actor => actor._id)
//     res.redirect('/actors')
//     i = i + 1
//     }
// }
// async function processActors(url) {
//     const response = await fetch(url)
//     const data = await response.json()
//     return {
//         biography: {
//             type: String
//         },
//         birthday: {
//             type: String
//         },
//         deathday: {
//             type: String
//         },
//         gender: {
//             type: Number
//         },
//         name: {
//             type: String
//         },
//         place_of_birth: {
//             type: String
//         },
//         popularity: {
//             type: Number
//         }
//     }
// }
// module.exports = {
//     actorSeed
// }
function actorSeed() {
    return __awaiter(this, void 0, void 0, function () {
        var options, promises, i, response_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg0ZTQ0ZTFiNjJmMGU4MGFjY2VlOTVkOWE5MWNkMCIsInN1YiI6IjY0ZTY3OWJiN2Q1ZGI1MDBhY2VjNDk0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9wIi5b1fNA1B0_GBB8ZA6ubup9GpKgx0qYeyVx8-OE'
                        }
                    };
                    promises = {};
                    i = 1;
                    _a.label = 1;
                case 1:
                    if (!(i <= 2000)) return [3 /*break*/, 4];
                    return [4 /*yield*/, fetch('https://api.themoviedb.org/3/trending/person/week?language=en-US', options)
                            .then(function (response) { return response.json(); })
                            .then(function (response) { return promises = response; })
                            //.then(response => console.log(response))
                            //.then(response => promises.push(response))
                            .then(console.log(promises))
                        //}
                    ];
                case 2:
                    response_1 = _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// async function actorSeed(){
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg0ZTQ0ZTFiNjJmMGU4MGFjY2VlOTVkOWE5MWNkMCIsInN1YiI6IjY0ZTY3OWJiN2Q1ZGI1MDBhY2VjNDk0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b9wIi5b1fNA1B0_GBB8ZA6ubup9GpKgx0qYeyVx8-OE'
//     }
//   };
//   fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// }
module.exports = {
    actorSeed: actorSeed
};
