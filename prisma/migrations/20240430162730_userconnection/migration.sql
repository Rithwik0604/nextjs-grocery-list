-- CreateTable
CREATE TABLE "UserConnection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user1Id" TEXT,
    "user2Id" TEXT,
    "till" DATETIME NOT NULL,
    "canEdit" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserConnection_user1Id_fkey" FOREIGN KEY ("user1Id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "UserConnection_user2Id_fkey" FOREIGN KEY ("user2Id") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "UserConnection_user1Id_user2Id_idx" ON "UserConnection"("user1Id", "user2Id");
