import { PrismaClient } from "@prisma/client";
export const client = new PrismaClient();

export async function getData() {
    client.$connect();
    const result = client.$queryRaw`Select * from grocery `;
    console.log(result.then(d => {
        return d;
    }));
}