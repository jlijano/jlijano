# Data and Persistence Architecture

## Current scope
The site is presented as a static frontend. No application database has been verified in the inspected files. Do **not** introduce tables, migrations, or fake persistence just to satisfy a template.

## If persistence becomes necessary
Document business entities and ownership, data classification, ERD/schema, data retention and deletion, access controls, migration and rollback strategy, backup/restore testing, referential integrity, and auditability. Database-side constraints must complement server-side validation.

## Required migrations policy
Use versioned, reversible migrations where feasible; test on non-production data first; make backups for destructive changes; never modify production records or seed accounts without explicit approval.
