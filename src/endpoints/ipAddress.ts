import type { Context } from 'hono';

export const handleIpAddress = async (c: Context) => {
  // 获取客户端IP地址
  // 检查 Cloudflare 提供的 CF-Connecting-IP 头
  let clientIp = c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For') || c.req.header('X-Real-IP');
  
  if (!clientIp) {
    // 如果没有找到，尝试从环境变量中获取
    // 在 Cloudflare Workers 环境中，请求对象可能有 cf 属性
    const cf = c.req.raw.cf;
    if (cf && cf['client-ip'] && typeof cf['client-ip'] === 'string') {
      clientIp = cf['client-ip'];
    } else {
      // 作为备选方案，返回连接信息中的IP
      clientIp = c.req.header('x-real-ip') || c.req.raw.headers.get('x-forwarded-for')?.split(',')[0];
    }
  }
  
  // 如果仍找不到，则返回错误信息
  if (!clientIp) {
    return c.json({ error: 'Unable to determine client IP address' }, 400);
  }

  return c.json({ ip: clientIp });
};