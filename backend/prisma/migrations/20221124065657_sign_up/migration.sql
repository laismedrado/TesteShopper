-- CreateTable
CREATE TABLE "signup" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "signup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "signup_email_key" ON "signup"("email");

-- CreateIndex
CREATE UNIQUE INDEX "signup_password_key" ON "signup"("password");
