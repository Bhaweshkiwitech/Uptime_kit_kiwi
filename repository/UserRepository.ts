import { BaseRepository } from "./base/base.repository";

import { User } from "../entities/user.entities";

// now, we have all code implementation from BaseRepository
export class UserRepository extends BaseRepository<User>{

    // here, we can create all especific stuffs of Author Repository
    countOfAuthor(): Promise<number> {
        return this._collection.count({})
    }
}