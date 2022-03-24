import { Connection, createConnection } from "mysql2/promise";

export interface IPdoMysql {
    readonly connection: Connection;
}

export const PdoMannager = async (): Promise<Connection> => {
    try {
        const connection = await createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USERNAME,
            password:process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306
        });
        await connection.connect();
        await connection.beginTransaction();
        return connection;
    } catch (error) {
        console.error(error);
        throw new Error("Connection error, please verify the condif or database in ready?");
    }
}


export const PdoMannagerQuery = async (con: Connection, query: string, args?: Array<any>): Promise<any> => {
    try {
        const result = await con.query(query, args);
        await con.commit();
        return result;
        
    } catch (error) {
        console.log(error)
        await con.rollback();
        throw new Error("Execute query error");
    }
}

export const PdoTransactionQuery = async (query: string, args?: Array<any>) => {
    const con = await PdoMannager();
    const result = await PdoMannagerQuery(con, query, args);
    con.destroy();
    return result[0];
}
