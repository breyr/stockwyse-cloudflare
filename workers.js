/**
 * GET /workers
 */

const workers = document.getElementById('workersContainer');

export async function fetchAndPopulateList(context) {
    // Create a prepared statement with our query
    // ps stands for "prepared statement"
    const ps = context.env.DB.prepare('SELECT * from students');
    const { results } = await ps.all().json();

    // Clear any existing list items
    workers.innerHTML = '';

    // Loop through the data and create list items
    results.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name; // Assuming 'name' is a property in your data
        workers.appendChild(listItem);
    });

    return Response.json(results);
}