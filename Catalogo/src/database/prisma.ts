import {PrismaPg} from "@prisma/adapter-pg";
import {PrismaClient} from "../generated/prisma/client.js"

const adapter = new PrismaPg({
    connectionString: "postgresql://postgres:123MARCE%23@localhost:5432/catalogoMusica?schema=public",
});

const prisma=new PrismaClient({adapter});

export default prisma;
