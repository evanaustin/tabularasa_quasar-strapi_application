"use strict";

module.exports = {
  async logout(ctx) {
    console.log("Attempting logout...");
    ctx.cookies.set("token", null);
    ctx.cookies.set("token.sig", null);
    ctx.send({
      authorized: true,
      message: "Successfully destroyed session",
    });
  },
};
