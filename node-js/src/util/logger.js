import logger from "pino";

const log = logger({
  base: { pid: false },
  transport: {
    target: "pino-pretty",
    options: {
      colorized: true,
    },
    timestamp: () => `, "time": "${new date().toLocalString()}"`,
  },
});

export default log;
