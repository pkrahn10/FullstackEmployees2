import db from "#db/client";
import { createEmployee } from "./queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  const employeesList = [
    { name: "jack", birthday: "03-06-2001", salary: 60000 },
    { name: "john", birthday: "08-11-1999", salary: 95000 },
    { name: "nick", birthday: "10-25-1950", salary: 70000 },
    { name: "lexi", birthday: "06-12-1999", salary: 80000 },
    { name: "tom", birthday: "11-15-2000", salary: 90000 },
    { name: "mike", birthday: "06-20-2002", salary: 100000 },
    { name: "karen", birthday: "09-13-1973", salary: 75000 },
    { name: "sarah", birthday: "08-23-1990", salary: 85000 },
    { name: "marcus", birthday: "02-28-1980", salary: 95000 },
    { name: "brady", birthday: "05-31-2003", salary: 110000 },
    { name: "parker", birthday: "10-22-1999", salary: 120000 },
  ];

  for (const employee of employeesList) {
    await createEmployee(employee);
  }
  console.log("Database seeded successfully");
}
