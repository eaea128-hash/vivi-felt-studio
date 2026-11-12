// 將舊網址 vivi-felt-studio.pages.dev 以 301 轉址到正式網域 vivifelt.com
// 只轉址正式的 pages.dev 主機名稱，預覽部署（xxx.vivi-felt-studio.pages.dev）不受影響。
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === 'vivi-felt-studio.pages.dev') {
    url.hostname = 'vivifelt.com';
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
