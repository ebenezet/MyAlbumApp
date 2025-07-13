import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

// getting data from supabase
const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

// Checking that we reached the root route
app.get("/", (req, res) => {
  res.send("You've reached the root route");
});

/// GET ROUTES
// request a list of all albums in the server

app.get("/albums", async (req, res) => {
  try {
    if (req.query.withGenres) {
      const albums = await db.query(`
            SELECT genres.name, ARRAY_AGG(albums.title) AS albumtitle
            FROM albums
            JOIN genres ON genres.id = albums.genre_id  
            JOIN albums_eras ON albums_eras.album_id = albums.id 
            GROUP BY genres.id
            `);
      res.status(200).json(albums.rows);
    } else if (req.query.byArtist) {
      const albums = await db.query(`SELECT * FROM albums ORDER BY artist`);
      res.status(200).json(albums.rows);
    } else {
      const albums = await db.query(`SELECT * FROM albums `);
      res.status(200).json(albums.rows);
    }
  } catch (event) {
    res.status(500).json({ error: event });
  }
});

// request info about a particular album
app.get("/albums/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const album = await db.query(`SELECT * FROM albums WHERE id = $1`, [id]);
    res.status(200).json(album.rows);
  } catch (event) {
    res.status(500).json({ error: event });
  }
});

// request a list of all genres in the server
app.get("/genres", async (req, res) => {
  try {
    const genres = await db.query(`SELECT * FROM genres`);
    res.status(200).json(genres.rows);
  } catch (event) {
    res.status(500).json({ error: event });
  }
});

// request a list of all eras in the server
app.get("/eras", async (req, res) => {
  try {
    const eras = await db.query(`SELECT * FROM eras`);
    res.status(200).json(eras.rows);
  } catch (event) {
    res.status(500).json({ error: event });
  }
});

// POST ROUTES
// Add an album in the album database

app.post("/albums", async (req, res) => {
  try {
    const { title, artist, year, cover, genre_id } = req.body;
    const result = await db.query(
      `INSERT INTO albums (title, artist, year, cover, genre_id) VALUES (
        $1,
        $2,
        $3,
        $4,
        $5
      )`,
      [title, artist, year, cover, genre_id]
    );

    res.status(201).json("Thank you for adding an album!");
  } catch (event) {
    res.status(500).json({ error: event });
  }
});

// Add a genre in the album database

app.post("/genres", async (req, res) => {
  try {
    const { name } = req.body;
    const result = await db.query(`INSERT INTO genres (name) VALUES ($1)`, [
      name,
    ]);

    res.status(201).json("Thank you for adding a genre!");
  } catch (event) {
    res.status(500).json({ error: event });
  }
});

// Add an era in the album database

app.post("/eras", async (req, res) => {
  try {
    const { name } = req.body;
    const result = await db.query(`INSERT INTO eras (name) VALUES ($1)`, [
      name,
    ]);

    res.status(201).json("Thank you for adding an era!");
  } catch (event) {
    res.status(500).json({ error: event });
  }
});

// DELETE ROUTES
// Remove an album from the album database

app.delete("/albums/:id", async (req, res) => {
  try {
    const result = await db.query(
      `DELETE FROM albums WHERE id = $1 RETURNING *`,
      [req.params.id]
    );
    res.status(200).json(result.rows);
  } catch (event) {
    res.status(500).json({ error: event });
  }
});

// Remove a genre from the genre database
app.delete("/genres/:id", async (req, res) => {
  try {
    const result = await db.query(
      `DELETE FROM genres WHERE id = $1 RETURNING *`,
      [req.params.id]
    );
    res.status(200).json(result.rows);
  } catch (event) {
    res.status(500).json({ error: event });
  }
});

// Remove an era from the era database
app.delete("/eras/:id", async (req, res) => {
  try {
    const result = await db.query(
      `DELETE FROM eras WHERE id = $1 RETURNING *`,
      [req.params.id]
    );
    res.status(200).json(result.rows);
  } catch (event) {
    res.status(500).json({ error: event });
  }
});

app.listen(4000, () => {
  console.log(`Server is running on PORT 4000... :)`);
});
