/*
  Warnings:

  - You are about to drop the column `user1Id` on the `UserConnection` table. All the data in the column will be lost.
  - You are about to drop the column `user2Id` on the `UserConnection` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserConnection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user1Email" TEXT,
    "user2Email" TEXT,
    "canEdit" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserConnection_user1Email_fkey" FOREIGN KEY ("user1Email") REFERENCES "User" ("email") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "UserConnection_user2Email_fkey" FOREIGN KEY ("user2Email") REFERENCES "User" ("email") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_UserConnection" ("canEdit", "id") SELECT "canEdit", "id" FROM "UserConnection";
DROP TABLE "UserConnection";
ALTER TABLE "new_UserConnection" RENAME TO "UserConnection";
CREATE INDEX "UserConnection_user1Email_user2Email_idx" ON "UserConnection"("user1Email", "user2Email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
