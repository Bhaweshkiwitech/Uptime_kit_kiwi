"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const base_repository_1 = require("./base/base.repository");
// now, we have all code implementation from BaseRepository
class UserRepository extends base_repository_1.BaseRepository {
    // here, we can create all especific stuffs of Author Repository
    countOfAuthor() {
        return this._collection.count({});
    }
}
exports.UserRepository = UserRepository;
