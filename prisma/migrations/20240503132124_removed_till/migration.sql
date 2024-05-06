/*
  Warnings:

  - You are about to drop the column `till` on the `UserConnection` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserConnection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user1Id" TEXT,
    "user2Id" TEXT,
    "canEdit" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserConnection_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "UserConnection_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_UserConnection" ("canEdit", "id", "user1Id", "user2Id") SELECT "canEdit", "id", "user1Id", "user2Id" FROM "UserConnection";
DROP TABLE "UserConnection";
ALTER TABLE "new_UserConnection" RENAME TO "UserConnection";
CREATE INDEX "UserConnection_user1Id_user2Id_idx" ON "UserConnection"("user1Id", "user2Id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
