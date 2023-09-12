/**
 * GET /workers
 */

export async function fetchAndPopulateList(context) {
    // Create a prepared statement with our query
    // ps stands for "prepared statement"
    const ps = context.env.DB.prepare('SELECT * from students');
    const { results } = await ps.all();

    return Response.json(results);
}