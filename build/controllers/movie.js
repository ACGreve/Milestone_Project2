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
var movies = require('express').Router();
var actorSeed = require('../models/actorSeedData').actorSeed;
var Movie = require('../models/movie');
var movieseedData = require('../models/movieSeedData');
//Seed data route
movies.get('/data/seed', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var movies, movieIds;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all([Movie.deleteMany()])];
            case 1:
                _a.sent();
                return [4 /*yield*/, Movie.insertMany(movieseedData)];
            case 2:
                movies = _a.sent();
                movieIds = movies.map(function (movie) { return movie._id; });
                res.redirect('/movies');
                return [2 /*return*/];
        }
    });
}); });
//Home Route for all the movies
movies.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var API, trendingMovies, movies;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=8a84e44e1b62f0e80accee95d9a91cd0')];
            case 1:
                API = _a.sent();
                return [4 /*yield*/, API.json()];
            case 2:
                trendingMovies = _a.sent();
                return [4 /*yield*/, Movie.find()];
            case 3:
                movies = _a.sent();
                res.render('index', { movies: movies, trendingMovies: trendingMovies });
                return [2 /*return*/];
        }
    });
}); });
//Render new movie page
movies.get('/new', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.render('newMovie'); // 
        return [2 /*return*/];
    });
}); });
//Get favorites pages
movies.get('/favorites', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.render('favorites'); //page pending formatting
        return [2 /*return*/];
    });
}); });
//Create a movie
movies.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: //this route needs work. It does post but without the body even though i put a subject in the body of postman
            return [4 /*yield*/, Movie.create(req.body)];
            case 1:
                _a.sent();
                res.status(303).redirect('/movies');
                return [2 /*return*/];
        }
    });
}); });
//Get a specific movie page - API NEEDS WORK
movies.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, movie, movieJson;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, Movie.findById(id)];
            case 1:
                movie = _a.sent();
                movieJson = movie.json();
                console.log(movieJson, "Movie JSON object");
                res.render('movieShow', { movie: movie });
                return [2 /*return*/];
        }
    });
}); });
//Get edit page for movie
movies.get('/:id/edit', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, movie;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, Movie.findById(id)];
            case 1:
                movie = _a.sent();
                res.render('movieEdit', { movie: movie }); // moviesEdit needs to be created
                return [2 /*return*/];
        }
    });
}); });
//Delete movie
movies.delete('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, Movie.findByIdAndDelete(id)];
            case 1:
                _a.sent();
                res.redirect('/movies');
                return [2 /*return*/];
        }
    });
}); });
//Update movie
movies.put('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, Movie.findByIdAndUpdate(id, req.body)];
            case 1:
                _a.sent();
                res.status(303).redirect("/movies/".concat(id));
                return [2 /*return*/];
        }
    });
}); });
module.exports = movies;
