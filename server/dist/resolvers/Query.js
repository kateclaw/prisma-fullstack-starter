"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
exports.default = {
    me: function (parent, args, ctx, info) {
        var id = utils_1.getUserId(ctx);
        return ctx.db.query.user({ where: { id: id } }, info);
    },
};
//# sourceMappingURL=Query.js.map