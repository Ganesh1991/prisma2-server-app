# Migration `20200315142650-init`

This migration has been generated at 3/15/2020, 2:26:50 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Employee" (
    "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    "email" text  NOT NULL DEFAULT '',
    "emd_id" text  NOT NULL ,
    "name" text   ,
    "settings" text   ,
    "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00',
    PRIMARY KEY ("emd_id")
) 

CREATE UNIQUE INDEX "Employee.email" ON "public"."Employee"("email")

ALTER TABLE "public"."Employee" ADD FOREIGN KEY ("settings")REFERENCES "public"."Settings"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200312232858-init2..20200315142650-init
--- datamodel.dml
+++ datamodel.dml
@@ -2,22 +2,31 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider = "prisma-client-js"
 }
+model Employee {
+  emd_id    String    @id @default(cuid())
+  email     String    @unique
+  name      String?
+  settings  Settings?
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
+}
+
 model User {
-  user_id   String   @id @default(cuid())
-  email     String   @unique
+  user_id   String    @id @default(cuid())
+  email     String    @unique
   name      String?
   settings  Settings?
-  createdAt DateTime @default(now())
-  updatedAt DateTime @updatedAt
+  createdAt DateTime  @default(now())
+  updatedAt DateTime  @updatedAt
 }
 model Settings {
   id       String  @id @default(cuid())
```


