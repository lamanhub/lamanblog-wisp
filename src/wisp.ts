import { buildWispClient } from "@wisp-cms/client/src/index";
import config from "./config";

const wisp = buildWispClient({
  baseUrl: "https://www.wisp.blog",
  blogId: config.wisp_blog_id,
});

export default wisp;
