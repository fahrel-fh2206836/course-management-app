import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class AppRepo {
    constructor() {}

    async getUsers() {
        return await prisma.user.findMany();
    }

    async getUser(username, password) {
        const user = await prisma.user.findUnique({
            where: {
              username: username,
              password: password
            }
          });
        
        if(!user) {
            return { error: "Wrong credentials" }
        }
        return user;
    }

}

export default new AppRepo();