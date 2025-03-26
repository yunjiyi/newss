import process from "node:process";

export default defineEventHandler(async () => {
  if (process.env.ENABLE_LOGIN === "false") {
    return { enable: false, url: null }; // 返回禁用登录的状态
  }
  return {
    enable: true,
    url: `https://github.com/login/oauth/authorize?client_id=${process.env.G_CLIENT_ID || "default_value"}`,
  };
});
