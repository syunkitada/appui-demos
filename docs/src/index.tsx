import auth from "./appui/src/apps/auth";
import provider from "./appui/src/provider";
import app from "./app";

$(function () {
    provider.register(new app.Provider());
    auth.init();
});
