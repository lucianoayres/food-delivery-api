import winston from "winston";

// setup winston logger
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "delivery-api.log" }),
  ],
  format: combine(label({ label: "delivery-api" }), timestamp(), myFormat),
});
// end of setup winston logger

//loggertest.info("API Started");

/*
async function infoApi() {
  loggertes.info("API Started");
}

async function infoRouteRequest(req) {
  loggertest.info(
    `${req.ip}: ${req.protocol}://${req.hostname}${req.originalUrl}`
  );
}
*/
