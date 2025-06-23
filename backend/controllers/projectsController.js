const pool = require('../db');

exports.getProjects = async (req, res) => {
  const { category } = req.query;

  try {
    let query = `
      SELECT p.id_project, p.title, p.description, p.image_url, p.github_url,
             array_agg(DISTINCT c.name) AS categories,
             array_agg(DISTINCT t.name) AS technologies
      FROM project p
      LEFT JOIN project_category pc ON p.id_project = pc.id_project
      LEFT JOIN category c ON pc.id_category = c.id_category
      LEFT JOIN project_technology pt ON p.id_project = pt.id_project
      LEFT JOIN technology t ON pt.id_technology = t.id_technology
    `;
    const params = [];

    if (category) {
      query += ` WHERE c.name = $1 `;
      params.push(category);
    }

    query += `
      GROUP BY p.id_project, p.title, p.description, p.image_url, p.github_url
      ORDER BY p.id_project DESC
    `;

    const { rows } = await pool.query(query, params);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching projects' });
  }
};
