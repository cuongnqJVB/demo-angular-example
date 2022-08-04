import { listUsers } from "src/app/config/layout.config";

export class UserService {
    getUsers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(listUsers);
            }, 500);
        });
    }
}