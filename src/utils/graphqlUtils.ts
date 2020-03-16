export function CheckQuery<T>(queryResult: GenericQueryResult<T>): T {
  if (queryResult.errors) {
    console.error(queryResult.errors)
    throw new Error(queryResult.errors)
  }
  if (queryResult === undefined) {
    throw new Error("query result was undefined")
  }

  return queryResult.data!
}

interface GenericQueryResult<T> {
  errors?: any;
  data?: T | undefined;
}
