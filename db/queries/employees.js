/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  const sql = `
INSERT INTO employees
(name, birthday, salary)
VALUES
($1, $2, $3, $4)
RETURNING*
`;
  const {
    rows: [employee],
  } = await db.query(sql, [name, birthday, salary]);
  return employee;
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const sql = `
    SELECT *
    FROM employees
    `;
  const { rows, employees } = await db.query(sql);
  return employees;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
  app.get("/api/employees", async (req, res) => {
    const result = await db.query("SELECT * FROM employees ORDER by id");
    res.json(results.rows);
  });
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
  app.route("/api/customers/:id").put(async (req, res) => {
    try {
      const { id } = req.params;
      const { name, birthday, salary } = req.body;
      const sql = `
      UPDATE employees
      SET
      name = $2
      birthday = $3
      salary = $4
      WHERE id = $1
      RETURNING *
      `;
      const {
        rows: [employees],
      } = await db.query(sql, [id, name, birthday, salary]);
      if (!employee) {
        return res.status(404).json({ error: "Employee not found." });
      }
      res.json(employee);
    } catch (error) {
      console.error("Error updating employee:", error);
      res.status(500).json({ error: "Failed to updated employee" });
    }
  });
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  app.route("/api/employees/:id").delete(async (req, res) => {
    try {
      const { id } = req.params;
      const sql = `
      DELETE FROM employees
      WHERE id = $1
      RETURNING *
      `;
      const {
        rows: [employee],
      } = await db.query(sql, [id]);
      if (!employee) {
        return res.status(404).json({ error: "Employee not found." });
      }
      res.json(employee);
    } catch (error) {
      console.error("Error deleting employee:", error);
      res.status(500).json({ error: "Failed to delete employee" });
    }
  });
}
