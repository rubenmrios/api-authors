import { PdoTransactionQuery } from "../../config/mysql";

const selectAllAuthors = "SELECT * FROM author";
const selectAuthorId = "SELECT * FROM author WHERE id = ?";
const saveAuthor = "INSERT INTO author (name,last_name,phone) VALUES ";
const updateAuthor =
  "UPDATE author SET name = ?,last_name = ?,phone = ? WHERE id = ?";
const deletedAuthor = "UPDATE author SET deleted_at = NOW() WHERE id = ?";

export const getAuthors = async (): Promise<string> => {
  let results = await PdoTransactionQuery(selectAllAuthors);
  return results;
};
export const getAuthor = async (id): Promise<string> => {
  let results = await PdoTransactionQuery(selectAuthorId, [id]);
  return results;
};
export const createAuthor = async (name, lastName, phone): Promise<string> => {
  let results = await PdoTransactionQuery(
    `${saveAuthor} ('${name}','${lastName}','${phone}')`
  );
  return results;
};

export const editAuthor = async (name, lastName, phone, id): Promise<any> => {
  let result = await PdoTransactionQuery(updateAuthor, [
    name,
    lastName,
    phone,
    id,
  ]);
  return result;
};
export const updateDeleteAuthor = async (id): Promise<any> => {
  let result = await PdoTransactionQuery(deletedAuthor, [id]);
  return result;
};
