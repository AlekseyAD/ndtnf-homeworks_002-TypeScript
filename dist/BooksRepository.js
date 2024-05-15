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
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./models/Book");
class BooksRepository {
    createBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newBook = new Book_1.BookModel(book);
                yield newBook.save();
                return newBook;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    getBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Book_1.BookModel.findById(id);
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Book_1.BookModel.find();
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    updateBook(id, book) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundBook = yield Book_1.BookModel.findById(id);
                yield foundBook.update(book);
                return foundBook;
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    deleteBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Book_1.BookModel.deleteOne({ _id: id });
            }
            catch (e) {
                console.error(e);
            }
        });
    }
}
exports.default = BooksRepository;
